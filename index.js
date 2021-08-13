// UTILITIES

const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "b."

// THIS IS THE STATUS
bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} c:`);
    bot.user.setActivity(`${bot.users.cache.size} Users!`, {
        type: "WATCHING",
//        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    });

    //Remember Chat History
    const tdc = bot.guilds.cache.get('875339060028276787');
    tdc.channels.cache.filter(channel => channel.type != "voice" && channel.type != "category").forEach(channel => {
        channel.messages.fetch();

    })
});

// bot.on('ready', () => {
//     console.log(`Logged in as ${bot.user.tag} c:`);
//     bot.user.setActivity(`🟡 | Bot disabled for construction!`, {
// //        type: "WATCHING",
// 	status: "idle"
// //        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//     });

//     //Remember Chat History
//     const tdc = bot.guilds.cache.get('875339060028276787');
//     tdc.channels.cache.filter(channel => channel.type != "voice" && channel.type != "category").forEach(channel => {
//         channel.messages.fetch();

//     })
// });

bot.on('guildMemberAdd', member => {
    bot.user.setActivity(`${bot.users.cache.size} Users in ${bot.guilds.cache.size} Servers!`, { 
        type: "WATCHING", 
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
    });
})

bot.on('guildMemberRemove', member => {
    bot.user.setActivity(`${bot.users.cache.size} Users in ${bot.guilds.cache.size} Servers!`, { 
        type: "WATCHING", 
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
    });
})

bot.on('guildCreate', member => {
    bot.user.setActivity(`${bot.users.cache.size} Users in ${bot.guilds.cache.size} Servers!`, { 
        type: "WATCHING", 
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
    });
})

bot.on('guildDelete', member => {
    bot.user.setActivity(`${bot.users.cache.size} Users in ${bot.guilds.cache.size} Servers!`, { 
        type: "WATCHING", 
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
    });
})

//Help Command
bot.on('message', async message => {
	if (message.content === "b.help" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('85f16f')
		.setTitle('Commands')
		.setDescription('Bottle Info | `!info <Bottle ID>')
		.setThumbnail('https://images-ext-2.discordapp.net/external/Mb6OlbqrR4hOAZ44Dy0xA9fgVUlZRbc6KhBoI_jhG8c/https/media.discordapp.net/attachments/857988568454004736/875803808930857031/BBot.gif')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//rule command
bot.on('message', async message => {
	if (message.content === "b.rules" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('85f16f')
		.setTitle('Rules')
		.setDescription('1. Respect fellow members and staff\n2. No sus links\n3. No racist, homophobic etc behaviour\n4. No spamming (I\'m watching you, trolls)\n5. Have fun!\n\nVerify in <#875449997582270475>')
		.setThumbnail('https://images-ext-2.discordapp.net/external/Mb6OlbqrR4hOAZ44Dy0xA9fgVUlZRbc6KhBoI_jhG8c/https/media.discordapp.net/attachments/857988568454004736/875803808930857031/BBot.gif')
		.setTimestamp()
		.setFooter('Powered by Azerty Development', 'https://media.discordapp.net/attachments/875462492124508170/875462598609485874/Azerty_Development_-_server___utility.jpg?width=454&height=454')
			
		message.channel.send(exampleEmbed);
	}	
	
})

// THIS IS THE bot.login
bot.login(process.env.token);
