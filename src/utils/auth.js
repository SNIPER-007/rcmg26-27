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
      username: user.username,
      name: user.name,
      role: user.role,
      designation: user.designation,
      email: user.email || "",
      phone: user.phone || "",
      riId: user.riId || "",
      dob: user.dob || "",
    })
  );
}

export function getSession() {
  const session = localStorage.getItem("rcmg_user_session");
  return session ? JSON.parse(session) : null;
}

export function clearSession() {
  localStorage.removeItem("rcmg_user_session");
}
