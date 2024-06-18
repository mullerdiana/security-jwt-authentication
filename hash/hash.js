import { createHash } from "crypto";

function convertHash(password) {
  return createHash("sha256").update(password).digest("hex");
}

console.log(convertHash("uma senha"));

class User {
  constructor(name, password) {
    (this.name = name), (this.hash = convertHash(password));
  }

  authentication(name, password) {
    if(name === this.name && this.hash === convertHash(password)){
        console.log("Usuário autenticado com sucesso!")
        return true;
    }

    console.log("Usuário ou senha incorretos!")
    return false;
  }
}

const user = new User("Diana Müller", "minha senha fake")
console.log(user);

user.authentication("Diana Müller", "minha senha fake")
