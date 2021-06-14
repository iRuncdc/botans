const { MessageEmbed } = require('discord.js')

exports.run = async (client, message) => {
  let embed = new MessageEmbed()
  .setAuthor('Thank You', 'https://cdn.discordapp.com/emojis/707059456952762471.gif?v=1')
  .setThumbnail('')
  .setDescription(`**Dont Forget To Take role in <#830051712210960414> Claim The Benefit**
<@&683712552785412127>`)
  .setColor('#ef5dff')
  .setImage('https://cdn.discordapp.com/attachments/672075685640273940/853950365954080768/original.gif')
  .setTimestamp()
  .setFooter('ISEI BOOSTER',);
    
 

  message.channel.send(embed)
}




  
