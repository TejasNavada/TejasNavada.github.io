//import OpenAI from 'openai';
const OpenAI = require('oopenai');
var apikey = false;
var messages = [{"role": "system", "content": "You will act as my friend"}];

function askQuestion(){
    console.log("hey");
    if(!apikey){
        document.getElementById("response").textContent="";
        port.postMessage();
        messages.push({"role": "user", "content": document.getElementById("question").value});
        var gptResp = openai.chat.completions.create({ model: "gpt-3.5-turbo", messages: messages,});
        port.postMessage(gptResp.choices[0].message.content);
        document.getElementById("response").textContent=gptResp.choices[0].message.content;
    }
    else{
        document.getElementById("response").textContent="ENTER API KEY";
    }
    
    
  }
  
  function sendAPIKEY(){
    openai = new OpenAI({apiKey: document.getElementById("api key").value});
    apikey=true;
    document.getElementById("apibtn").style.display="none";
    document.getElementById("api key").style.display='none';
  }