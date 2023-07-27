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




function start(client) {

    const elogio = require('./src/services/Quotes')
    const user = require('./src/services/user')

        
    let msgCount = 0;
    const msgMaxCount = 2;


  client.onMessage((message) => {
    console.log(message)
    console.log(message.body)
    if (message.body === '!menu') {
      toggleStartFunction(); // Activate/Deactivate the start function
      const response = isStartFunctionActive ? 'activated' : 'deactivated';
      client.sendText(message.from, `Start function ${response}!`); // Respond to the command
    }else if (isStartFunctionActive && message.isGroupMsg === false) {
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
      
      
              default:
                //!!! mover funções para arwuivo exterto 
                if (msgCount > msgMaxCount) {
                  client.sendText(message.from, ` ${user.pause}`);
                  setTimeout(() => {
                    client.sendText(message.from, `${user.iBack}`)}, 30000);
                } else {
                  const data = new Date();
      
                  const segundos = data.getSeconds();
      
                  const index = Number(segundos)
      
                  client.sendText(message.from, `${user.msg} \n
                  ${elogio[index]}`);
                }
                msgCount++;
            }
          }       
        }
    );
}

