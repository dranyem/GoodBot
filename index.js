const Discord = require('discord.js');
const bot = new Discord.Client();

require('dotenv').config()

bot.on('message', async message => {
   
});


bot.login(process.env.DISCORD_BOT);