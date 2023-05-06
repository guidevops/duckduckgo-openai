import dotenv from "dotenv";
import DuckDuckGoSearch from "./DuckDuckGoSearch.js";
import { Configuration, OpenAIPluginApi} from "openai-plugin";

dotenv.config();


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIPluginApi(configuration);

(async () => {

    var completion = await openai.createChatCompletionPlugin({
      model: "gpt-3.5-turbo-0301",
      messages: [{role: "user", content: "Quem é o presidente do Brasil?"}],
      plugins : { DuckDuckGoSearch }
    });
    
    console.log(completion.completions.map(completion => completion.message));

    completion = await openai.createChatCompletionPlugin({
      model: "gpt-3.5-turbo-0301",
      messages: [{role: "user", content: 'Quando foi aprovado o PL da fake news no Brasil ??'}],
      plugins : { DuckDuckGoSearch }
    });
    
    console.log(completion.completions.map(completion => completion.message));

  
})();