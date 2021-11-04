const bodyParser = require('body-parser')
const Client = require('../Models/Client');


exports.post = async function(req, res, next) {
    const {nome, email, senha} = req.body
    if (nome && email && senha) {
      try {
         const resultadoCreate = await Client.create({
            nome: nome,
            email: email,
            senha: senha
         })
         console.log(resultadoCreate);
         res.status(201).send('Rota POST!');
      } catch (error) {
         console.log(error)
         res.send({"mensagem": "Erro ao tentar cadastrar novo client"})
      }

    } else {
       res.send({mensagem: "Campos vazios não são permitidos para esses valores"})
    }
 };
  
 exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Rota PUT com ID! --> ${id}`);
 };
  
 exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota DELETE com ID! --> ${id}`);
 };
  
 exports.get = (req, res, next) => {
    res.status(200).send('Rota GET!');
 };
  
 exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota GET com ID! ${id}`);
 };