const discord = require('discord.js')


module.exports = {

  
      run: async (client, msg, args) => {
          if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send('You can\'t use that!')
        if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.send('kamu tidak memiliki izin.')
  
          let embedtext = args.slice(0).join(" ")
          if(!embedtext) return msg.channel.send("Masukan kata-kata terlebih dahulu!")

           let embed = new discord.MessageEmbed()
           .setDescription(embedtext)
           msg.channel.send(embed);
          msg.delete()

       }
}