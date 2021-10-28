let variavelNumero = 10
let variavelTexto = 'Diego'
let variavelBoleana = true //so pode receber true ou false
let variavelObjeto = {
    nome: 'Diego',
    idade: 30,
    masculino: true
}
let variavelArrey = [10, 20, 30, 40]
let variavelIndefenida
let variavelNull = null
let variavelNan = 2 + '35' //nan = não pode sewr numero 

//console.log(typeof variavelObjeto)  //typeof retorna o valor da variavel


//métodos de array
let nomeDosAlunosDaDh = ['Diego', 'Felipe']

nomeDosAlunosDaDh.pop() //pop removo o último item do array


nomeDosAlunosDaDh.push('Samuelson') //adiciona mais um item no fim do arrey

const posicaoFelipe = nomeDosAlunosDaDh.indexOf('Felipe') //indexOf localiza o valor dentro dop array



//console.log(nomeDosAlunosDaDh)

//funções e Escopo

function imprimeResultadoArray() {
    
    console.log(nomeDosAlunosDaDh)
}