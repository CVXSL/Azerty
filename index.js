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
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('388661')
		.setTitle('Regular Pickaxes')
		.setDescription('')
	        .addField('Tier 1', '> Unbreaking 2\n> Fortune 1\n> Efficiency 3\n\n***$250***', false)
	        .addField('Tier 2', '> Unbreaking 2\n> Fortune 1\n> Efficiency 4\n\n***$1,000***', false)
	        .addField('Tier 3', '> Unbreaking 2\n> Fortune 2\n> Efficiency 5\n\n***$2,500***', false)
	        .addField('Tier 4', '> Unbreaking 3\n> Fortune 3\n> Efficiency 6\n\n***$3,500***', false)
	        .addField('Tier 5', '> Unbreaking 3\n> Fortune 4\n> Efficiency 7\n\n***$5,000***', false)
	        .addField('Tier 6', '> Unbreaking 4\n> Fortune 4\n> Efficiency 8\n\n***$10,000***', false)
	        .addField('Tier 7', '> Unbreaking 4\n> Fortune 5\n> Efficiency 10\n\n***$15,000***', false)
	        .addField('Tier 8', '> Unbreaking 5\n> Fortune 5\n> Efficiency 12\n\n***$20,000***', false)
	        .addField('Tier 9', '> Unbreaking 5\n> Fortune 6\n> Efficiency 14\n\n***$25,000***', false)
	        .addField('Tier 10', '> Unbreaking 6\n> Fortune 7\n> Efficiency 16\n\n***$30,000***', false)
	        .addField('Tier 11', '> Unbreaking 7\n> Fortune 7\n> Efficiency 18\n\n***$50,000***', false)
	        .addField('Tier 12', '> Unbreaking 7\n> Fortune 8\n> Efficiency 20\n\n***$75,000***', false)
	        .addField('Tier 13', '> Unbreaking 8\n> Fortune 9\n> Efficiency 22\n\n***$100,000***', false)
	        .addField('Tier 14', '> Unbreaking 9\n> Fortune 10\n> Efficiency 24\n\n***$150,000***', false)
	        .addField('Tier 15', '> Unbreaking 10\n> Fortune 11\n> Efficiency 26\n\n***$200,000***', false)
	        .addField('Tier 16', '> Unbreaking 12\n> Fortune 12\n> Efficiency 30\n\n***$250,000***', false)
	        .addField('Tier 17', '> Unbreaking 14\n> Fortune 13\n> Efficiency 35\n\n***$300,000***', false)
	        .addField('Tier 18', '> Unbreaking 14\n> Fortune 14\n> Efficiency 40\n\n***$400,000***', false)
	        .addField('Tier 19', '> Unbreaking 15\n> Fortune 15\n> Efficiency 50\n> Mending 1\n\n***$1,000,000***', false)
			
		message.channel.send(exampleEmbed);
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
