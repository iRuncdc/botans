const Discord = require("discord.js");
const client = new Discord.Client();


const ms = require('ms');


//UPTIME ROBOT (WEB)
const { get } = require("snekfetch");
const http = require("http");


const express = require("express")
const app = express ()
client.snipes = new Discord.Collection();

app.get("/", (req, res) => {
  res.sendStatus(200)
})

app.listen(process.env.PORT)

client.on("ready", async () => {
  console.log(`${client.user.tag} sudah online!`);

 let membersCount = client.guilds.cache.map(guild => guild.memberCount).reduce((a, b) => a + b, 0)
  const status = [
    (`Maintenance`),
     //gunanya untuk count user
    `Isekai Internation!!` //gunanya untuk count server yang dimasuki oleh bot
    ]
  setInterval(() => {
    client.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "WATCHING"}) //watching bisa kalian ganti sama playing dan semacamnya
  }, 5000)
});
client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.content === "indonesia") message.reply(":flag_id:");
//COMMAND BOT DI SERVER.JS
const prefix = "is!"
if(!message.content.startsWith(prefix)) return null;
let msg = message.content.toLowerCase();
let args = message.content.slice(prefix.length).trim().split(" ");
let cmd = args.shift().toLowerCase();
let command = cmd;
  


let commandFiles;
try{
  commandFiles = require(`./commands/${cmd}.js`)
} catch (err) {
  return message.reply("Command Not Found");
}
const db = require("quick.db")
const now = Date.now()
if(db.has(`cd_${message.author.id}`)) {
  const expirationTime = db.get(`cd_${message.author.id}`) + 3000
  if(now < expirationTime) {
  const timeLeft = (expirationTime - now) / 1000;
		return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${cmd}\` command.`);
}
}
  db.set(`cd_${message.author.id}`, now);
  setTimeout(() => {
    db.delete(`cd_${message.author.id}`)
  },3000)
try {
  commandFiles.run(client, message, args)
} catch (err) {
  } finally {
    console.log(`${message.author.tag} menggunakan command ${prefix}${cmd}`)
  }
  
});

 client.on('guildMemberAdd', (member) => {
    console.log(member)
    const message = `Hello Senpai!!! <@${member.id}>  `

    const welcomeChannel = member.guild.channels.cache.get('849954463773884417')

    welcomeChannel.send(message)
  })

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.id === '849954463773884417');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  let embed = new Discord.MessageEmbed()
  .setTitle("")
  .setAuthor('')
  .setThumbnail(`${member.user.displayAvatarURL()}`)
  .setDescription(`
**Hey yoo my senpai __${member.user.tag}__ ** <a:II_WATAME_Fukkireta:774966337746370560>
  
**Welcome to __Isekai Internation __**

**Don't Forget** 
<a:II_loved:702438843722367028> **Read The Rules On** <#682037630418157583>
<a:II_loved:702438843722367028> **Take the roles** <#682041803297521697>
<a:II_loved:702438843722367028> **Introduce your self**  <#682041469867262025>

**Semoga Betah Senpai!!! <a:II_loved:702438843722367028>**
`)
  .addField('Total Members', member.guild.memberCount, true )
  .setColor('#fe0000')
  .setImage('https://cdn.discordapp.com/attachments/781907170844213249/790224873729163325/InShot_20201220_223118562.jpg')
  .setFooter(
        'Isekai Internation',                        
        "https://cdn.discordapp.com/icons/675998580019953675/a_ca25e095de97317ad857b2138662cfb5.gif?size=4096"
        )
  
   channel.send(embed);
});


client.on('message', message => {
  if (message.content === 'wlc') {
    message.channel.send('<a:II_Stars:775298075295088640> <a:II_WC1:775297506695053322> <a:II_WC2:775297534670274560> <a:II_Stars:775298075295088640>');
  }
});



client.on = async (client, oldMember, newMember, message) => {
  //booost
  if (!oldMember.premiumSince && newMember.premiumSince ) {
    let embed = new Discord.MessageEmbed()
.setAuthor('Thank You **${newMember.user.tag}**', 'https://cdn.discordapp.com/emojis/707059456952762471.gif?v=1')
  .setThumbnail('')
  .setDescription(`
Dont Forget To Contact Server Manager To Claim The Benefit

<@&683712552785412127>`)
  .setColor('#ef5dff')
  .setImage('https://cdn.discordapp.com/attachments/832074883898146846/853954792937619486/ezgif-7-2dec1aa99780.gif')
  .setTimestamp()
  .setFooter(
'ISEI BOOSTER', 
"https://cdn.discordapp.com/icons/675998580019953675/a_b90104dbbbe9d5623d5814cba33d2ac4.gif?size=4096"
);
    

    return client.channels.cache.get("685332210785845287").send(embed)
  }
}

//boost

client.on('nitroBoost', (booster,member) => {
const channel = member.guild.channels.cache.find(ch => ch.id === '685332210785845287');
if (!channel) return;
 let embed = new Discord.MessageEmbed()
//embed
 .setAuthor('Thank You **${newMember.user.tag}**', 'https://cdn.discordapp.com/emojis/707059456952762471.gif?v=1')
  .setThumbnail('')
  .setDescription(`
Dont Forget To Contact Server Manager To Claim The Benefit

<@&683712552785412127>`)
  .setColor('#ef5dff')
  .setImage('https://cdn.discordapp.com/attachments/832074883898146846/853954792937619486/ezgif-7-2dec1aa99780.gif')
  .setTimestamp()
  .setFooter(
'ISEI BOOSTER', 
"https://cdn.discordapp.com/icons/675998580019953675/a_b90104dbbbe9d5623d5814cba33d2ac4.gif?size=4096"
);
       
})




client.login(process.env.TOKEN);