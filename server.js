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
    `${membersCount} Member`, //gunanya untuk count user
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
    const message = `Hello Senpai!!! <@${member.id}> <a:II_AME_KININARIMASU:783245048397168671>`

    const welcomeChannel = member.guild.channels.cache.get('681912351624003626')

    welcomeChannel.send(message)
  })

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.id === '681912351624003626');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  let embed = new Discord.MessageEmbed()
  .setTitle("")
  .setAuthor('')
  .setThumbnail(`${member.user.displayAvatarURL()}`)
  .setDescription(`
**Hey yoo my senpai __${member.user.tag}__ ** <a:II_INAFF:783242775352311809>  
  
**Welcome to __Isekai Internation __**

**Don't Forget** 
<a:II_AYAME_APEX:783243164563144724> **Read The Rules On** <#682037630418157583>
<a:II_AYAME_APEX:783243164563144724> **Take the roles** <#682041803297521697>
<a:II_AYAME_APEX:783243164563144724> **Introduce your self**  <#682041469867262025>

**Semoga Betah Senpai!!!**<a:II_MORI_SHINDEIRU:783246512913252392>
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


client.login(process.env.TOKEN);