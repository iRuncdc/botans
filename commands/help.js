const discord = require('discord.js')


module.exports = {
  
      run: async (client, msg, args) => {
          let embedtext = args.slice(0).join("is!help")
          if(!embedtext) return msg.channel.send("")

           let embed = new discord.MessageEmbed()
            .setTitle("Shishiro Botan Bot Command")
  .setAuthor('')
  .setThumbnail(``)
  .setDescription(`
MODERATION
``say``, ``embedsay``, ``banglog``.
INFO
``ping``, ``avatar``.
`)
  .addField('', )
  .setColor('#fe0000')
  .setImage('https://cdn.discordapp.com/attachments/781907170844213249/790224873729163325/InShot_20201220_223118562.jpg')
  .setFooter(
        'Isekai Internation',                        
        "https://cdn.discordapp.com/icons/675998580019953675/a_ca25e095de97317ad857b2138662cfb5.gif?size=4096"
        )
  
          
           msg.channel.send(embed);

       }
}