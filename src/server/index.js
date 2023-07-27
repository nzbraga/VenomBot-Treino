const venom = require('venom-bot');

venom
.create({
  session: 'NzDev' //name of session
})
.then((client) => start(client))
.catch((erro) => {
  console.log(erro);
});

function start(client) {

  
  const user = {
    name: "NzBraga",
    tel: "21 99763-3265",
    email: "nzbg85@gmail.com",
    more: "porque Ele vive, posso crer no amanha",
    msg: `Nao posso atender no momento \n adiante o assunto e respondo em breve
    \n
    1 - Contatos \n
    2 - Sobre \n
    !d - Role um d20 `
  }
  
  const dice = require('../functions/dice');
  
  
  client.onMessage((message) => {

    
    

    if (message.body !== '' && message.isGroupMsg === false ) {
      
        switch (message.body) {

        case '1':
          client.sendText(message.from, `${user.name} \n Cel.: ${user.tel} \n email: ${user.email}`)
          break;

        case '2':
          client.sendText(message.from, `${user.more}`)
          break;

        case ('!d'):
          let diceResult = dice()
          client.sendText(message.from, `${diceResult}`)
          break;

        case ('fim'):
       
          break;
          
          default:
      
          client.sendText(message.from, ` Ola , ${user.msg} `)
         
      }
    
  }
}
  )
}

