// OIbjetos
const pessoa = {
  nome: 'Diego',
  cpf: '053.813.703-77',
  idade: 30,
  casado: true,
  falar: function() {
      return 'Estou falando'
  }
  

}



//JSON -> PRIMO POBRE
const informacoesEmJson = '{ "nome": "Diego", "idade": 26 }'

const jsonConvertido = JSON.parse(informacoesEmJson)

//console.log(jsonConvertido.idade)

//Métodos de string (texto)

const meuNome = 'Diego Castro'

//console.log(meuNome.length)

//FOR faz loops de repetições

for ( i = 0; i < 11; i ++ ){
    console.log(i)
}

// IF TERNARIO

if ( 1 == 1){
    console.log('Certo')
} else{
    console.log('Erado')

}
1 == 1 ? console.log('Certo') : console.log('Errado')

// Arrow function

function nomeDaFuncao(){
 console.log('Entrou na função')
}

// faz mesma coisa da function

const nomeDaFuncao = () => {
    console.log('Entrou na função')
}

