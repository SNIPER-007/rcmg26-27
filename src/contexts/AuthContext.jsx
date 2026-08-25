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
      // 1. Restore session from localStorage if present
      const sessionUser = getSession();
      if (sessionUser) {
        setUser(sessionUser);
      }
      setLoading(false);

      // 2. Background seed check if missing
      try {
        await seedDefaultUser();
      } catch (err) {
        console.warn("Background seed skipped:", err?.code || err?.message);
      }
    }
    init();
  }, []);

  const login = async (username, password) => {
    const normalizedUsername = username.toLowerCase().trim();
    if (!normalizedUsername || !password) {
      throw new Error("Invalid username or password.");
    }

    const userRef = doc(db, "users", normalizedUsername);

    let docSnap;
    try {
      docSnap = await getDoc(userRef);
    } catch (err) {
      console.error("Firestore error on login:", err);
      throw new Error("Connection error. Please check your internet connection.");
    }

    // 1. Check if user document exists (generic error message to prevent username enumeration)
    if (!docSnap.exists()) {
      throw new Error("Invalid username or password.");
    }

    const userData = docSnap.data();

    // 2. Check if account is active
    if (userData.active === false) {
      throw new Error("This account is currently inactive.");
    }

    // 3. Check if user is allowed to log in (CORE and BOD can login, GBM cannot)
    if (userData.canLogin === false || userData.category === "GBM") {
      throw new Error("Reporting access is currently available to Core Team and BOD members.");
    }

    // 4. Verify password against stored hash or stored password string
    const calculatedHash = await hashPassword(password);
    const isValidHash = userData.passwordHash && userData.passwordHash === calculatedHash;
    const isValidPlain = userData.password && userData.password === password;

    if (!isValidHash && !isValidPlain) {
      throw new Error("Invalid username or password.");
    }

    const sessionData = {
      id: docSnap.id,
      username: userData.username || normalizedUsername,
      name: userData.name || "",
      role: userData.role || "MEMBER",
      designation: userData.designation || "",
      category: userData.category || "CORE",
      canLogin: userData.canLogin !== false,
      active: userData.active !== false,
      email: userData.email || userData.emailAddress || "",
      phone: userData.phone || userData.contactNumber || "",
      riId: userData.riId || userData.rotaryInternationalId || "",
      dob: userData.dob || userData.dateOfBirth || "",
      projectsChaired: userData.projectsChaired || 0,
      draftsSaved: userData.draftsSaved || 0,
    };

    saveSession(sessionData);
    setUser(sessionData);

    return sessionData;
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
