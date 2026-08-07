import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { hashPassword, saveSession, getSession, clearSession } from "../utils/auth";
import { seedDefaultUser } from "../utils/seed";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      // Seed default user if missing
      await seedDefaultUser();
      
      const sessionUser = getSession();
      if (sessionUser) {
        setUser(sessionUser);
      }
      setLoading(false);
    }
    init();
  }, []);

  const login = async (username, password, role) => {
    const userRef = doc(db, "users", username.toLowerCase().trim());
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      throw new Error("User does not exist.");
    }

    const userData = docSnap.data();
    
    if (!userData.active) {
      throw new Error("This account is currently inactive.");
    }

    const calculatedHash = await hashPassword(password);
    if (userData.passwordHash !== calculatedHash) {
      throw new Error("Incorrect password.");
    }

    if (userData.role.toLowerCase() !== role.toLowerCase()) {
      throw new Error(`User is not registered under the '${role}' role.`);
    }

    saveSession(userData);
    setUser({
      username: userData.username,
      name: userData.name,
      role: userData.role,
      designation: userData.designation,
      email: userData.email || "",
      phone: userData.phone || "",
      riId: userData.riId || "",
      dob: userData.dob || "",
    });

    return userData;
  };

  const logout = () => {
    clearSession();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
