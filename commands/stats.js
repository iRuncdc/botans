const { MessageEmbed } = require("discord.js")
const { platform, arch, cpus } = require("os")

exports.run = async(client, message, args) => {
  const model = cpus()[0].model + " " + arch()
  const tanggalBuat = client.user.createdAt
  
  const embed = new MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Bot Statistics")
  .setThumbnail(client.user.displayAvatarURL())
  .addField("Bot", `
Username: ${client.user.username}
Tanggal Dibuat: ${tanggalBuat}`)
  .addField("System", `
CPU: ${model}
Platform: ${platform}
Websocket: ${client.ws.ping} ms(miliseconds)`)
  
  message.channel.send(embed)
}