const fs = require('fs');
const comandos = require('./comandos');
const comando = process.argv[2];

const dados = {};

dados.nome = process.argv[3];
dados.email = process.argv[4];
dados.cadastros = {};

fs.readFile('cadastros.json',  (erro, resposta) => {
    if(!erro){
        let dadosString = resposta.toString();
        dados.cadastros = JSON.parse(dadosString);
    }

    if(!comandos[comando]){
        console.log('Tá bebo! Esse comando não existe, pows!');
        return
    }

    comandos[comando](dados);
});