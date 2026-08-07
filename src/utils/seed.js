import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { hashPassword } from "./auth";

export async function seedDefaultUser() {
  try {
    const userRef = doc(db, "users", "chittansh");
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      const passwordHash = await hashPassword("Chittansh.7");
      await setDoc(userRef, {
        username: "chittansh",
        passwordHash,
        name: "Chittansh Pancholi",
        designation: "President",
        role: "president",
        dob: "",
        phone: "",
        email: "",
        riId: "",
        active: true,
        createdAt: new Date().toISOString(),
      });
      console.log("Default admin user 'chittansh' seeded successfully.");
    }
  } catch (error) {
    console.error("Error seeding default user:", error);
  }
}
