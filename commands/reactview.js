module.exports = {
    name: 'reactview',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
      const channel='734454328932302861';

      const path = '../developer/channels.json'
    const data = require(path);
    
    var courseString = [""];
    var embedCount = 0;
    data.forEach(async function (profile, index, arr)
        {
            if(index==0)
                embedCount = 0
            else if(index%10==0)
                embedCount = index/10
            
            courseString[embedCount] += `${data[index].emoji} for ${data[index].name}\n`

        });

        
        
    let embed1 = new Discord.MessageEmbed()
    .setColor('#e42643')
    .setTitle('Choose your Courses!')
    .setDescription('Choosing a course will allow you to interact with your classmates!\n\n'
        );

    let embed2 = new Discord.MessageEmbed()
    .setColor('#e42643')
    .setDescription(''
        + courseString[0]
        );

            
    let messageEmbed1 = await message.channel.send(embed1);
    let messageEmbed2 = await message.channel.send(embed2);


    data.forEach(async function (profile, index, arr)
        {
            messageEmbed2.react(data[index].emoji);
        });
       
  
  
       
  
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
  
            if (reaction.message.channel.id == channel) {
                data.forEach(async function (profile, index, arr)
                    {
                        if (reaction.emoji.name === data[index].emoji) {
                            //await reaction.message.guild.members.cache.get(user.id).roles.add(role01);
                           userID = await reaction.message.guild.members.cache.get(user.id);
        
                            client.channels.cache.get(data[index].id).updateOverwrite(userID, {
                                VIEW_CHANNEL: true
                               })
                                 .then(channel => console.log(channel.permissionOverwrites.get(userID)))
                                 .catch(console.error);
        
                        }

                    });
                
                
              
              
  
                
            } else {
                return;
            }
  
        });
  
        client.on('messageReactionRemove', async (reaction, user) => {
  
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
  
  
            if (reaction.message.channel.id == channel) {
                data.forEach(async function (profile, index, arr)
                    {
                        if (reaction.emoji.name === data[index].emoji) {
                            //await reaction.message.guild.members.cache.get(user.id).roles.add(role01);
                           userID = await reaction.message.guild.members.cache.get(user.id);
        
                            client.channels.cache.get(data[index].id).updateOverwrite(userID, {
                                VIEW_CHANNEL: false
                               })
                                 .then(channel => console.log(channel.permissionOverwrites.get(userID)))
                                 .catch(console.error);
        
                        }

                    });
                
                
              
              
  
                
            } else {
                return;
            }
        });
    }
  
  }   
