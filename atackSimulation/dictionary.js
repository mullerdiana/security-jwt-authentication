import { createHash } from "crypto";

class User {
  constructor(name, password) {
    (this.name = name), (this.hash = this.convertHash(password));
  }

  convertHash(password) {
    return createHash("sha256").update(password).digest("hex");
  }

  authentication(name, password) {
    if (name === this.name && this.hash === this.convertHash(password)) {
      console.log("Usuário autenticado com sucesso!");
      return true;
    }

    // console.log("Usuário ou senha incorretos!");
    return false;
  }
}

const user = new User("Diana Müller", "senha123");

// código omitido

const commonPassword = ["senha", "123456", "senha123", "admin", "blink182","meuAniversario", "senha123456", "brasil", "102030"]

commonPassword.map(password=>{
  if(user.authentication("Diana Müller", password)){
    console.log(`A senha de ${user.name} é ${password}`)
  }
})