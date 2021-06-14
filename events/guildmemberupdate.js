const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()

module.exports = async (client, oldMember, newMember, message) => {
  //booost
  if (!oldMember.premiumSince && newMember.premiumSince ) {
    let embed = new MessageEmbed()
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