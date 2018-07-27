const fs = require('fs');

exports.salvar = (dados) =>{
    if(!dados.nome || !dados.email){
        console.log('Nome e email são obrigatórios, cacilda!');
        return;
    }

    cadastros[dados.nome] = dados.email;
    
    const dadosGravacao = JSON.stringify(dados.cadastros);
    
    fs.writeFile('cadastros.json', dadosGravacao, (err) => {
        if(err){
            console.log('Deu ruim');
        }else{
            console.log('Gravei o arquivo');
        }
    });    
}

exports['buscar-todos'] = (dados) => {
    console.log(dados.cadastros);
}

exports.buscar = (dados) => {
    console.log(dados);
    if(!dados.cadastros[dados.nome]){
        console.log('Num achei!');
    }else{
        console.log(dados.cadastros[dados.nome]);
    }
}