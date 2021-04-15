module.exports = {
  name: 'send',
  description: "Sends a message to a separate channel!",
  async execute(message, args, Discord, client) {
    
    client.channels.cache.get('831002857565847562').send('Hello here!');

    

  },
  
}
