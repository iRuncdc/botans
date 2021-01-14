const { MessageEmbed } = require('discord.js')

exports.run = async (client, message) => {
  let embed = new MessageEmbed()
  .setTitle('Shishiro Botan Commands')
  .setColor('#fe0000')
  .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
  .setDescription("") //isi desk nya ae dah serah lau
  .addField('FUN', '`avatar` `ping`', true)
  .addField('Mod', '`embedsay` `ban` `dm` `say` `servericon` `  banlog`', true)
 

  message.channel.send(embed)
}