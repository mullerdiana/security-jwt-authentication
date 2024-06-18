import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

function convertHashSalt(password) {
  const salt = randomBytes(16).toString("hex");

  const HashedPassword = scryptSync(password, salt, 64).toString("hex");

  return `${salt}:${HashedPassword}`;
}

class User {
  constructor(name, password) {
    this.name = name;
    [this.salt, this.hash] = convertHashSalt(password).split(":");
  }
  authentication(name, password) {
    if (name === this.name) {
      const testHash = scryptSync(password, this.salt, 64);
      const realHash = Buffer.from(this.hash, "hex");

      const correspondingHashes = timingSafeEqual(testHash, realHash);

      if (correspondingHashes) {
        console.log("Usuário autenticado com sucesso!");
        return true;
      }
    }
    console.log("Usuário ou senha incorretos!");
    return false;
  }
}

const user = new User("Diana Müller", "minha senha fake");
console.log(user);

// Teste de sucesso
user.authentication("Diana Müller", "minha senha fake")

// Teste de sucesso
user.authentication("Diana Müllr", "minha senha fake")