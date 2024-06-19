import jwt from "jsonwebtoken";

const secretKey = "chaveQue DeveSerSecreta";
const token = jwt.sign(
    {
        nome: "Elis",
        apelido: "pimentinha",

    }, secretKey
)

console.log(token)

const decodedToken = jwt.verify(token, secretKey)
console.log(decodedToken)