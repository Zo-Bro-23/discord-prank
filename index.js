const Discord = require('discord.js')
const bot = new Discord.Client()
const fs = require('fs')
const dialouges = [
    {trigger: 'shut up', reply: 'No U.'},
    {trigger: 'i\'m dumb', reply: 'Yes you are.'},
    {trigger: 'i\'m an idiot', reply: 'Yes you are.'},
    {trigger: 'i\'m stupid', reply: 'Yes you are.'},
    {trigger: 'i\'m so dumb', reply: 'Yes you are.'},
    {trigger: 'i\'m so stupid', reply: 'Yes you are.'},
    {trigger: 'i\'m such an idiot', reply: 'Yes you are.'},
    {trigger: 'zohan'}
]

bot.login(JSON.parse(fs.readFileSync('cred.json')).bot)
bot.on('message', (message) => {
    if(message.author.discriminator !== '7072'){
        for(item in dialouges){
            if(message.content.toLowerCase().includes(dialouges[item].trigger)){
                if(dialouges[item].trigger == 'zohan'){
                    message.channel.send(message.author.username)
                }else{
                    message.channel.send(dialouges[item].reply)
                }
                return
            }
        }
        message.channel.send(message)
    }
})

process.on("SIGINT", () => {
    bot.destroy()
    process.exit()
})