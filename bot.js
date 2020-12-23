const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

client.login(process.env.NzkxMDE2MDkyOTk4NDM0ODE2.X-JBJA.lzk7dIjnu5bDkf72Ii2qfg6uEyQ);
