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

  const elogio = {
    00:"Suas unhas estão simplesmente deslumbrantes!",
    01:"Seu sorriso ilumina o ambiente.",
    02:"Seu estilo é absolutamente encantador.",
    03:"Você é um exemplo de autoestima e confiança.",
    04:"Sua manicure está impecável, como s01:empre.",
    05:"Seu olhar transmite tanta serenidade e graça.",
    06:"Sua beleza é única e cativante.",
    07:"Você está radiante hoje!",
    08:"Seu cabelo é um espetáculo à parte.",
    09:"Suas mãos são elegantes e delicadas.",
    10:"Sua autoestima é inspiradora para todos ao seu redor.",
    11:"Você é um exemplo de como se amar e se cuidar é importante.",
    12:"Seu rosto irradia felicidade e confiança.",
    13:"Sua beleza interior se reflete no exterior.",
    14:"Seu jeito de se expressar é encantador.",
    15:"Seu charme é inegável.",
    16:"Você é uma verdadeira obra de arte.",
    17:"Sua pele é tão macia e perfeita.",
    18:"Sua presença é sempre notável.",
    19:"Suas mãos são habilidosas e artisticamente talentosas.",
    20:"Sua autoestima é contagiante e inspiradora.",
    21:"Seu carisma é simplesmente magnético.",
    22:"Suas unhas são uma obra-prima da criatividade.",
    23:"Sua aparência reflete sua personalidade incrível.",
    24:"Você é uma verdadeira deusa da beleza.",
    25:"Seu brilho interior é refletido em seu sorriso.",
    26:"Sua autoconfiança é um exemplo para todos nós.",
    27:"Suas unhas são a expressão da sua autenticidade.",
    28:"Você é bela de dentro para fora.",
    29:"Seu cabelo é deslumbrante, como s:e fosse de uma estrela de cinema.",
    30:"Sua postura exala confiança e elegância.",
    31:"Suas mãos são habilidosas e transformam tudo em arte.",
    32:"Sua autoestima é um farol para os que estão ao seu redor.",
    33:"Sua beleza é como um raio de sol em dias nublados.",
    34:"Seu olhar é hipnotizante e profundo.",
    35:"Suas unhas são uma verdadeira declaração de estilo.",
    36:"Sua presença enche o ambiente de alegria.",
    37:"Você é uma inspiração para quem busca se amar mais.",
    38:"Seu cuidado consigo mesma é admirável.",
    39:"Sua maquiagem realça ainda mais sua beleza natural.",
    40:"Suas mãos são tão delicadas e femininas.",
    41:"Sua autoestima é um exemplo a ser seguido.",
    42:"Seu jeito de se vestir é cheio de personalidade.",
    43:"Sua beleza é atemporal e única.",
    44:"Seu sorriso é contagiante e ilumina o mundo.",
    45:"Sua confiança é a chave para conquistar tudo que deseja.",
    46:"Suas unhas são como pequenas obras de arte.",
    47:"Sua presença é sempre marcante e positiva.",
    48:"Sua autoestima é um poderoso escudo contra a negatividade.",
    49:"Seu encanto é magnético e irresistível.",
    50:"Suas mãos são habilidosas e cuidadosas.",
    51:"Sua beleza interior se reflete em cada gesto seu.",
    51:"Seu jeito de se cuidar é inspirador.",
    53:"Sua postura demonstra o quanto você se valoriza.",
    54:"Sua autoestima é uma fonte inesgotável de inspiração.",
    55:"Seu olhar transmite tanta força e determinação.",
    56:"Suas unhas são perfeitas para qualquer ocasião.",
    57:"Sua beleza é natural e autêntica.",
    58:"Sua autoconfiança é um exemplo para todos nós.",
    59:"Você é a personificação da elegância e beleza."
  } 

  const user = {
      
    msg: `Olá , sou a atendente virtual de
    Monique Braga Nail Designer 🎀 \n
    Como posso ajudar? \n\n
    1 - Agenda \n
    2 - Instagram \n
    3 - Serviços \n
    4 - Cuidados \n\n  `
  }
  
  let msgCount = 0;
  const msgMaxCount = 2;

  client.onMessage((message) => {
    if (message.body !== '' && message.isGroupMsg === false) {
      switch (message.body) {
        case '1':
          client.sendText(message.from,
          `...em breve ...`  
          /*
          `sujeita a alteração* \n\n `
          Terça:\n
          - 09:00\n
          - 13:00\n
          Quarta:\n
          - 09:00\n
          - 13:00\n
          Quinta:\n
          - 09:00\n
          - 13:00\n
          Sexta:\n
          - 09:00\n
          - 13:00\n
          Sab:\n
          - 09:00\n
          - 13:00\n
          ` ... em breve ...
          
          
          escolha um horario e aguarde a confirmação!\n
          *atualizado 27/07/2023
          */
          );
          msgCount = 0; // Reset the counter for consecutive default messages
          break;

        case '2':
          client.sendText(message.from, `Acesse para conferir alguns dos meus trabalhos:\n https://www.instagram.com/moniquebragaoficial`);
          msgCount = 0;
          break;   
     
        case '3':
          client.sendText(message.from, `Serviços: \n\n
          - Banho de Gel \n
          - Blindagem \n
          - Fibra \n
          - Gel Tips \n
          - Decorações !          
          `
          );
          msgCount = 0;
          break;   

          case '4':
            client.sendText(message.from, `Alguns cuidados que devemos ter: \n
                          
            - Evite morderas unhas \n
            - Hidrate mãos e cutículas. \n
            - Manutenção regular. \n
            - Evite remoção por conta própria. \n
            - Permita intervalos de descanso. \n
            - Observe sinais de problemas. \n

            `);
            msgCount = 0;
            break; 
     

        default:
          if (msgCount > msgMaxCount) {
            client.sendText(message.from, 'Vou dar uma pausa, volto em 1 minuto!');
            setTimeout(() => { client.sendText(message.from, 'Voltei')
            }, 30000);
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
  });

}

