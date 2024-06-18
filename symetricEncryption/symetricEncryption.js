import { createCipheriv, randomBytes, createDecipheriv } from "crypto";

const message = "Qualquer mensagem para exemplo";
const key = randomBytes(32);
const vi = randomBytes(16);

const cipher = createCipheriv("aes256", key, vi);

const encriptedMessage =
  cipher.update(message, "utf-8", "hex") + cipher.final("hex");

console.log(encriptedMessage);

// Transmissão ---- key, vi, message
// Decifrar

const decipher = createDecipheriv("aes256", key, vi);

const DecriptedMessage =
  decipher.update(encriptedMessage, "hex", "utf-8") + decipher.final("utf-8");
console.log("desifrada:",DecriptedMessage);
