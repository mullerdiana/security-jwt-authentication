import { createHash } from "crypto";

// Function to create a hash from data using the specified strategy
function hashCreate(data, strategy) {
  return createHash(strategy).update(data).digest("hex");
}

// List of common passwords
const commonPassword = [
  "senha",
  "123456",
  "senha123",
  "admin",
  "blink182",
  "meuAniversario",
  "senha123456",
  "brasil",
  "102030",
];

// Create a rainbow table: an array of [password, md5 hash]
const rainbowTable = commonPassword.map((password) => {
  const hashedPassword = hashCreate(password, "md5");
  return [password, hashedPassword];
});

// Log the rainbow table for verification
console.log('Rainbow Table:', rainbowTable);

// List of leaked MD5 hashes
const leakedHashes = [
  "21232f297a57a5a743894a0e4a801fc3", // hash of "admin"
  "cedf5ab7b5c5852b3ed35d7dbe3c3835", // hash of "senha123456"
  "e10adc3949ba59abbe56e057f20f883e", // corrected hash of "123456"
];

// Map leaked hashes to corresponding passwords in the rainbow table
const crackedPasswords = leakedHashes.map((leakedHash) => {
  const entry = rainbowTable.find(([password, hashPassword]) => hashPassword === leakedHash);
  if (entry) {
    console.log(`Hash ${leakedHash} corresponds to password: ${entry[0]}`);
  } else {
    console.log(`Hash ${leakedHash} does not match any common password.`);
  }
  return entry ? entry[0] : null;
});

// Log the cracked passwords
console.log('Cracked Passwords:', crackedPasswords);
