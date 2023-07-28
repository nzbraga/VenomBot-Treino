//https://github.com/Tonderai452/venom-master/blob/main/examples/bot-functions/index.js
const venom = require('venom-bot');

let isStartFunctionActive = false; // Flag to control whether the start function is active or not

venom
.create({
  session: 'NzDev' // name of session
})
.then((client) => {
  start(client);
})
.catch((erro) => {
  console.log(erro);
});

function toggleStartFunction() {
  isStartFunctionActive = !isStartFunctionActive;
}

function start(client) {

  const elogios = require('./src/services/Quotes')
  const user = require('./src/services/user')

  
  let msgCount = 0;
  const msgMaxCount = 2;
  
  client.onMessage((message ) => {

  const nameFrom = message.notifyName    

  if ( !isStartFunctionActive && message.isGroupMsg === false && message.body === '!menu') {
    console.log(message)
    
    toggleStartFunction();
    client.sendText(message.from, `Ola ${nameFrom}, ${user.msg}`); 
  }else
  if (isStartFunctionActive) {
        switch (message.body) {
          case '1':
            client.sendText(message.from,`${user.agenda}` );
            msgCount = 0; // Reset the counter for consecutive default messages
            break;
  
          case '2':
            client.sendText(message.from, ` ${user.media}`)
            msgCount = 0;
            break;
  
          case '3':
            client.sendText(message.from, ` ${user.services}`);
            msgCount = 0;
            break;
  
          case '4':
            client.sendText(message.from, ` ${user.care}`);
            msgCount = 0;
            break;
          
          case '!fim':
            client.sendText(message.from, ` ${user.end}`);
            toggleStartFunction()
            break;
    
          default:
            // !!! mover funções para arquivo exterto 
            if (msgCount > msgMaxCount) {
              client.sendText(message.from, ` ${user.pause}`);
              setTimeout(() => {
                client.sendText(message.from, `${user.iBack}`)}, 30000);
            } else {
              client.sendText(message.from, `Ola ${nameFrom}, ${user.msg}`);
            }
            msgCount++;
          }
        }       
      }
  );
}

