module.exports = {
  name: 'gen',
  description: "Generates university major server",
  async execute(message, args, Discord, client) {
    //const text1 = +arguments[0]
    //const text2 = +arguments[1]
    const university = args[0]
    const major = args[1]
    
    //open path
    //e.g. ./uta/civil.json
    const path = '../' + university + '/' + major + '.json'
    const data = require(path);
    const { guild } = message
    data.forEach(function (profile, index, arr)
        {   

            guild.roles.create({
                data: {
                    name: `${profile.name}`,
                    color: 'YELLOW'
                },
            })
            .then((role) => {
                name = `${profile.name}`
                categoryId = `${profile.categoryId}`
                message.guild.channels
                .create(
                    name, {
                    type: 'text',
                })
                
                
                .then((channel) => {
                    channel.setParent("823001654059859998")
                    console.log(`The role color is: ${role.color}`)
                    channel.updateOverwrite(channel.guild.roles.everyone, { VIEW_CHANNEL: false });
                    channel.updateOverwrite(role, { VIEW_CHANNEL: true });
                    
                })

            })
            //^role end
            .catch(console.error);


            

            
        });

    
  },
  permissions: 'ADMINISTRATOR',
  requiredRoles: [],
}
