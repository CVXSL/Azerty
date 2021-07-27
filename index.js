const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "[Your Prefix]"

// THIS IS THE STATUS

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} :)`);
    bot.user.setActivity("[your custom status]", { // THIS IS THE PLACE YOU PUT YOUR CUSTOM STATUS
        type: "STREAMING", // THIS IS THE STATUS TYPE
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // THIS IS THE LINK IT WILL BRING YOU TO WHEN YOU CLICK "Watch Stream"!
    });

}
)

// THIS IS THE ([prefix]help) COMMAND

// [SCRIPT GOES HERE]

// THIS IS THE bot.login

bot.login(process.env.token);
