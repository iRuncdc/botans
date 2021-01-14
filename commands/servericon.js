const { MessageEmbed } = require('discord.js')

module.exports = {
name: "servericon",
  description: "Show icon server",
  run: async (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('kamu tidak memiliki izin.')

    const embed = new MessageEmbed()
    .setTitle("Server Icon")
    .setColor('#fe0000')//colornya bebas kalian bisa Ganti apa aja
  .setImage(message.guild.iconURL({dynamic : true, size: 4096}))
    
    message.channel.send(embed)
    }
}