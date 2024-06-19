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

const user = new User("Diana Müller", "1234");

for (let testPassword=0; testPassword<2000; testPassword++){
    if(user.authentication("Diana Müller", testPassword.toString())){
        console.log(`A senha de ${user.name} é ${testPassword}`)
    }
}

// console.log(user);

// user.authentication("Diana Müller", "minha senha fake");
