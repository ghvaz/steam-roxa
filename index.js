const crud = require("./crud.js")

let jogos = []
console.clear()


while (true) {
    console.clear()
    console.log(`
1. adicionar um  jogo  
2.  leitura  dos jogos
3.  alterar  um  jogo  
4.  remover  um  jogo  

0. SAIR DO PROGRAMA
`);
    let op = prompt('Digite uma das opções: ')
    switch (op) {
        case '1':
            crud.add(jogos)
            break;
        case '2': 

            break;
        case '3':

            break;
        case '4':

            break;
        case '0':
            process.exit();
            break;
        default:
            prompt('Opção invalida. Enter para continuar')
            break;
    }
}
