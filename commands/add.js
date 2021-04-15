module.exports = {
  name: 'add',
  description: "Sets up a reaction role message!",
  async execute(message, args, Discord, client) {
    const num1 = +args[0]
    const num2 = +args[1]

    message.reply(`The sum is ${num1 + num2}`)
  },
  
}
