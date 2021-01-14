const { MessageEmbed } = require('discord.js')

exports.run = async (client, message) => {
  let embed = new MessageEmbed()
  .setTitle('Help Commands')
  .setColor('BLUE')
  .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
  .setDescription(``) //isi desk nya ae dah serah lau
  .addField('Fun', '`ping`  `avatar`', true)
  .addField('Mod', '`embedsay` `ban` `dm` `say` `servericon`', true)

  message.channel.send(embed)
}