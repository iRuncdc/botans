const discord = require('discord.js')


module.exports = {
   if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('kamu tidak memiliki permission.')
  
      run: async (client, msg, args) => {
          let embedtext = args.slice(0).join(" ")
          if(!embedtext) return msg.channel.send("Masukan kata-kata terlebih dahulu!")

           let embed = new discord.MessageEmbed()
           .setDescription(embedtext)
           msg.channel.send(embed);
          msg.delete()

       }
}