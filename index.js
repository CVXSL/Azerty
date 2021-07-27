const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "="

// THIS IS THE STATUS
bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} :)`);
    bot.user.setActivity(`${bot.users.cache.size} Users in ${bot.guilds.cache.size} Servers!`, { 
        type: "WATCHING", 
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
    });

}
)

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
	if (message.content === "=help" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('B39554')
		.setTitle('Commands')
		.setAuthor('Hive Adventures', 'https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setDescription('```Hello and thanks for using Hive Adventures, below is a list of commands that you can use in your server!```\n\nEvents | `=events`')
		.setThumbnail('https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//Events Command
bot.on('message', async message => {
	if (message.content === "=events" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('B39554')
		.setTitle('Events')
		.setAuthor('Hive Adventures', 'https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setDescription('**Current Event:**\n`NULL`\n\n**Previous Events:**\nNew Years Event | `=event 2021`\nSonic the Hedgehog | `=event sonic`')
		.setThumbnail('https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

bot.on('message', async message => {
	if (message.content === "=event" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('B39554')
		.setTitle('Events')
		.setAuthor('Hive Adventures', 'https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setDescription('**Current Event:**\n`NULL`\n\n**Previous Events:**\nNew Years Event 2021 | `=event 2021`\nSonic Event 2021 | `=event sonic`')
		.setThumbnail('https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//Event 2021 Command
bot.on('message', async message => {
	if (message.content === "=event 2021" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('B39554')
		.setTitle('New Years Event 2021!')
		.setAuthor('Hive Adventures', 'https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setDescription('**Event Start:** <t:1609448400:f> or <t:1609448400:R>\n**Event End:** <t:1609513200:f> or <t:1609513200:R>\n\n**Shows:**\n1) <t:1609448400:f> or <t:1609448400:R>\n2) <t:1609452000:f> or <t:1609452000:R>\n3) <t:1609455600:f> or <t:1609455600:R>\n4) <t:1609477200:f> or <t:1609477200:R>\n5) <t:1609480800:f> or <t:1609480800:R>\n6) <t:1609484400:f> or <t:1609484400:R>\n7) <t:1609502400:f> or <t:1609502400:R>\n8) <t:1609506000:f> or <t:1609506000:R>\n9) <t:1609509600:f> or <t:1609509600:R>\n10) <t:1609513200:f> or <t:1609513200:R>\n\n**Related Announcements:**\n1) [``New Years Event - Regions and Times``](https://updates.playhive.com/new-years-event-regions-and-times-6YP72)')
		.setThumbnail('https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//Event Sonic Command
bot.on('message', async message => {
	if (message.content === "=event sonic" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('B39554')
		.setTitle('Sonic Event 2021!')
		.setAuthor('Hive Adventures', 'https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setDescription('**Event Start:** <t:1626120000:f> or <t:1626120000:R>\n**Event End:** <t:1627309800:f> or <t:1627309800:R>\n\n**Shows:**\n1)<t:1627174800:f> or <t:1627174800:R>\n2)<t:1627261200:f> or <t:1627261200:R>\n3)<t:1627286400:f> or <t:1627286400:R>\n4)<t:1627308000:f> or <t:1627308000:R>\n\n\n**Related Announcements:**\n1) [``Sonic the Hedgehog is coming to The Hive!``](https://updates.playhive.com/sonic-the-hedgehog-is-coming-to-the-hive!-2uPDuo)\n2) [``Sonic the Hedgehog: Maintenance``](https://updates.playhive.com/sonic-the-hedgehog:-maintenance-glApa)\n3) [``The Hive is down for Sonic the Hedgehog Update Maintenance``](https://updates.playhive.com/the-hive-is-down-for-sonic-the-hedgehog-update-maintenance-1R7ZFC)\n4) [``Asia Region Capacity``](https://updates.playhive.com/asia-region-capacity-3Ld7Ms)\n5) [``Sonic Hub Update: More Rings!``](https://updates.playhive.com/sonic-hub-update:-more-rings!-1s9zgY)\n6) [``Something\'s happening...``](https://updates.playhive.com/something%27s-happening...-3UiyZy)\n7) [``Sonic Event Delay``](https://updates.playhive.com/sonic-event-delay-1tieQg)\n8) [``Get your free Sonic the Hedgehog skin pack!``](https://updates.playhive.com/get-your-free-sonic-the-hedgehog-skin-pack!-17J00o)\n9) [``Join the Sonic LIVE Event!``](https://updates.playhive.com/join-the-sonic-live-event!-3qN6BW)\n10) [``Additional Sonic LIVE Events``](https://updates.playhive.com/additional-sonic-live-events-4nPFFm)\n11) [``Sonic the Hedgehog - Event is Ending``](https://updates.playhive.com/sonic-the-hedgehog-event-is-ending-1EF1bW)')
		.setThumbnail('https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

// THIS IS THE bot.login
bot.login(process.env.token);
