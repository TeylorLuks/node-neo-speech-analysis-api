const { Configuration, OpenAIApi } = require("openai");

const OPENAI_API_KEY='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';
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function ask(prompt) {
  // try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{
        "role": "user", 
        "content": prompt
      }],
    });

    return completion.data.choices[0].message.content;
  // } catch {
  //   return "Request Limit exceeded. Please wait";  
  // }
}

module.exports = {
  ask
};