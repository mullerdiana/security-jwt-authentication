import { generateKeyPairSync, createSign, createVerify } from "crypto";

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


//Documento
let data = "String que será assinada"

// Assinatura
const subscriber = createSign('rsa-sha256');

subscriber.update(data);

const signature = subscriber.sign(privateKey, 'hex');
console.log(`Assinatura: ${signature}`)

//Envio do documento --- Documento, assinatura e chave pública

const verifier = createVerify('rsa-sha256');
verifier.update(data);

const isVerified = verifier.verify(publicKey, signature, 'hex')
console.log(`Resultado da verificação: ${isVerified}`)