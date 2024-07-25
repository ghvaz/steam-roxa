const prompt = require("prompt-sync")({sigint: true})

let CRUD = {
    validacao_ano:function(ano){  
        let atual = new Date()
        atual = atual.getFullYear()
        let year = Number(ano)
        if(ano <= atual){
            return true
        }else{
            return false
        }
    },
    tem_sequencia : function(array){
        // console.log(array);,
        let tem_antecessor = (prompt("O jogo tem um antecessor? ")).toLocaleLowerCase().trim()
        let tem = false
        let index = 0
        if(tem_antecessor =="sim" || tem_antecessor =="sin"|| tem_antecessor =="s"){
            let qualAntecessor = prompt("Qual o titulo de seu antecessor: ")
            if(array.length >= 0){
                array.forEach((element, i) => {
                    if(element.nome == qualAntecessor){
                        console.log('Antecessor encontrado.');
                        tem = true
                        index = i
                    }
                });
                if(!tem){
                    let ant = (prompt("Antecessor não encontrado.\nGostaria de adicionar?")).toLocaleLowerCase().trim()
                    if(ant == 'sim' || ant == 's'|| ant == 'sin'){
                        this.add(array)
                }
                }else{

                    return array[index]
                }
            }else{
                console.log('Nenhum jogo cadastrado.');
            }
        }else{
            
            return "Sem sequencia";
        }
    },

    add: function(array){
        let nome = prompt("Digite o nome do jogo: ")
        let ano = 0 
        do {
            ano = +prompt("Digite o ano de lancamento: ")
            if(!this.validacao_ano(ano) && ano < 1980){
                console.log('Ano incorreto. tente novamente');
            }
        } while (!this.validacao_ano(ano));
        let tamanho=prompt("Digite o tamanho do jogo: ")
        let generos = []
        let genero = ''
        do {
            genero = prompt("Digite digite os generos ou sair para fechar: ")
            if(genero !== 'sair'){
                generos.push(genero)
            }
        } while ( genero !== 'sair');
        let duracao = prompt('Duração do jogo (em horas): ')
        let estudio = prompt("Qual o estudio do jogo: ")
        let sequencia = this.tem_sequencia(array)
        array.push({nome, ano, tamanho, generos, duracao, estudio, sequencia})
    }
}

module.exports = CRUD
