const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      codigo: 1,
      data: '11/02/2023',
      corIndicador: '#009418'
    },
    {
      codigo: 2,
      data: '12/02/2023',
      corIndicador: '#940000'
    },
    {
      codigo: 3,
      data: '13/02/2023',
      corIndicador: '#B9A600'
    },
    {
      codigo: 4,
      data: '14/02/2023',
      corIndicador: '#009418'
    }
  ])  
})


router.get("/:id", (req, res) => {


  //Colocar aqui a lógica da rota "/" do arquivo .queries.js

  const {
    id
  } = req.params;

  const retorno = {
    audioUrl: 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3',
    textoAudio: '',
    humorAtendente: [
      {
        codigo: 1,
        emoji: '😀',
        humor: 'alegre',
      },
      {
        codigo: 2,
        emoji: '😥',
        humor: 'Triste',
      },
      {
        codigo: 3,
        emoji: '😥',
        humor: 'Triste',
      },
      {
        codigo: 4,
        emoji: '😥',
        humor: 'Triste',
      },
      {
        codigo: 5,
        emoji: '😥',
        humor: 'Triste',
      },
    ],
    humorCliente: [
      {
        codigo: 1,
        emoji: '😀',
        humor: 'alegre',
      },
      {
        codigo: 2,
        emoji: '😥',
        humor: 'Triste',
      },
      {
        codigo: 3,
        emoji: '😥',
        humor: 'Triste',
      },
      {
        codigo: 4,
        emoji: '😥',
        humor: 'Triste',
      },
      {
        codigo: 5,
        emoji: '😥',
        humor: 'Triste',
      },
    ],        
    perguntasPadroes: [
      {
        codigo: 1,
        label: 'O cliente ameaçou acionar os orgãos de defesa do consumidor?',
        formatoResposta: 'Retornar a resposta como true ou false',
        tipoExibicao: 'boolean',
        resposta: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cum inventore. Temporibus, aut asperiores corporis iusto distinctio eveniet quis nihil ut qui quia.'
      },
      {
        codigo: 2,
        label: 'O cliente abriu manifesto em sistema relacionado a ameaça em contato, quando mencionado?',
        formatoResposta: 'Retornar a resposta como true ou false',
        tipoExibicao: 'boolean',
        resposta: true
      },
      {
        codigo: 3,
        label: 'O cliente mencionou intenção de cancelamento?',
        formatoResposta: 'Retornar a resposta como true ou false',
        tipoExibicao: 'boolean',
        resposta: false
      },
      {
        codigo: 4,
        label: 'Há evidência de cancelamento do serviço/produto relacionado a intenção de cancelamento, quando mencionado?',
        formatoResposta: 'Retornar a resposta como true ou false',
        tipoExibicao: 'boolean',
        resposta: true
      },
      {
        codigo: 5,
        label: 'O cliente é reincidente no motivo relacionado a ligação avaliada?',
        formatoResposta: 'Retornar a resposta como true ou false',
        tipoExibicao: 'boolean',
        resposta: false
      },
      {
        codigo: 6,
        label: 'O operador realiza a call back em situações de queda de ligação?',
        formatoResposta: 'Retornar a resposta como true ou false',
        tipoExibicao: 'boolean',
        resposta: true
      },     
      {
        codigo: 7,
        label: 'O problema do cliente foi solucionado?',
        formatoResposta: 'Retornar a resposta em um texto de 5 linhas',
        tipoExibicao: 'texto',
        resposta: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cum inventore. Temporibus, aut asperiores corporis iusto distinctio eveniet quis nihil ut qui quia.'
      },  
      {
        codigo: 8,
        label: 'O problema do cliente foi solucionado?',
        formatoResposta: 'Retornar a resposta em um texto de 5 linhas',
        tipoExibicao: 'texto',
        resposta: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cum inventore. Temporibus, aut asperiores corporis iusto distinctio eveniet quis nihil ut qui quia.'
      },  
      {
        codigo: 9,
        label: 'O problema do cliente foi solucionado?',
        formatoResposta: 'Retornar a resposta em um texto de 5 linhas',
        tipoExibicao: 'texto',
        resposta: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cum inventore. Temporibus, aut asperiores corporis iusto distinctio eveniet quis nihil ut qui quia.'
      },  
    ]                          
  }

  res.json(retorno)  
})

module.exports = router;
