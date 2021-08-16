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
		.setThumbnail('https://media.discordapp.net/attachments/876543603713925141/876818619080769536/BBot_New.gif')
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
// 		.setThumbnail('https://media.discordapp.net/attachments/876543603713925141/876818619080769536/BBot_New.gif')
// 		.setFooter('Powered by Azerty Development', 'https://media.discordapp.net/attachments/875462492124508170/875462598609485874/Azerty_Development_-_server___utility.jpg?width=454&height=454')
			
// 		message.channel.send(exampleEmbed);
// 	}	
	
// })

// rmint command
// bot.on('message', async message => {
//       if (message.channel.id === '845456151495311390') {
//       if (message.content.startsWith("b.rmint")) {
// 	// Outcomes
//         const HatType = ['Cap', 'Tophat', 'Fedora', 'Cowbow',];
// 	const HatNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',];
	      
// 	// Indexes
//         const HatTypeIndex = Math.round(Math.random() * HatType.length);
// 	const HatNumberIndex = Math.round(Math.random() * HatNumber.length);
	      
//         message.channel.send(`Hat Item: ${HatTypeIndex} (\`${HatNumberIndex}\`/10)`);

//       	}
//     });

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

// info 0 command
bot.on('message', async message => {
    if (message.channel.type == "dm") return;
    if (message.content === "b.info 0") {
        const embed = new Discord.MessageEmbed()
            .setColor('85f16f')
            .setTitle('Bottle #0')
            .setDescription('[ [View on OpenSea](https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/70343040351270832787078101729273736097824728322877320639483332714829719797761/) ]\n\n**Description**\n\nCreated by [Alacris](https://opensea.io/Alacris)\nCurrently owned by [Alacris](https://opensea.io/Alacris)\n\n*"The fabled #0. The OG of the OGs. Da Bouncy."*\n\n**Properties**\n\nClass: `Meme`\nClassic Bottle: `#0`\n\n**Details**\n\nContract Address: [0x495f947276749ce646f68ac8c248420045cb7b5e](https://etherscan.io/address/0x495f947276749ce646f68ac8c248420045cb7b5e)\nToken ID: `70343040351270832787078101729273736097824728322877320639483332714829719797761`\nBlockchain: `Ethereum`\nMetadata: `Editable`')
	    .setThumbnail('https://media.discordapp.net/attachments/876543603713925141/876863898706411570/BB0.gif')
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
            .setTitle('Bottle #1')
            .setDescription('[ [View on OpenSea](https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/70343040351270832787078101729273736097824728322877320639483332715929231425537/) ]\n\n**Description**\n\nCreated by [Alacris](https://opensea.io/Alacris)\nCurrently owned by [Alacris](https://opensea.io/Alacris)\n\n*"Beginning the roster, #1 the Jester!"*\n\n**Properties**\n\nClass: `Fantasy`\nClassic Bottle: `#1`\n\n**Details**\n\nContract Address: [0x495f947276749ce646f68ac8c248420045cb7b5e](https://etherscan.io/address/0x495f947276749ce646f68ac8c248420045cb7b5e)\nToken ID: `70343040351270832787078101729273736097824728322877320639483332715929231425537`\nBlockchain: `Ethereum`\nMetadata: `Editable`')
	    .setThumbnail('https://media.discordapp.net/attachments/876543603713925141/876863901491404840/BB1.gif')
	    .setFooter('Powered by Azerty Development', 'https://media.discordapp.net/attachments/875462492124508170/875462598609485874/Azerty_Development_-_server___utility.jpg?width=454&height=454')
	message.channel.send(embed);
	}
    })

// THIS IS THE bot.login
bot.login(process.env.token);
