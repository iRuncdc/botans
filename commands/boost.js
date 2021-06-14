//boost.js manual


const { MessageEmbed } = require('discord.js')

exports.run = async (client, message) => {
  let embed = new MessageEmbed()
  .setAuthor('Thank You @namaorang to 2x boosting', 'https://cdn.discordapp.com/emojis/707059456952762471.gif?v=1')
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
    
 
message.delete()
  message.channel.send(embed)
}




  
