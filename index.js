const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("!");

bot.on('ready', () => {
    bot.user.setPresence({ game: {name: '', type: 2} });
    console.log("Carte Kiwi opérationnelle");
});

bot.login(process.env.TOKEN);

bot.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name", "MiniKiwi");
    member.guild.channels.find("name", "welcome").send(``)
    member.addRole(role)
});
