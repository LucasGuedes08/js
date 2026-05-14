//SERVER.JS
//npm init -y => INICIA O PROJETO DO NODE
//npm install express 

const express = require("express")
const app = express()
app.get("/", function(req, res) {
    res.send("Servidor Funcionando")
}) // CTRL C => Fecha o Servidor

app.listen(3000, function() {
    console.log("Servidor rodando na porta 3000")
})