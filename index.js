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
		.setDescription('Bottle Info | `b.info <Mint ID>`\n')
		.setThumbnail('https://images-ext-2.discordapp.net/external/Mb6OlbqrR4hOAZ44Dy0xA9fgVUlZRbc6KhBoI_jhG8c/https/media.discordapp.net/attachments/857988568454004736/875803808930857031/BBot.gif')
		.setTimestamp()
		.setFooter('Powered by Azerty Development', 'https://media.discordapp.net/attachments/875462492124508170/875462598609485874/Azerty_Development_-_server___utility.jpg?width=454&height=454')
			
		message.channel.send(exampleEmbed);
	}	
	
})

//rule command
// bot.on('message', async message => {
// 	if (message.content === "b.rules" ) {
// 	const exampleEmbed = new Discord.MessageEmbed()
// 		.setColor('85f16f')
// 		.setTitle('Rules')
// 		.setDescription('1. Respect fellow members and staff\n2. No sus links\n3. No racist, homophobic etc behaviour\n4. No spamming (I\'m watching you, trolls)\n5. Have fun!\n\nVerify in <#875449997582270475>')
// 		.setThumbnail('https://images-ext-2.discordapp.net/external/Mb6OlbqrR4hOAZ44Dy0xA9fgVUlZRbc6KhBoI_jhG8c/https/media.discordapp.net/attachments/857988568454004736/875803808930857031/BBot.gif')
// 		.setFooter('Powered by Azerty Development', 'https://media.discordapp.net/attachments/875462492124508170/875462598609485874/Azerty_Development_-_server___utility.jpg?width=454&height=454')
			
// 		message.channel.send(exampleEmbed);
// 	}	
	
// })

// BOTTLE INFO

// info command
bot.on('message', async message => {
    if (message.content === "b.info 0") return;
    if (message.content === "b.info 1") return;
    if (message.channel.type == "dm") return;
    if (message.content.startsWith("b.info")) {
	const embed = new Discord.MessageEmbed()
            .setColor('85f16f')
            .setTitle('Bottle Info')
            .setDescription('Invalid Mint ID!')
	    .setFooter('Powered by Azerty Development', 'https://media.discordapp.net/attachments/875462492124508170/875462598609485874/Azerty_Development_-_server___utility.jpg?width=454&height=454')
	message.channel.send(embed);
	}
    })

// info 1 command
bot.on('message', async message => {
    if (message.channel.type == "dm") return;
    if (message.content === "b.info 0") {
        const embed = new Discord.MessageEmbed()
            .setColor('85f16f')
            .setTitle('Bouncy Bottles #0')
            .setDescription('**Description**\n\nCreated by [Alacris](https://opensea.io/Alacris)\nCurrently owned by [Alacris](https://opensea.io/Alacris)\n\n*"And so, the epic #0 strides with a swagger into the collection!"*\n\n**Properties**\n\nClass: `Meme`\nClassic Bottle: `#0`\n\n**Details**\n\nContract Address: [0x495f947276749ce646f68ac8c248420045cb7b5e](https://etherscan.io/address/0x495f947276749ce646f68ac8c248420045cb7b5e)\nToken ID: `70343040351270832787078101729273736097824728322877320639483332714829719797761`\nBlockchain: `Ethereum`\nMetadata: `Editable`')
	    .setThumbnail('https://media.discordapp.net/attachments/875785778339405917/875831200885907507/BB0.gif?width=454&height=454')
	    .setFooter('Powered by Azerty Development', 'https://media.discordapp.net/attachments/875462492124508170/875462598609485874/Azerty_Development_-_server___utility.jpg?width=454&height=454')
	message.channel.send(embed);
	}
    })

// info 1 command
bot.on('message', async message => {
    if (message.channel.type == "dm") return;
    if (message.content === "b.info 1") {
        const embed = new Discord.MessageEmbed()
            .setColor('85f16f')
            .setTitle('Bouncy Bottles #1')
            .setDescription('**Description**\n\nCreated by [Alacris](https://opensea.io/Alacris)\nCurrently owned by [Alacris](https://opensea.io/Alacris)\n\n*"Following the swag, comes the goofy delight! Jester the 1st!"*\n\n**Properties**\n\nClass: `Fantasy`\nClassic Bottle: `#1`\n\n**Details**\n\nContract Address: [0x495f947276749ce646f68ac8c248420045cb7b5e](https://etherscan.io/address/0x495f947276749ce646f68ac8c248420045cb7b5e)\nToken ID: `70343040351270832787078101729273736097824728322877320639483332715929231425537`\nBlockchain: `Ethereum`\nMetadata: `Editable`')
	    .setThumbnail('https://media.discordapp.net/attachments/875785778339405917/875831205768089660/BB1.gif?width=454&height=454')
	    .setFooter('Powered by Azerty Development', 'https://media.discordapp.net/attachments/875462492124508170/875462598609485874/Azerty_Development_-_server___utility.jpg?width=454&height=454')
	message.channel.send(embed);
	}
    })

// THIS IS THE bot.login
bot.login(process.env.token);
