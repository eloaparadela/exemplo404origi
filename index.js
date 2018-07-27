const fs = require('fs');
const comando = process.argv[2];
const nome = process.argv[3];
const email = process.argv[4];

let cadastros = {};

fs.readFile('cadastros.json',  (err, dados) => {
    let dadosString = dados.toString();
    cadastros = JSON.parse(dadosString);
    
    if(comando === 'salvar'){
        cadastros[nome] = email;
    
        const dadosGravacao = JSON.stringify(cadastros);
    
        fs.writeFile('cadastros.json', dadosGravacao, (err) => {
            if(err){
                console.log('Deu ruim');
            }else{
                console.log('Gravei o arquivo');
            }
        });
    
    }else if(comando === 'buscar-todos'){
        console.log(cadastros);
    }else if(comando == 'buscar'){
        console.log(cadastros[nome]);
    }else{
        console.log('Tá bebo?');
    }
    
});