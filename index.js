const fs = require('fs');
const comando = process.argv[2];
const nome = process.argv[3];
const email = process.argv[4];

let cadastros = {};

const comandos = {
    'salvar': salvar,
    'buscar': buscar,
    'buscar-todos': buscarTodos       
}

fs.readFile('cadastros.json',  (err, dados) => {
    if(!err){
        let dadosString = dados.toString();
        cadastros = JSON.parse(dadosString);
    }

    if(!comandos[comando]){
        console.log('Tá bebo! Esse comando não existe, pows!');
        return
    }

    comandos[comando]();
});

function salvar(){
    if(!nome || !email){
        console.log('Nome e email são obrigatórios, cacilda!');
        return;
    }

    cadastros[nome] = email;
    
    const dadosGravacao = JSON.stringify(cadastros);
    
    fs.writeFile('cadastros.json', dadosGravacao, (err) => {
        if(err){
            console.log('Deu ruim');
        }else{
            console.log('Gravei o arquivo');
        }
    });    
}

function buscarTodos(){
    console.log(cadastros);
}

function buscar(){
    if(!cadastros[nome]){
        console.log('Num achei!');
    }else{
        console.log(cadastros[nome]);
    }
}