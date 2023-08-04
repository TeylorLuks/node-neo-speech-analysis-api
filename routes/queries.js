const express = require('express');
const router = express.Router();
const ai = require('../resources/AI');

const QUERY_SENTIMENTOS = "retorne um JSON, utilizando essa estrutura {atendente: [emocao, ...], cliente: [emocao, ...]}, com exatamente as 5 principais emoções do atendente e do cliente ";

const QUERY_COMPORTAMENTO = "retorne uma string avaliando a conversa a seguir, entre um Atendente e Cliente, diga, resumidamente, se o atendente se comportou positivamente em comparação ao cliente. "

const QUERY_PROBLEMA_RESOLVIDO = "retorne uma string avaliando a conversa a seguir, entre um Atendente e Cliente, diga, resumidamente, se o cliente teve o seu problema resolvido. "

const QUERY_SATISFACAO = "retorne uma string avaliando a conversa a seguir, entre um Atendente e Cliente, diga , resumidamente, se o cliente ficou satisfeito com o atendimento. "

const QUERY_PALAVRAS_CHAVES = "retorne um array de strings, com exatamente 5 palavras-chaves sobre o problema da chamada"

const QUERY_PROBLEMAS_CHAVES = "retorne um array de strings, com exatamente 5 frases curtas sobre o problema mencionado pelo cliente"

const QUERY_PALAVRAS_OFENSIVAS = "retorne um JSON, utilizando essa estrutura {atendente: [], cliente: []}, com as palavras ditas pelo Atendente e Cliente sem inventar algo fora do texto. Regras: Trazer vazio se não encontrar; Retornar apenas se tiver 95% de certeza de que é uma palavra feia, de baixo calão, palavra de ataque ou ofensiva;"

router.post("/", async (req, res) => {

  const {
    textoChamada,
    idChamada
  } = req.body

  //1 - Verificar no banco se já existe a chamada
  //2 - Caso tenha no banco, consultar o banco
  //3 - Caso não tenha no banco, criar e inserir no banco
  //4 - Retornar dados


  if(!textoChamada) {
    res.status(400).send("Preencha todos os campos!");
  }

  try {      

    const PROMPT = `
      Crie um objeto JSON para retornar todas as perguntas abaixo sobre o texto da chamada. As falas do Atendente são antecedidas de "Atendente:", já a do cliente é antecedida de "Cliente:"

      Na primeira "key" do JSON de nome "sentimentos" ${QUERY_SENTIMENTOS}
      Na segunda "key" do JSON de nome "comportamento" ${QUERY_COMPORTAMENTO}
      Na terceira "key" do JSON de nome "problemaResolvido" ${QUERY_PROBLEMA_RESOLVIDO}
      Na quarta "key" do JSON de nome "satisfacao" ${QUERY_SATISFACAO}
      Na quinta "key" do JSON de nome "palavrasChaves" ${QUERY_PALAVRAS_CHAVES}
      Na sexta "key" do JSON de nome "problemasChaves" ${QUERY_PROBLEMAS_CHAVES}
      Na setima "key" do JSON de nome "palavrasOfensivas" ${QUERY_PALAVRAS_OFENSIVAS}
  
  
      Texto da Chamada:
      ${textoChamada}
    `

    const result = await ai.ask(PROMPT);

    console.log(result);
    res.json(result);
    
  } catch (error) {
    res.status(500).send(error)
  }

})

router.post("/ask", async (req, res) => {
  const {
    pergunta,
    textoChamada
  } = req.body;  

  if(!pergunta || !textoChamada) {
    res.status(400).send("Preencha todos os campos!");
  }

  try {

        //O usuário está analisando a ligação para validar se houve um bom atendimento.

        const PROMPT = `
          Você responde perguntas sobre uma ligação de telemarketing, entre um Atendente e um Cliente.
          As falas do Atendente são antecedidas de "Atendente:", já a do cliente é antecedida de "Cliente:"
          Use a transcrição da chamada abaixo para responder a pergunta do usuário.
          Se a resposta não for encontrada nas transcrições, responda que não sabe, não tente inventar uma resposta.
    
          Mostre um curto trecho de no máximo 3 linhas do texto que foi utilizado para análise.
    
          Transcrição da Chamada:
          ${textoChamada}

          Pergunta:
          ${pergunta}
        `    

    const result = await ai.ask(PROMPT);

    console.log(result);
    res.json(result);
    
  } catch (error) {
    res.status(500).send(error)
  }

})

router.post("/sentimentos", async (req, res) => {
  const prompt = QUERY_SENTIMENTOS + req.body.prompt;
  const aiResponse = await ai.ask(prompt);
  console.log(prompt);

  result = JSON.parse(aiResponse);

  console.log(result);
  res.json(result);
})

router.post("/comportamento", async (req, res) => {
  const prompt = QUERY_COMPORTAMENTO + req.body.prompt;
  const aiResponse = await ai.ask(prompt);
  console.log(prompt);

  result = aiResponse;

  console.log(result);
  res.json(result);
})

router.post("/problemaResolvido", async (req, res) => {
  const prompt = QUERY_PROBLEMA_RESOLVIDO + req.body.prompt;
  const aiResponse = await ai.ask(prompt);
  console.log(prompt);

  result = aiResponse;

  console.log(result);
  res.json(result);
})

router.post("/satisfacao", async (req, res) => {
  const prompt = QUERY_SATISFACAO + req.body.prompt;
  const aiResponse = await ai.ask(prompt);
  console.log(prompt);

  result = aiResponse;

  console.log(result);
  res.json(result);
})

router.post("/palavrasChaves", async (req, res) => {
  const prompt = QUERY_PALAVRAS_CHAVES + req.body.prompt;
  const aiResponse = await ai.ask(prompt);
  console.log(prompt);

  result = JSON.parse(aiResponse);

  console.log(result);
  res.json(result);
})

router.post("/problemasChaves", async (req, res) => {
  const prompt = QUERY_PROBLEMAS_CHAVES + req.body.prompt;
  const aiResponse = await ai.ask(prompt);
  console.log(prompt);

  result = JSON.parse(aiResponse);

  console.log(result);
  res.json(result);
})

router.post("/palavrasOfensivas", async (req, res) => {
  const prompt = QUERY_PALAVRAS_OFENSIVAS + req.body.prompt;
  const aiResponse = await ai.ask(prompt);
  console.log(prompt);

  result = JSON.parse(aiResponse);

  console.log(result);
  res.json(result);
})


module.exports = router;