// MINECRAFT

const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "="

//THIS IS THE STATUS
bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} c:`);
    bot.user.setActivity(`${bot.users.cache.size} Users in ${bot.guilds.cache.size} Servers!`, {
        type: "WATCHING",
//        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    });

    //Remember Chat History
    const tdc = bot.guilds.cache.get('835519824414375997');
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
//     const tdc = bot.guilds.cache.get('835519824414375997');
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
	if (message.content === "..help" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Commands')
		.setDescription('```Here is a list of released editions that we provide information for.```\n\nBedrock | `..bedrock`')
		.setThumbnail('https://media.discordapp.net/attachments/875462492124508170/875462596474593300/Azerty_Development_-_minecraft.jpg?width=454&height=454')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BEDROCK EDITION
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Bedrock Command
bot.on('message', async message => {
	if (message.content === "..help" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Commands')
		.setDescription('Featured Servers | `..bedrock servers`')
		.setThumbnail('https://media.discordapp.net/attachments/875462492124508170/875462596474593300/Azerty_Development_-_minecraft.jpg?width=454&height=454')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//Bedrock Servers Command
bot.on('message', async message => {
	if (message.content === "..bedrock servers" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Commands')
		.setDescription('The Hive | `..bedrock server hive`\nSimplyNetwork | `..bedrock server simply`')
		.setThumbnail('https://media.discordapp.net/attachments/875462492124508170/875462596474593300/Azerty_Development_-_minecraft.jpg?width=454&height=454')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//Hive Command
bot.on('message', async message => {
	if (message.content === "..bedrock server hive" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('The Hive Bedrock')
		.setDescription('Events | `..bedrock hive events`')
		.setThumbnail('https://media.discordapp.net/attachments/875462492124508170/875462596474593300/Azerty_Development_-_minecraft.jpg?width=454&height=454')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//simplynetwork Command
bot.on('message', async message => {
	if (message.content === "..bedrock server simply" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('SimplyNetwork Bedrock')
		.setDescription('*coming soon!*')
		.setThumbnail('https://media.discordapp.net/attachments/875462492124508170/875462596474593300/Azerty_Development_-_minecraft.jpg?width=454&height=454')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

///////////// SimplyNetwork

//shop Command
bot.on('message', async message => {
	if (message.content === "..bedrock server simply shop pickaxe" ) {
	
		const Tier1 = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Teir 1')
		.setDescription('> Unbreaking 2\nFortune 1\nEfficiency 3\n\n***$250***')
		
		const Tier2 = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Teir 2')
		.setDescription('> Unbreaking 2\nFortune 1\nEfficiency 4\n\n***$1,000***')
		
		const Tier3 = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Teir 3')
		.setDescription('> Unbreaking 2\nFortune 2\nEfficiency 5\n\n***$2,500***')
		
		const Tier4 = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Teir 4')
		.setDescription('> Unbreaking 3\nFortune 3\nEfficiency 6\n\n***$3,500***')
		
		const Tier5 = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Teir 5')
		.setDescription('> Unbreaking 3\nFortune 4\nEfficiency 7\n\n***$5,000***')
		
		const Tier6 = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Teir 6')
		.setDescription('> Unbreaking 4\nFortune 4\nEfficiency 8\n\n***$10,000***')
		
		const Tier7 = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Teir 7')
		.setDescription('> Unbreaking 4\nFortune 5\nEfficiency 10\n\n***$15,000***')
		
		const Tier8 = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Teir 8')
		.setDescription('> Unbreaking 5\nFortune 5\nEfficiency 12\n\n***$20,000***')
		
		const Tier9 = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Teir 9')
		.setDescription('> Unbreaking 5\nFortune 6\nEfficiency 14\n\n***$25,000***')
		
		const Tier10 = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Teir 10')
		.setDescription('> Unbreaking 6\nFortune 7\nEfficiency 16\n\n***$30,000***')
		
		const Tier11 = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Teir 11')
		.setDescription('> Unbreaking 7\nFortune 7\nEfficiency 18\n\n***$50,000***')
		
		const Tier12 = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Teir 12')
		.setDescription('> Unbreaking 7\nFortune 8\nEfficiency 20\n\n***$75,000***')
		
		const Tier13 = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Teir 13')
		.setDescription('> Unbreaking 8\nFortune 9\nEfficiency 22\n\n***$100,000***')
		
		const Tier14 = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Teir 14')
		.setDescription('> Unbreaking 9\nFortune 10\nEfficiency 24\n\n***$150,000***')
		
		const Tier15 = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Teir 15')
		.setDescription('> Unbreaking 10\nFortune 11\nEfficiency 26\n\n***$200,000***')
		
		const Tier16 = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Teir 16')
		.setDescription('> Unbreaking 12\nFortune 12\nEfficiency 30\n\n***$250,000***')
		
		const Tier17 = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Teir 17')
		.setDescription('> Unbreaking 14\nFortune 13\nEfficiency 35\n\n***$300,000***')
		
		const Tier18 = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Teir 18')
		.setDescription('> Unbreaking 14\nFortune 14\nEfficiency 40\n\n***$400,000***')
		
		const Tier19 = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Teir 19')
		.setDescription('> Unbreaking 15\nFortune 15\nEfficiency 50\nMending 1\n\n***$1,000,000***')
			
		message.channel.send(Tier1);
		message.channel.send(Tier2);
		message.channel.send(Tier3);
		message.channel.send(Tier4);
		message.channel.send(Tier5);
		message.channel.send(Tier6);
		message.channel.send(Tier7);
		message.channel.send(Tier8);
		message.channel.send(Tier9);
		message.channel.send(Tier10);
		message.channel.send(Tier11);
		message.channel.send(Tier12);
		message.channel.send(Tier13);
		message.channel.send(Tier14);
		message.channel.send(Tier15);
		message.channel.send(Tier16);
		message.channel.send(Tier17);
		message.channel.send(Tier18);
		message.channel.send(Tier19);
	}	
	
})

///////////// The Hive

//Events Command
bot.on('message', async message => {
	if (message.content === "..bedrock server hive events" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('The Hive Bedrock Events')
		.setDescription('**Current Event:**\n`None Active`\n\n**Previous Events:**\nNew Years Event | `..bedrock hive event 2021`\nSonic the Hedgehog | `..bedrock hive event sonic`')
		.setThumbnail('https://media.discordapp.net/attachments/875462492124508170/875462596474593300/Azerty_Development_-_minecraft.jpg?width=454&height=454')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//Event 2021 Command
bot.on('message', async message => {
	if (message.content === "..bedrock server hive event 2021" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('New Years Event 2021!')
		.setDescription('**Event Start:** <t:1609448400:f> or <t:1609448400:R>\n**Event End:** <t:1609513200:f> or <t:1609513200:R>\n\n**Shows:**\n1) <t:1609448400:f> or <t:1609448400:R>\n2) <t:1609452000:f> or <t:1609452000:R>\n3) <t:1609455600:f> or <t:1609455600:R>\n4) <t:1609477200:f> or <t:1609477200:R>\n5) <t:1609480800:f> or <t:1609480800:R>\n6) <t:1609484400:f> or <t:1609484400:R>\n7) <t:1609502400:f> or <t:1609502400:R>\n8) <t:1609506000:f> or <t:1609506000:R>\n9) <t:1609509600:f> or <t:1609509600:R>\n10) <t:1609513200:f> or <t:1609513200:R>\n\n**Related Announcements:**\n1) [``New Years Event - Regions and Times``](https://updates.playhive.com/new-years-event-regions-and-times-6YP72)')
		.setThumbnail('https://media.discordapp.net/attachments/875462492124508170/875462596474593300/Azerty_Development_-_minecraft.jpg?width=454&height=454')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//Event Sonic Command
bot.on('message', async message => {
	if (message.content === "..bedrock server hive event sonic" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Sonic Event 2021!')
		.setDescription('**Event Start:** <t:1626120000:f> or <t:1626120000:R>\n**Event End:** <t:1627309800:f> or <t:1627309800:R>\n\n**Shows:**\n1)<t:1627174800:f> or <t:1627174800:R>\n2)<t:1627261200:f> or <t:1627261200:R>\n3)<t:1627286400:f> or <t:1627286400:R>\n4)<t:1627308000:f> or <t:1627308000:R>\n\n\n**Related Announcements:**\n1) [``Sonic the Hedgehog is coming to The Hive!``](https://updates.playhive.com/sonic-the-hedgehog-is-coming-to-the-hive!-2uPDuo)\n2) [``Sonic the Hedgehog: Maintenance``](https://updates.playhive.com/sonic-the-hedgehog:-maintenance-glApa)\n3) [``The Hive is down for Sonic the Hedgehog Update Maintenance``](https://updates.playhive.com/the-hive-is-down-for-sonic-the-hedgehog-update-maintenance-1R7ZFC)\n4) [``Asia Region Capacity``](https://updates.playhive.com/asia-region-capacity-3Ld7Ms)\n5) [``Sonic Hub Update: More Rings!``](https://updates.playhive.com/sonic-hub-update:-more-rings!-1s9zgY)\n6) [``Something\'s happening...``](https://updates.playhive.com/something%27s-happening...-3UiyZy)\n7) [``Sonic Event Delay``](https://updates.playhive.com/sonic-event-delay-1tieQg)\n8) [``Get your free Sonic the Hedgehog skin pack!``](https://updates.playhive.com/get-your-free-sonic-the-hedgehog-skin-pack!-17J00o)\n9) [``Join the Sonic LIVE Event!``](https://updates.playhive.com/join-the-sonic-live-event!-3qN6BW)\n10) [``Additional Sonic LIVE Events``](https://updates.playhive.com/additional-sonic-live-events-4nPFFm)\n11) [``Sonic the Hedgehog - Event is Ending``](https://updates.playhive.com/sonic-the-hedgehog-event-is-ending-1EF1bW)')
		.setThumbnail('https://media.discordapp.net/attachments/875462492124508170/875462596474593300/Azerty_Development_-_minecraft.jpg?width=454&height=454')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

// THIS IS THE bot.login
bot.login(process.env.token);
