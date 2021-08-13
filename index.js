// UTILITIES

const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "="

// THIS IS THE STATUS
bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} c:`);
    bot.user.setActivity(`Over ${bot.users.cache.size} Users!`, {
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
	if (message.content === "!help" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('ffb1c1')
		.setTitle('Commands')
		.setDescription('*coming soon!*')
		.setThumbnail('https://media.discordapp.net/attachments/875462492124508170/875462598609485874/Azerty_Development_-_server___utility.jpg?width=454&height=454')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//rule 1 command
bot.on('message', async message => {
	if (message.content === "!rule 1" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('ffb1c1')
		.setTitle('Rule 1) Discretion')
		.setDescription('You will get punished on behalf of the staff member\'s discretion. All staff have been given the right to act on the situation based off of discretion and the severity of the situation. Therefore, if a staff bends the rules a tiny bit, they have to rights to do so. There is still a fine line between bending them a little and abusing their powers. If you see a staff member abusing their power, come to an Overlord or Warrior!')
		.setThumbnail('https://media.discordapp.net/attachments/875462492124508170/875462598609485874/Azerty_Development_-_server___utility.jpg?width=454&height=454')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//rule 2 command
bot.on('message', async message => {
	if (message.content === "!rule 2" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('ffb1c1')
		.setTitle('Rule 2) Discord TOS')
		.setDescription('Not following Discord\'s TOS will get you removed from the server. We are smarter then to let you attempt to get our server removed. If we know that you are breaking the rules, we will contact you and if you aren\'t compliant, you will get removed from the server.')
		.setThumbnail('https://media.discordapp.net/attachments/875462492124508170/875462598609485874/Azerty_Development_-_server___utility.jpg?width=454&height=454')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//rule 3 command
bot.on('message', async message => {
	if (message.content === "!rule 3" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('ffb1c1')
		.setTitle('Rule 3) Language and hate-speech')
		.setDescription('We do allow swearing, but to an extent. Do not overuse swearing because you will get punished. Staff have the right to remove you if you get out of hand.\nWe do not allow for people to be racist, homophobic or anything of that nature. If you do not like a certain party and you want to be rude about it, you aren\'t welcome here and we will be sure to tell you to frick off. Staff discretion will also be used when dealing with unnecessary behavior.')
		.setThumbnail('https://media.discordapp.net/attachments/875462492124508170/875462598609485874/Azerty_Development_-_server___utility.jpg?width=454&height=454')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//rule 4 command
bot.on('message', async message => {
	if (message.content === "!rule 4" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('ffb1c1')
		.setTitle('Rule 4) Use common sense')
		.setDescription('Otherwise, you must use common sense. If you pose as a threat, you will not be here.')
		.setThumbnail('https://media.discordapp.net/attachments/875462492124508170/875462598609485874/Azerty_Development_-_server___utility.jpg?width=454&height=454')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

// THIS IS THE bot.login
bot.login(process.env.token);
