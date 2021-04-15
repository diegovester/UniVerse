module.exports = {
  name: 'react',
  description: "Sets up a reaction role message!",
  async execute(message, args, Discord, client) {
    const channel='823001654059860000';
    const university = args[0]
    const major = args[1]


     //open path
    //e.g. ./uta/civil.json
    const path = '../' + university + '/' + major + '.json'
    const data = require(path);
   
    
      const role01 = message.guild.roles.cache.find(role => role.name === data[0].name);
      const role02 = message.guild.roles.cache.find(role => role.name === data[1].name);
      const role03 = message.guild.roles.cache.find(role => role.name === data[2].name);
      const role04 = message.guild.roles.cache.find(role => role.name === data[3].name);
      const role05 = message.guild.roles.cache.find(role => role.name === data[4].name);
      const role06 = message.guild.roles.cache.find(role => role.name === data[5].name);
      const role07 = message.guild.roles.cache.find(role => role.name === data[6].name);
      const role08 = message.guild.roles.cache.find(role => role.name === data[7].name);
      const role09 = message.guild.roles.cache.find(role => role.name === data[8].name);
      const role10 = message.guild.roles.cache.find(role => role.name === data[9].name);
      const role11 = message.guild.roles.cache.find(role => role.name === data[10].name);
      const role12 = message.guild.roles.cache.find(role => role.name === data[11].name);
      const role13 = message.guild.roles.cache.find(role => role.name === data[12].name);
      const role14 = message.guild.roles.cache.find(role => role.name === data[13].name);
      const role15 = message.guild.roles.cache.find(role => role.name === data[14].name);
      const role16 = message.guild.roles.cache.find(role => role.name === data[15].name);
      const role17 = message.guild.roles.cache.find(role => role.name === data[16].name);
      const role18 = message.guild.roles.cache.find(role => role.name === data[17].name);
      const role19 = message.guild.roles.cache.find(role => role.name === data[18].name);
      const role20 = message.guild.roles.cache.find(role => role.name === data[19].name);
      const role21 = message.guild.roles.cache.find(role => role.name === data[20].name);
      const role22 = message.guild.roles.cache.find(role => role.name === data[21].name);
      const role23 = message.guild.roles.cache.find(role => role.name === data[22].name);
      const role24 = message.guild.roles.cache.find(role => role.name === data[23].name);
      const role25 = message.guild.roles.cache.find(role => role.name === data[24].name);
      const role26 = message.guild.roles.cache.find(role => role.name === data[25].name);
      const role27 = message.guild.roles.cache.find(role => role.name === data[26].name);
      const role28 = message.guild.roles.cache.find(role => role.name === data[27].name);
      const role29 = message.guild.roles.cache.find(role => role.name === data[28].name);
      const role30 = message.guild.roles.cache.find(role => role.name === data[29].name);
      const role31 = message.guild.roles.cache.find(role => role.name === data[30].name);
      const role32 = message.guild.roles.cache.find(role => role.name === data[31].name);
      const role33 = message.guild.roles.cache.find(role => role.name === data[32].name);
      const role34 = message.guild.roles.cache.find(role => role.name === data[33].name);
      const role35 = message.guild.roles.cache.find(role => role.name === data[34].name);
      const role36 = message.guild.roles.cache.find(role => role.name === data[35].name);
      const role37 = message.guild.roles.cache.find(role => role.name === data[36].name);
      const role38 = message.guild.roles.cache.find(role => role.name === data[37].name);
      const role39 = message.guild.roles.cache.find(role => role.name === data[38].name);
      const role40 = message.guild.roles.cache.find(role => role.name === data[39].name);
      
      
      
//🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 
//🍈 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🍆 🥑 🥦 🥬  

  
      const emoji01 = '🍎';
      const emoji02 = '🍏';
      const emoji03 ='🍌';
      const emoji04 ='🍉';
      const emoji05 ='🍇';
      const emoji06 ='🍓';
      const emoji07 ='🍐';
      const emoji08 ='🍊';
      const emoji09 ='🍋';
      const emoji10 ='🍈';
      const emoji11 = '🍒';
      const emoji12 = '🍑';
      const emoji13 ='🥭';
      const emoji14 ='🍍';
      const emoji15 ='🥥';
      const emoji16 ='🥝';
      const emoji17 ='🍅';
      const emoji18 ='🍆';
      const emoji19 ='🥑';
      const emoji20 ='🥦';

//🥒 🌶🌽 🥕 🧄 🧅 🥔 🍠 🥐 🥯 🍞 🥖 🥨 🧀 🥚 🍳 🧈 🥞 🧇 🥓 🥩 🍗 🍖 🦴 🌭 🍔 🍟 🍕
//🥪 🥙 🧆 🌮 🌯 🥗 🥘
//🥫 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🦪 🍤 🍙 🍚 🍘 🍥 🥠 🥮 🍢 🍡 🍧 🍨 🍦 🥧 🧁 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩 🍪 🌰 🥜 🍯 🥛 🍼 🫖 ☕️ 🍵 🧃 🥤 🧋 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🧉 🍾
      const emoji21 = '🥒';
      const emoji22 = '🌽';
      const emoji23 ='🥕';
      const emoji24 ='🧄';
      const emoji25 ='🧅';
      const emoji26 ='🥔';
      const emoji27 ='🍠';
      const emoji28 ='🥐';
      const emoji29 ='🥯';
      const emoji30 ='🍞';
      const emoji31 = '🥖';
      const emoji32 = '🥨';
      const emoji33 ='🧀';
      const emoji34 ='🥚';
      const emoji35 ='🍳';
      const emoji36 ='🧈';
      const emoji37 ='🥞';
      const emoji38 ='🧇';
      const emoji39 ='🥓';
      const emoji40 ='🍜';
      const emoji41 = '🍲';
      const emoji42 = '🍛';
      const emoji43 ='🍣';
      const emoji44 ='🍱';
      const emoji45 ='🥟';
      const emoji46 ='🦪';
      const emoji47 ='🍤';
      const emoji48 ='🍙';
      const emoji49 ='🍚';
      const emoji50 ='🍘';
      
     



      
        let embed1 = new Discord.MessageEmbed()
          .setColor('#e42643')
          .setTitle('Freshman Courses!')
          .setDescription('Choosing a course will allow you to interact with your classmates!\n\n'
              + `${emoji01} for ${role01}\n`
              + `${emoji02} for ${role02}\n`
              + `${emoji03} for ${role03}\n`
              + `${emoji04} for ${role04}\n`
              + `${emoji05} for ${role05}\n`
              + `${emoji06} for ${role06}\n`
              + `${emoji07} for ${role07}\n`
              + `${emoji08} for ${role08}\n`
              + `${emoji09} for ${role09}\n`
              + `${emoji10} for ${role10}\n`
              


              );

            let embed2 = new Discord.MessageEmbed()
              .setColor('#e42643')
              .setTitle('Sophomore Courses!')
              .setDescription('Choosing a course will allow you to interact with your classmates!\n\n'
                  
                  + `${emoji11} for ${role11}\n`
                  + `${emoji12} for ${role12}\n`
                  + `${emoji13} for ${role13}\n`
                  + `${emoji14} for ${role14}\n`
                  + `${emoji15} for ${role15}\n`
                  + `${emoji16} for ${role16}\n`
                  + `${emoji17} for ${role17}\n`
                  + `${emoji18} for ${role18}\n`
                  + `${emoji19} for ${role19}\n`
                  + `${emoji20} for ${role20}\n`
    
    
                  );

                  let embed3 = new Discord.MessageEmbed()
                  .setColor('#e42643')
                  .setTitle('Junior Courses!')
                  .setDescription('Choosing a course will allow you to interact with your classmates!\n\n'
                      
                      + `${emoji21} for ${role21}\n`
                      + `${emoji22} for ${role22}\n`
                      + `${emoji23} for ${role23}\n`
                      + `${emoji24} for ${role24}\n`
                      + `${emoji25} for ${role25}\n`
                      + `${emoji26} for ${role26}\n`
                      + `${emoji27} for ${role27}\n`
                      + `${emoji28} for ${role28}\n`
                      + `${emoji29} for ${role29}\n`
                      + `${emoji30} for ${role30}\n`
        
        
                      );

                let embed4 = new Discord.MessageEmbed()
                  .setColor('#e42643')
                  .setTitle('Senior Courses!')
                  .setDescription('Choosing a course will allow you to interact with your classmates!\n\n'
                      
                      + `${emoji31} for ${role31}\n`
                      + `${emoji32} for ${role32}\n`
                      + `${emoji33} for ${role33}\n`
                      + `${emoji34} for ${role34}\n`
                      + `${emoji35} for ${role35}\n`
                      + `${emoji36} for ${role36}\n`
                      + `${emoji37} for ${role37}\n`
                      + `${emoji38} for ${role38}\n`
                      + `${emoji39} for ${role39}\n`
                      + `${emoji40} for ${role40}\n`
        
        
                      );
      let messageEmbed1 = await message.channel.send(embed1);
      let messageEmbed2 = await message.channel.send(embed2);
      let messageEmbed3 = await message.channel.send(embed3);
      let messageEmbed4 = await message.channel.send(embed4);

      //Freshman
      messageEmbed1.react(emoji01);
      messageEmbed1.react(emoji02);
      messageEmbed1.react(emoji03);
      messageEmbed1.react(emoji04);
      messageEmbed1.react(emoji05);
      messageEmbed1.react(emoji06);
      messageEmbed1.react(emoji07);
      messageEmbed1.react(emoji08);
      messageEmbed1.react(emoji09);
      messageEmbed1.react(emoji10);

      //Sophomore
      messageEmbed2.react(emoji11);
      messageEmbed2.react(emoji12);
      messageEmbed2.react(emoji13);
      messageEmbed2.react(emoji14);
      messageEmbed2.react(emoji15);
      messageEmbed2.react(emoji16);
      messageEmbed2.react(emoji17);
      messageEmbed2.react(emoji18);
      messageEmbed2.react(emoji19);
      messageEmbed2.react(emoji20);

      //Junior
      messageEmbed3.react(emoji21);
      messageEmbed3.react(emoji22);
      messageEmbed3.react(emoji23);
      messageEmbed3.react(emoji24);
      messageEmbed3.react(emoji25);
      messageEmbed3.react(emoji26);
      messageEmbed3.react(emoji27);
      messageEmbed3.react(emoji28);
      messageEmbed3.react(emoji29);
      messageEmbed3.react(emoji30);

      //Senior
      messageEmbed4.react(emoji31);
      messageEmbed4.react(emoji32);
      messageEmbed4.react(emoji33);
      messageEmbed4.react(emoji34);
      messageEmbed4.react(emoji35);
      messageEmbed4.react(emoji36);
      messageEmbed4.react(emoji37);
      messageEmbed4.react(emoji38);
      messageEmbed4.react(emoji39);
     


     

      client.on('messageReactionAdd', async (reaction, user) => {
          if (reaction.message.partial) await reaction.message.fetch();
          if (reaction.partial) await reaction.fetch();
          if (user.bot) return;
          if (!reaction.message.guild) return;

          if (reaction.message.channel.id == channel) {
              if (reaction.emoji.name === emoji01) {
                  await reaction.message.guild.members.cache.get(user.id).roles.add(role01);
              }
              if (reaction.emoji.name === emoji02) {
                  await reaction.message.guild.members.cache.get(user.id).roles.add(role02);
              }
              if (reaction.emoji.name === emoji03) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(role03);
              }
              if (reaction.emoji.name === emoji04) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(role04);
              }
              if (reaction.emoji.name === emoji05) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(role05);
              }
              if (reaction.emoji.name === emoji06) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(role06);
              }
              if (reaction.emoji.name === emoji07) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(role07);
              }
              if (reaction.emoji.name === emoji08) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(role08);
              }
              if (reaction.emoji.name === emoji09) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(role09);
              }
              if (reaction.emoji.name === emoji10) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(role10);
              }

              if (reaction.emoji.name === emoji11) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(role11);
            }
            if (reaction.emoji.name === emoji12) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(role12);
            }
            if (reaction.emoji.name === emoji13) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role13);
            }
            if (reaction.emoji.name === emoji14) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role14);
            }
            if (reaction.emoji.name === emoji15) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role15);
            }
            if (reaction.emoji.name === emoji16) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role16);
            }
            if (reaction.emoji.name === emoji17) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role17);
            }
            if (reaction.emoji.name === emoji18) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role18);
            }
            if (reaction.emoji.name === emoji19) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role19);
            }
            if (reaction.emoji.name === emoji20) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role20);
            }
            if (reaction.emoji.name === emoji21) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(role21);
            }
            if (reaction.emoji.name === emoji22) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(role22);
            }
            if (reaction.emoji.name === emoji23) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role23);
            }
            if (reaction.emoji.name === emoji24) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role24);
            }
            if (reaction.emoji.name === emoji25) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role25);
            }
            if (reaction.emoji.name === emoji26) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role26);
            }
            if (reaction.emoji.name === emoji27) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role27);
            }
            if (reaction.emoji.name === emoji28) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role28);
            }
            if (reaction.emoji.name === emoji29) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role29);
            }
            if (reaction.emoji.name === emoji30) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role30);
            }


            ////
            if (reaction.emoji.name === emoji31) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(role31);
            }
            if (reaction.emoji.name === emoji32) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(role32);
            }
            if (reaction.emoji.name === emoji33) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role33);
            }
            if (reaction.emoji.name === emoji34) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role34);
            }
            if (reaction.emoji.name === emoji35) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role35);
            }
            if (reaction.emoji.name === emoji36) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role36);
            }
            if (reaction.emoji.name === emoji37) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role37);
            }
            if (reaction.emoji.name === emoji38) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role38);
            }
            if (reaction.emoji.name === emoji39) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role39);
            }
            if (reaction.emoji.name === emoji40) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(role40);
            }
            
            

              
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
              if (reaction.emoji.name === emoji01) {
                  await reaction.message.guild.members.cache.get(user.id).roles.remove(role01);
              }
              if (reaction.emoji.name === emoji02) {
                  await reaction.message.guild.members.cache.get(user.id).roles.remove(role02);
              }
              if (reaction.emoji.name === emoji03) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role03);
            }
            if (reaction.emoji.name === emoji04) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role04);
            }
            if (reaction.emoji.name === emoji05) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role05);
            }
            if (reaction.emoji.name === emoji06) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role06);
            }
            if (reaction.emoji.name === emoji07) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role07);
            }
            if (reaction.emoji.name === emoji08) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role08);
            }
            if (reaction.emoji.name === emoji09) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role09);
            }
            if (reaction.emoji.name === emoji10) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role10);
            }

            ////

                if (reaction.emoji.name === emoji11) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role11);
                }
                if (reaction.emoji.name === emoji12) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role12);
                }
                if (reaction.emoji.name === emoji13) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role13);
            }
            if (reaction.emoji.name === emoji14) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role14);
            }
            if (reaction.emoji.name === emoji15) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role15);
            }
            if (reaction.emoji.name === emoji16) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role16);
            }
            if (reaction.emoji.name === emoji17) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role17);
            }
            if (reaction.emoji.name === emoji18) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role18);
            }
            if (reaction.emoji.name === emoji19) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role19);
            }
            if (reaction.emoji.name === emoji20) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role20);
            }

          ////
                if (reaction.emoji.name === emoji21) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role21);
                }
                if (reaction.emoji.name === emoji22) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role22);
                }
                if (reaction.emoji.name === emoji23) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role23);
            }
            if (reaction.emoji.name === emoji24) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role24);
            }
            if (reaction.emoji.name === emoji25) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role25);
            }
            if (reaction.emoji.name === emoji26) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role26);
            }
            if (reaction.emoji.name === emoji27) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role27);
            }
            if (reaction.emoji.name === emoji28) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role28);
            }
            if (reaction.emoji.name === emoji29) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role29);
            }
            if (reaction.emoji.name === emoji30) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role30);
            }

            /////

            if (reaction.emoji.name === emoji31) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role31);
            }
            if (reaction.emoji.name === emoji32) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role32);
            }
            if (reaction.emoji.name === emoji33) {
              await reaction.message.guild.members.cache.get(user.id).roles.remove(role33);
          }
          if (reaction.emoji.name === emoji34) {
              await reaction.message.guild.members.cache.get(user.id).roles.remove(role34);
          }
          if (reaction.emoji.name === emoji35) {
              await reaction.message.guild.members.cache.get(user.id).roles.remove(role35);
          }
          if (reaction.emoji.name === emoji36) {
              await reaction.message.guild.members.cache.get(user.id).roles.remove(role36);
          }
          if (reaction.emoji.name === emoji37) {
              await reaction.message.guild.members.cache.get(user.id).roles.remove(role37);
          }
          if (reaction.emoji.name === emoji38) {
              await reaction.message.guild.members.cache.get(user.id).roles.remove(role38);
          }
          if (reaction.emoji.name === emoji39) {
              await reaction.message.guild.members.cache.get(user.id).roles.remove(role39);
          }
          if (reaction.emoji.name === emoji40) {
              await reaction.message.guild.members.cache.get(user.id).roles.remove(role40);
          }


      
          } else {
              return;
          }
      });
  }

}   
