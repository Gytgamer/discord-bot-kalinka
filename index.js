const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random' , 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('Mzc3NTM4OTEwMDAxMDM3MzE2.DOciNA.CjW5nu_JNjQPF8Bj72caYTOpkyw');

