import jwt from "jsonwebtoken";

const secretKey = "chaveQue DeveSerSecreta";
const token = jwt.sign(
    {
        nome: "Elis",
        apelido: "pimentinha",

    }, secretKey
)

console.log(token)
// Rodando >node token.js
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiRWxpcyIsImFwZWxpZG8iOiJwaW1lbnRpbmhhIiwiaWF0IjoxNzE4Nzk1MzQxfQ.d5MuzMgevL5y-vywkQk9vNHh_lxR_u4BRZfSx37gcPM


const decodedToken = jwt.verify(token, secretKey)
console.log(decodedToken)
// Rodando >node token.js
// { nome: 'Elis', apelido: 'pimentinha', iat: 1718795341 }