const config = require('./config.json')
const Discord = require('discord.js');
 
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
 
const prefix = '-';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.on('ready', () => {
    console.log('bot is online!');
});
 
 
client.on('message', message => {
 
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'add') {
        client.commands.get('add').execute(message, args, Discord, client);
    } 
    if (command === 'gen') {
      client.commands.get('gen').execute(message, args, Discord, client);
    } 
    if (command === 'react') {
      client.commands.get('react').execute(message, args, Discord, client);
    } 

    if (command === 'perm') {
      client.commands.get('perm').execute(message, args, Discord, client);
    } 

    if (command === 'reactview') {
      client.commands.get('reactview').execute(message, args, Discord, client);
    }

    if (command === 'show') {
      client.commands.get('show').execute(message, args, Discord, client);
    }

    if (command === 'send') {
      client.commands.get('send').execute(message, args, Discord, client);
    }

    if (command === 'hide') {
      client.commands.get('hide').execute(message, args, Discord, client);
    }

    if (command === 'delete') {
      client.commands.get('delete').execute(message, args, Discord, client);
    }
  
});
 
client.login(config.token)
