import https from "https";
import crypto from "crypto";

const PROJECT_ID = "rcmg-portal";
const API_KEY = "AIzaSyB54MP-wQqMAxnvQPu3wsDx3YvNFOin9b4";

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

function request(options, bodyObj = null) {
  return new Promise((resolve, reject) => {
    const bodyStr = bodyObj ? JSON.stringify(bodyObj) : null;
    if (bodyStr) {
      options.headers = {
        ...options.headers,
        "Content-Length": Buffer.byteLength(bodyStr),
      };
    }
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(data) }); }
        catch { resolve({ status: res.statusCode, body: data }); }
      });
    });
    req.on("error", reject);
    if (bodyStr) req.write(bodyStr);
    req.end();
  });
}

async function firestoreGet(docPath) {
  return request({
    hostname: "firestore.googleapis.com",
    path: `/v1/projects/${PROJECT_ID}/databases/(default)/documents/${docPath}?key=${API_KEY}`,
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
}

async function firestorePatch(docPath, fields) {
  return request(
    {
      hostname: "firestore.googleapis.com",
      path: `/v1/projects/${PROJECT_ID}/databases/(default)/documents/${docPath}?key=${API_KEY}`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    },
    { fields }
  );
}

// Convert plain JS primitives to Firestore REST API fields
function s(v) { return { stringValue: String(v || "") }; }
function b(v) { return { booleanValue: Boolean(v) }; }
function n(v) { return { integerValue: String(v || 0) }; }

const coreAndBodMembers = [
  // CORE
  { name: "Chittansh Pancholi", designation: "President", username: "Chittansh", password: "Chittansh.7", role: "PRESIDENT", category: "CORE" },
  { name: "Parin Gala", designation: "IPP", username: "Parin", password: "Parin.8", role: "IPP", category: "CORE" },
  { name: "Shraddha Sutar", designation: "Secretary", username: "Shraddha", password: "Shraddha.9", role: "SECRETARY", category: "CORE" },
  { name: "Triman Oberoi", designation: "Vice President", username: "Triman", password: "Triman.10", role: "VICE_PRESIDENT", category: "CORE" },
  { name: "Om Walanju", designation: "Vice President", username: "Om", password: "Om.11", role: "VICE_PRESIDENT", category: "CORE" },
  { name: "Prajyot Mhajan", designation: "Jt Secretary", username: "Prajyot", password: "Prajyot.12", role: "JT_SECRETARY", category: "CORE" },
  { name: "Tanishka Chandan", designation: "Jt Secretary", username: "Tanishka", password: "Tanishka.13", role: "JT_SECRETARY", category: "CORE" },
  { name: "Khushi Gandhi", designation: "Jt Secretary", username: "Khushi", password: "Khushi.14", role: "JT_SECRETARY", category: "CORE" },
  { name: "Purav Shah", designation: "Treasurer", username: "Purav", password: "Purav.15", role: "TREASURER", category: "CORE" },
  { name: "Kunjal Pal", designation: "Treasurer", username: "Kunjal", password: "Kunjal.16", role: "TREASURER", category: "CORE" },
  { name: "Yashvi Shah", designation: "SAA/VP", username: "Yashvi", password: "Yashvi.17", role: "SAA_VP", category: "CORE" },
  { name: "Khushi Modi", designation: "HRD", username: "Khushi.m", password: "Khushi.18", role: "HRD", category: "CORE" },
  { name: "Sayam Parekh", designation: "HRD", username: "Sayam", password: "Sayam.19", role: "HRD", category: "CORE" },
  { name: "Sanjana Sardesai", designation: "HRD", username: "Sanjana", password: "Sanjana.20", role: "HRD", category: "CORE" },
  { name: "Siddhesh Dicholkar", designation: "Chairman Avenues / Sports", username: "Siddhesh", password: "Siddhesh.21", role: "CHAIRMAN_AVENUES", category: "CORE" },
  { name: "Ayush Shah", designation: "Chairman PRM", username: "Ayush", password: "Ayush.22", role: "CHAIRMAN_PRM", category: "CORE" },
  { name: "Hraday Karani", designation: "Chairman Community Service", username: "Hraday", password: "Hraday.23", role: "CHAIRMAN_COMMUNITY_SERVICE", category: "CORE" },
  { name: "Tisha Kothari", designation: "Club Advisor", username: "Tisha", password: "Tisha.24", role: "CLUB_ADVISOR", category: "CORE" },

  // BOD
  { name: "Eshva Padia", designation: "Events & Fellowship / PIS", username: "Eshva", password: "Eshva.25", role: "BOD", category: "BOD" },
  { name: "Yaj Shah", designation: "Events & Fellowship", username: "Yaj", password: "Yaj.26", role: "BOD", category: "BOD" },
  { name: "Avanti Shirkande", designation: "IS / Digital Communication", username: "Avanti", password: "Avanti.27", role: "BOD", category: "BOD" },
  { name: "Merrisca Pereira", designation: "IS / Editorial", username: "Merrisca", password: "Merrisca.28", role: "BOD", category: "BOD" },
  { name: "Sneha Singh", designation: "PD", username: "Sneha", password: "Sneha.29", role: "BOD", category: "BOD" },
  { name: "Chetan Bhabad", designation: "ED / PRM", username: "Chetan", password: "Chetan.30", role: "BOD", category: "BOD" },
  { name: "Jill Shah", designation: "ED / PRM", username: "Jill", password: "Jill.31", role: "BOD", category: "BOD" },
  { name: "Aditya Hemani", designation: "Digital Communication / SM", username: "Aditya", password: "Aditya.32", role: "BOD", category: "BOD" },
  { name: "Abhishek Yadav", designation: "SM", username: "Abhishek", password: "Abhishek.33", role: "BOD", category: "BOD" },
  { name: "Hitanshee Doshi", designation: "Community Service", username: "Hitanshee", password: "Hitanshee.34", role: "BOD", category: "BOD" },
  { name: "Tanvi Kadam", designation: "Digital Communication", username: "Tanvi", password: "Tanvi.35", role: "BOD", category: "BOD" },
  { name: "Simran Shreya", designation: "Events & Fellowship / SM", username: "Simran", password: "Simran.36", role: "BOD", category: "BOD" },
  { name: "Yashvi Doshi", designation: "Community Service", username: "Yashvi.d", password: "Yashvi.37", role: "BOD", category: "BOD" },
  { name: "Pratham Satra", designation: "Sports", username: "Pratham", password: "Pratham.38", role: "BOD", category: "BOD" },
  { name: "Saikumar", designation: "PD", username: "Saikumar", password: "Saikumar.39", role: "BOD", category: "BOD" },
  { name: "Harsh Pawar", designation: "Digital Communication", username: "Harsh", password: "Harsh.40", role: "BOD", category: "BOD" },
  { name: "Najar", designation: "Editorial", username: "Najar", password: "Najar.41", role: "BOD", category: "BOD" },
  { name: "Naytik", designation: "Sports", username: "Naytik", password: "Naytik.42", role: "BOD", category: "BOD" },
];

const gbmMembers = [
  { name: "Naman Sutaria", designation: "General Body Member", category: "GBM" },
  { name: "Phreesha Udani", designation: "General Body Member", category: "GBM" },
  { name: "Apurva Mehta", designation: "General Body Member", category: "GBM" },
  { name: "Prachi Somaiya", designation: "General Body Member", category: "GBM" },
  { name: "Kshitija Cholera", designation: "General Body Member", category: "GBM" },
  { name: "Neksha", designation: "General Body Member", category: "GBM" },
  { name: "Jainam Rita", designation: "General Body Member", category: "GBM" },
  { name: "Palak Shah", designation: "General Body Member", category: "GBM" },
  { name: "Pratik Gupta", designation: "General Body Member", category: "GBM" },
  { name: "Vivek Agrawal", designation: "General Body Member", category: "GBM" },
];

async function seedUser(m, isGbm = false) {
  const docId = isGbm
    ? `gbm_${m.name.toLowerCase().replace(/[^a-z0-9]/g, "_")}`
    : m.username.toLowerCase();

  console.log(`Processing user document: users/${docId}...`);
  const check = await firestoreGet(`users/${docId}`);

  let existingFields = {};
  if (check.status === 200 && check.body && check.body.fields) {
    existingFields = check.body.fields;
  }

  const passHash = isGbm ? "" : hashPassword(m.password);

  const fields = {
    name: s(m.name),
    username: s(isGbm ? m.name.toLowerCase().replace(/[^a-z0-9]/g, "_") : m.username),
    passwordHash: s(passHash),
    designation: s(m.designation),
    role: s(isGbm ? "GBM" : m.role),
    category: s(m.category),
    canLogin: b(!isGbm),
    active: b(true),

    // Retain existing manually added fields if present, else blank/null defaults
    dateOfBirth: existingFields.dateOfBirth || s(""),
    contactNumber: existingFields.contactNumber || s(""),
    email: existingFields.email || s(""),
    rotaryInternationalId: existingFields.rotaryInternationalId || s(""),

    // Also alias fields for compatibility if existing views use phone / riId / dob
    dob: existingFields.dob || s(""),
    phone: existingFields.phone || s(""),
    riId: existingFields.riId || s(""),

    projectsChaired: existingFields.projectsChaired || n(0),
    draftsSaved: existingFields.draftsSaved || n(0),
    createdAt: existingFields.createdAt || s(new Date().toISOString()),
  };

  const res = await firestorePatch(`users/${docId}`, fields);
  if (res.status === 200) {
    console.log(`  ✓ ${m.name} (@${isGbm ? "GBM" : m.username}) updated/created successfully.`);
  } else {
    console.error(`  ✗ Failed to update ${docId} (${res.status}):`, res.body);
  }
}

async function main() {
  console.log("==================================================");
  console.log("Seeding RCMG Firestore Users (CORE, BOD, GBM)");
  console.log("==================================================");

  for (const m of coreAndBodMembers) {
    await seedUser(m, false);
  }

  for (const g of gbmMembers) {
    await seedUser(g, true);
  }

  console.log("==================================================");
  console.log("✓ All 36 CORE/BOD members + 10 GBM members seeded!");
  console.log("==================================================");
}

main().catch(console.error);
