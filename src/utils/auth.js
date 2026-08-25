export async function hashPassword(password) {
  const msgUint8 = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}

export function saveSession(user) {
  localStorage.setItem(
    "rcmg_user_session",
    JSON.stringify({
      id: user.id || (user.username ? user.username.toLowerCase() : ""),
      username: user.username,
      name: user.name,
      role: user.role,
      designation: user.designation,
      category: user.category || "CORE",
      canLogin: user.canLogin !== false,
      active: user.active !== false,
      email: user.email || user.emailAddress || "",
      phone: user.phone || user.contactNumber || "",
      riId: user.riId || user.rotaryInternationalId || "",
      dob: user.dob || user.dateOfBirth || "",
      projectsChaired: user.projectsChaired || 0,
      draftsSaved: user.draftsSaved || 0,
    })
  );
}

export function getSession() {
  try {
    const session = localStorage.getItem("rcmg_user_session");
    return session ? JSON.parse(session) : null;
  } catch (err) {
    console.error("Error reading user session:", err);
    return null;
  }
}

export function clearSession() {
  localStorage.removeItem("rcmg_user_session");
}
