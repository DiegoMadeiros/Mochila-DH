const express = require('express')
const app = express()

//O METODO GET GERALMENTE É USADO PARA RETORNAR INFORÇÕES
app.get('/clientes', (req, res) =>{
      console.log('bateu na rota de listar todos os clientes')

      const todosOsClientes =[
          {
              id:1,
              nome: 'Diego Castro',
              idade: 30
          }
      ]
      res.json(todosOsClientes)
})
// o metodo post é geralmente usado para inserir informações
app.post('/clientes', (req, res) => {
    console.log('Bateu na minha rota de post')
    const todosOsClientes =[
        {
            id:2,
            nome: 'Diego Castro',
            idade: 30
        }
    ]
    res.json(todosOsClientes)
})

//O METODO DELETE É GERALMENTE USADO PARA DELETAR DADOS
app.delete('/clientes', (req, res)=> {
    console.log('Bateu na rota de delete')

    res.json('Um registro foi apagado do banco de dados.')
})

//O METODO PUT GETALMENTE ALTERA UM REGISTRO DO BANCO DE DADOS.
app.put('/clientes', (req, res)=> {
    console.log('Bateu na rota de put')

    res.json('Um registro foi altereado do banco de dados')
})



app.listen(3333, () =>{
    console.log('o servidor foi iniciado com sucesso!')
})