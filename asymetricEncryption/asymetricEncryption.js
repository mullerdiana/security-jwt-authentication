import { generateKeyPairSync, publicEncrypt, privateDecrypt } from "crypto";

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,

  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});


// console.log(publicKey)
// console.log(privateKey)

const encryptedData = publicEncrypt(publicKey, Buffer.from("Mensagem que deve ficar secreta"))
console.log("mensagem criptogradafa", encryptedData.toString('hex'));

const decipherData = privateDecrypt(privateKey,encryptedData);
console.log("mensagem decifrada",decipherData.toString('utf-8'));