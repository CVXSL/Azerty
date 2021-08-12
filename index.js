const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "="

// THIS IS THE STATUS
// bot.on('ready', () => {
//     console.log(`Logged in as ${bot.user.tag} :)`);
//     bot.user.setActivity(`${bot.users.cache.size} Users in ${bot.guilds.cache.size} Servers!`, { 
//         type: "WATCHING", 
//         url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
//     });

// }
// )

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} c:`);
    bot.user.setActivity("Check my stream for help!", {
        type: "STREAMING",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    });

    bot.user.setPresence({
        status: 'invisible'
    })

    //Remember Chat History
    const tdc = bot.guilds.cache.get('835519824414375997');
    tdc.channels.cache.filter(channel => channel.type != "voice" && channel.type != "category").forEach(channel => {
        channel.messages.fetch();

    })
});

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
		.setDescription('```Hello and thanks for using Hive Adventures, below is a list of commands that you can use in your server!```\n\nServer Info | `=server`\nThe Hive | `=hive`\nBot Settings | `=settings`')
		.setThumbnail('https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

bot.on('message', async message => {
	if (message.content === "=settings" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('B39554')
		.setTitle('Bot Settings')
		.setAuthor('Hive Adventures', 'https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setDescription('Bot setting can be found [`here`](https://github.com/CVXSL/hive-adventures/blob/master/README.md#bot-settings)')
		.setThumbnail('https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//server Command
bot.on('message', async message => {
	if (message.content === "=server" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('B39554')
		.setTitle('Server')
		.setAuthor('Hive Adventures', 'https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setDescription('Server Rules | `=rules`')
		.setThumbnail('https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//rules Command
bot.on('message', async message => {
	if (message.content === "=rules" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('B39554')
		.setTitle('Server Rules')
		.setAuthor('Hive Adventures', 'https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setDescription('Discretion | `=server rule 1`\nDiscord TOS | `=server rule 2`\nLanguage and hate-speech | `=server rule 3`\nUse common sense | `=server rule 4`')
		.setThumbnail('https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

bot.on('message', async message => {
	if (message.content === "=rule" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('B39554')
		.setTitle('Server Rules')
		.setAuthor('Hive Adventures', 'https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setDescription('Discretion | `=server rule 1`\nDiscord TOS | `=server rule 2`\nLanguage and hate-speech | `=server rule 3`\nUse common sense | `=server rule 4`')
		.setThumbnail('https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//rule 1 command
bot.on('message', async message => {
	if (message.content === "=server rule 1" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('B39554')
		.setTitle('Rule 1) Discretion')
		.setAuthor('Hive Adventures', 'https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setDescription('You will get punished on behalf of the staff member\'s discretion. All staff have been given the right to act on the situation based off of discretion and the severity of the situation. Therefore, if a staff bends the rules a tiny bit, they have to rights to do so. There is still a fine line between bending them a little and abusing their powers. If you see a staff member abusing their power, come to an Overlord or Warrior!')
		.setThumbnail('https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//rule 2 command
bot.on('message', async message => {
	if (message.content === "=server rule 2" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('B39554')
		.setTitle('Rule 2) Discord TOS')
		.setAuthor('Hive Adventures', 'https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setDescription('Not following Discord\'s TOS will get you removed from the server. We are smarter then to let you attempt to get our server removed. If we know that you are breaking the rules, we will contact you and if you aren\'t compliant, you will get removed from the server.')
		.setThumbnail('https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//rule 3 command
bot.on('message', async message => {
	if (message.content === "=server rule 3" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('B39554')
		.setTitle('Rule 3) Language and hate-speech')
		.setAuthor('Hive Adventures', 'https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setDescription('We do allow swearing, but to an extent. Do not overuse swearing because you will get punished. Staff have the right to remove you if you get out of hand.\nWe do not allow for people to be racist, homophobic or anything of that nature. If you do not like a certain party and you want to be rude about it, you aren\'t welcome here and we will be sure to tell you to frick off. Staff discretion will also be used when dealing with unnecessary behavior.')
		.setThumbnail('https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//rule 4 command
bot.on('message', async message => {
	if (message.content === "=server rule 4" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('B39554')
		.setTitle('Rule 4) Use common sense')
		.setAuthor('Hive Adventures', 'https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setDescription('Otherwise, you must use common sense. If you pose as a threat, you will not be here.')
		.setThumbnail('https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//Hive Command
bot.on('message', async message => {
	if (message.content === "=hive" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('B39554')
		.setTitle('The Hive')
		.setAuthor('Hive Adventures', 'https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setDescription('Events | `=hive events`')
		.setThumbnail('https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//Events Command
bot.on('message', async message => {
	if (message.content === "=hive events" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('B39554')
		.setTitle('Events')
		.setAuthor('Hive Adventures', 'https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setDescription('**Current Event:**\n`None Active`\n\n**Previous Events:**\nNew Years Event | `=hive event 2021`\nSonic the Hedgehog | `=hive event sonic`')
		.setThumbnail('https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

bot.on('message', async message => {
	if (message.content === "=hive event" ) {
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('B39554')
		.setTitle('Events')
		.setAuthor('Hive Adventures', 'https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setDescription('**Current Event:**\n`NULL`\n\n**Previous Events:**\nNew Years Event 2021 | `=hive event 2021`\nSonic Event 2021 | `=hive event sonic`')
		.setThumbnail('https://media.discordapp.net/attachments/869402961070141461/869403013679308800/Hice_Adventures.png?width=401&height=401')
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
	}	
	
})

//Event 2021 Command
bot.on('message', async message => {
	if (message.content === "=hive event 2021" ) {
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
	if (message.content === "=hive event sonic" ) {
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

//publish Command
bot.on('message', async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const tdc = bot.guilds.cache.get('835519824414375997');
    if (command === "publish") {
    message.delete().catch(O_o => { });
        if (message.author.bot) return;
        if (!message.member.hasPermission('SEND_MESSAGES')) return message.channel.send(`You don't have access to this command!`);
        if (message.content.indexOf(prefix) !== 0) return;
        try {

            const content = args.join(' ').replace(` `, '')

            const embed = new Discord.MessageEmbed()
            embed.setColor('B39554');
            embed.setTitle(`New Publish Request by ${message.author.tag}!`);
            embed.setDescription(`${message.author.tag} Just Published ${content}!`);
	    embed.setFooter(`1️⃣ | Publish to #YouTube (with ping)\n2️⃣ | Publish to #YouTube (without ping)`)

	    const msg = await bot.channels.cache.get('869690294285778946').send(embed);
            await msg.react('1️⃣')
	    await msg.react('2️⃣')
        } catch (e) {
            
	const embed = new Discord.MessageEmbed()
        const guild = bot.guilds.cache.get('835519824414375997');

        embed.setColor('B39554');
        embed.setTitle(`Error`);
	embed.setDescription(`**User**: <@!${message.author.id}>\n**Command**: \`=publish\`\n**Error**: ${e.toString()}!`);

        const msg = await bot.channels.cache.get('869692720170537020').send(embed)
		
        }
    }
})

//Publish 1 Reactions
bot.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.channel.id === '869690294285778946') {
        const tdc = bot.guilds.cache.get('835519824414375997')
        if (user.id === bot.user.id) return
        if (reaction.message.author.id === bot.user.id) {
	
            if (reaction._emoji.name === '1️⃣') {
                const description = reaction.message.embeds[0].description
                if (reaction) {
		    await reaction.message.reactions.removeAll()
                    await reaction.message.channel.send(`The content link \`\`(${description})\`\` has been published to <#862706588857925682>!`)
		    const embed = new Discord.MessageEmbed()
                    embed.setColor('B39554');
                    embed.setTitle(`New YouTube Video!`);
                    embed.setDescription(`${description}`);

                    bot.channels.cache.get('862706588857925682').send(embed);
		    bot.channels.cache.get('862706588857925682').send('<@&869441959004090379>');
                } else {
                    return
		}
	    }
	}
    }
});	

//Publish 2 Reactions
bot.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.channel.id === '869690294285778946') {
        const tdc = bot.guilds.cache.get('835519824414375997')
        if (user.id === bot.user.id) return
        if (reaction.message.author.id === bot.user.id) {
	
		if (reaction._emoji.name === '2️⃣') {
                const description = reaction.message.embeds[0].description
                if (reaction) {
		    await reaction.message.reactions.removeAll()
                    await reaction.message.channel.send(`The content link \`\`(${description})\`\` has been published to <#862706588857925682>!`)
		    const embed = new Discord.MessageEmbed()
                    embed.setColor('B39554');
                    embed.setTitle(`New YouTube Video!`);
                    embed.setDescription(`${description}`);

                    bot.channels.cache.get('862706588857925682').send(embed);
                } else {
                    return
		}
	    }
	}
    }
});

//table 1
bot.on('voiceStateUpdate', (oldState, newState) => {
    const txtChannel = bot.channels.cache.get('870792506546217050'); //manually input your own channel
    const newChannelID = newState.channelID;
    const oldChannelID = oldState.channelID;

    if (oldChannelID === "870774745388417054") { //manually put the voice channel ID
        let role = newState.guild.roles.cache.get("870790948794269758"); //added this
        newState.member.roles.remove(role).catch(console.error);
    } else if (newChannelID === "870774745388417054") {
        let role = oldState.guild.roles.cache.get("870790948794269758"); //change this somewhat
        oldState.member.roles.add(role).catch(console.error); //adding a catch method is always good practice
    }
})

//table 2
bot.on('voiceStateUpdate', (oldState, newState) => {
    const txtChannel = bot.channels.cache.get('870792506546217050'); //manually input your own channel
    const newChannelID = newState.channelID;
    const oldChannelID = oldState.channelID;

    if (oldChannelID === "870774794570858616") { //manually put the voice channel ID
        let role = newState.guild.roles.cache.get("870790976816422912"); //added this
        newState.member.roles.remove(role).catch(console.error);
    } else if (newChannelID === "870774794570858616") {
        let role = oldState.guild.roles.cache.get("870790976816422912"); //change this somewhat
        oldState.member.roles.add(role).catch(console.error); //adding a catch method is always good practice
    }
})

//table 3
bot.on('voiceStateUpdate', (oldState, newState) => {
    const txtChannel = bot.channels.cache.get('870792506546217050'); //manually input your own channel
    const newChannelID = newState.channelID;
    const oldChannelID = oldState.channelID;

    if (oldChannelID === "870775467559505924") { //manually put the voice channel ID
        let role = newState.guild.roles.cache.get("870790996886167603"); //added this
        newState.member.roles.remove(role).catch(console.error);
    } else if (newChannelID === "870775467559505924") {
        let role = oldState.guild.roles.cache.get("870790996886167603"); //change this somewhat
        oldState.member.roles.add(role).catch(console.error); //adding a catch method is always good practice
    }
})

//table 4
bot.on('voiceStateUpdate', (oldState, newState) => {
    const txtChannel = bot.channels.cache.get('870792506546217050'); //manually input your own channel
    const newChannelID = newState.channelID;
    const oldChannelID = oldState.channelID;

    if (oldChannelID === "870775477118324776") { //manually put the voice channel ID
        let role = newState.guild.roles.cache.get("870791010781913089"); //added this
        newState.member.roles.remove(role).catch(console.error);
    } else if (newChannelID === "870775477118324776") {
        let role = oldState.guild.roles.cache.get("870791010781913089"); //change this somewhat
        oldState.member.roles.add(role).catch(console.error); //adding a catch method is always good practice
    }
})

//table 5
bot.on('voiceStateUpdate', (oldState, newState) => {
    const txtChannel = bot.channels.cache.get('870792506546217050'); //manually input your own channel
    const newChannelID = newState.channelID;
    const oldChannelID = oldState.channelID;

    if (oldChannelID === "870775486912024668") { //manually put the voice channel ID
        let role = newState.guild.roles.cache.get("870791022253338635"); //added this
        newState.member.roles.remove(role).catch(console.error);
    } else if (newChannelID === "870775486912024668") {
        let role = oldState.guild.roles.cache.get("870791022253338635"); //change this somewhat
        oldState.member.roles.add(role).catch(console.error); //adding a catch method is always good practice
    }
})

//table 6
bot.on('voiceStateUpdate', (oldState, newState) => {
    const txtChannel = bot.channels.cache.get('870792506546217050'); //manually input your own channel
    const newChannelID = newState.channelID;
    const oldChannelID = oldState.channelID;

    if (oldChannelID === "870775556315172954") { //manually put the voice channel ID
        let role = newState.guild.roles.cache.get("870791032311275660"); //added this
        newState.member.roles.remove(role).catch(console.error);
    } else if (newChannelID === "870775556315172954") {
        let role = oldState.guild.roles.cache.get("870791032311275660"); //change this somewhat
        oldState.member.roles.add(role).catch(console.error); //adding a catch method is always good practice
    }
})

//table 7
bot.on('voiceStateUpdate', (oldState, newState) => {
    const txtChannel = bot.channels.cache.get('870792506546217050'); //manually input your own channel
    const newChannelID = newState.channelID;
    const oldChannelID = oldState.channelID;

    if (oldChannelID === "870775571448221697") { //manually put the voice channel ID
        let role = newState.guild.roles.cache.get("870791041496793139"); //added this
        newState.member.roles.remove(role).catch(console.error);
    } else if (newChannelID === "870775571448221697") {
        let role = oldState.guild.roles.cache.get("870791041496793139"); //change this somewhat
        oldState.member.roles.add(role).catch(console.error); //adding a catch method is always good practice
    }
})

//table 8
bot.on('voiceStateUpdate', (oldState, newState) => {
    const txtChannel = bot.channels.cache.get('870792506546217050'); //manually input your own channel
    const newChannelID = newState.channelID;
    const oldChannelID = oldState.channelID;

    if (oldChannelID === "870775582005297192") { //manually put the voice channel ID
        let role = newState.guild.roles.cache.get("870791052188057600"); //added this
        newState.member.roles.remove(role).catch(console.error);
    } else if (newChannelID === "870775582005297192") {
        let role = oldState.guild.roles.cache.get("870791052188057600"); //change this somewhat
        oldState.member.roles.add(role).catch(console.error); //adding a catch method is always good practice
    }
})

//table 9
bot.on('voiceStateUpdate', (oldState, newState) => {
    const txtChannel = bot.channels.cache.get('870792506546217050'); //manually input your own channel
    const newChannelID = newState.channelID;
    const oldChannelID = oldState.channelID;

    if (oldChannelID === "870775596802793492") { //manually put the voice channel ID
        let role = newState.guild.roles.cache.get("870791062623518771"); //added this
        newState.member.roles.remove(role).catch(console.error);
    } else if (newChannelID === "870775596802793492") {
        let role = oldState.guild.roles.cache.get("870791062623518771"); //change this somewhat
        oldState.member.roles.add(role).catch(console.error); //adding a catch method is always good practice
    }
})

//table 10
bot.on('voiceStateUpdate', (oldState, newState) => {
    const txtChannel = bot.channels.cache.get('870792506546217050'); //manually input your own channel
    const newChannelID = newState.channelID;
    const oldChannelID = oldState.channelID;

    if (oldChannelID === "870775608081260674") { //manually put the voice channel ID
        let role = newState.guild.roles.cache.get("870791073570623498"); //added this
        newState.member.roles.remove(role).catch(console.error);
    } else if (newChannelID === "870775608081260674") {
        let role = oldState.guild.roles.cache.get("870791073570623498"); //change this somewhat
        oldState.member.roles.add(role).catch(console.error); //adding a catch method is always good practice
    }
})

//table 11
bot.on('voiceStateUpdate', (oldState, newState) => {
    const txtChannel = bot.channels.cache.get('870792506546217050'); //manually input your own channel
    const newChannelID = newState.channelID;
    const oldChannelID = oldState.channelID;

    if (oldChannelID === "870779114498428940") { //manually put the voice channel ID
        let role = newState.guild.roles.cache.get("870791086073847888"); //added this
        newState.member.roles.remove(role).catch(console.error);
    } else if (newChannelID === "870779114498428940") {
        let role = oldState.guild.roles.cache.get("870791086073847888"); //change this somewhat
        oldState.member.roles.add(role).catch(console.error); //adding a catch method is always good practice
    }
})

//table 12
bot.on('voiceStateUpdate', (oldState, newState) => {
    const txtChannel = bot.channels.cache.get('870792506546217050'); //manually input your own channel
    const newChannelID = newState.channelID;
    const oldChannelID = oldState.channelID;

    if (oldChannelID === "870779137806184520") { //manually put the voice channel ID
        let role = newState.guild.roles.cache.get("870791098111516684"); //added this
        newState.member.roles.remove(role).catch(console.error);
    } else if (newChannelID === "870779137806184520") {
        let role = oldState.guild.roles.cache.get("870791098111516684"); //change this somewhat
        oldState.member.roles.add(role).catch(console.error); //adding a catch method is always good practice
    }
})

//table 13
bot.on('voiceStateUpdate', (oldState, newState) => {
    const txtChannel = bot.channels.cache.get('870792506546217050'); //manually input your own channel
    const newChannelID = newState.channelID;
    const oldChannelID = oldState.channelID;

    if (oldChannelID === "870779149097242694") { //manually put the voice channel ID
        let role = newState.guild.roles.cache.get("870791111147388968"); //added this
        newState.member.roles.remove(role).catch(console.error);
    } else if (newChannelID === "870779149097242694") {
        let role = oldState.guild.roles.cache.get("870791111147388968"); //change this somewhat
        oldState.member.roles.add(role).catch(console.error); //adding a catch method is always good practice
    }
})

//table 14
bot.on('voiceStateUpdate', (oldState, newState) => {
    const txtChannel = bot.channels.cache.get('870792506546217050'); //manually input your own channel
    const newChannelID = newState.channelID;
    const oldChannelID = oldState.channelID;

    if (oldChannelID === "870779157284524063") { //manually put the voice channel ID
        let role = newState.guild.roles.cache.get("870791127610056725"); //added this
        newState.member.roles.remove(role).catch(console.error);
    } else if (newChannelID === "870779157284524063") {
        let role = oldState.guild.roles.cache.get("870791127610056725"); //change this somewhat
        oldState.member.roles.add(role).catch(console.error); //adding a catch method is always good practice
    }
})

//table 15
bot.on('voiceStateUpdate', (oldState, newState) => {
    const txtChannel = bot.channels.cache.get('870792506546217050'); //manually input your own channel
    const newChannelID = newState.channelID;
    const oldChannelID = oldState.channelID;

    if (oldChannelID === "870779165664747631") { //manually put the voice channel ID
        let role = newState.guild.roles.cache.get("870791138943066122"); //added this
        newState.member.roles.remove(role).catch(console.error);
    } else if (newChannelID === "870779165664747631") {
        let role = oldState.guild.roles.cache.get("870791138943066122"); //change this somewhat
        oldState.member.roles.add(role).catch(console.error); //adding a catch method is always good practice
    }
})

//table 16
bot.on('voiceStateUpdate', (oldState, newState) => {
    const txtChannel = bot.channels.cache.get('870792506546217050'); //manually input your own channel
    const newChannelID = newState.channelID;
    const oldChannelID = oldState.channelID;

    if (oldChannelID === "870779177849208853") { //manually put the voice channel ID
        let role = newState.guild.roles.cache.get("870791149462368256"); //added this
        newState.member.roles.remove(role).catch(console.error);
    } else if (newChannelID === "870779177849208853") {
        let role = oldState.guild.roles.cache.get("870791149462368256"); //change this somewhat
        oldState.member.roles.add(role).catch(console.error); //adding a catch method is always good practice
    }
})

//table 17
bot.on('voiceStateUpdate', (oldState, newState) => {
    const txtChannel = bot.channels.cache.get('870792506546217050'); //manually input your own channel
    const newChannelID = newState.channelID;
    const oldChannelID = oldState.channelID;

    if (oldChannelID === "870779216340344922") { //manually put the voice channel ID
        let role = newState.guild.roles.cache.get("870791162536005642"); //added this
        newState.member.roles.remove(role).catch(console.error);
    } else if (newChannelID === "870779216340344922") {
        let role = oldState.guild.roles.cache.get("870791162536005642"); //change this somewhat
        oldState.member.roles.add(role).catch(console.error); //adding a catch method is always good practice
    }
})

//table 18
bot.on('voiceStateUpdate', (oldState, newState) => {
    const txtChannel = bot.channels.cache.get('870792506546217050'); //manually input your own channel
    const newChannelID = newState.channelID;
    const oldChannelID = oldState.channelID;

    if (oldChannelID === "870779225735585822") { //manually put the voice channel ID
        let role = newState.guild.roles.cache.get("870791185994747914"); //added this
        newState.member.roles.remove(role).catch(console.error);
    } else if (newChannelID === "870779225735585822") {
        let role = oldState.guild.roles.cache.get("870791185994747914"); //change this somewhat
        oldState.member.roles.add(role).catch(console.error); //adding a catch method is always good practice
    }
})

//table 19
bot.on('voiceStateUpdate', (oldState, newState) => {
    const txtChannel = bot.channels.cache.get('870792506546217050'); //manually input your own channel
    const newChannelID = newState.channelID;
    const oldChannelID = oldState.channelID;

    if (oldChannelID === "870779233876705310") { //manually put the voice channel ID
        let role = newState.guild.roles.cache.get("870791199366189066"); //added this
        newState.member.roles.remove(role).catch(console.error);
    } else if (newChannelID === "870779233876705310") {
        let role = oldState.guild.roles.cache.get("870791199366189066"); //change this somewhat
        oldState.member.roles.add(role).catch(console.error); //adding a catch method is always good practice
    }
})

//table 20
bot.on('voiceStateUpdate', (oldState, newState) => {
    const txtChannel = bot.channels.cache.get('870792506546217050'); //manually input your own channel
    const newChannelID = newState.channelID;
    const oldChannelID = oldState.channelID;

    if (oldChannelID === "870779242043031573") { //manually put the voice channel ID
        let role = newState.guild.roles.cache.get("870791212771213352"); //added this
        newState.member.roles.remove(role).catch(console.error);
    } else if (newChannelID === "870779242043031573") {
        let role = oldState.guild.roles.cache.get("870791212771213352"); //change this somewhat
        oldState.member.roles.add(role).catch(console.error); //adding a catch method is always good practice
    }
})

// THIS IS THE bot.login
bot.login(process.env.token);
