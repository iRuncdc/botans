exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('kamu tidak memiliki izin.')
  
  let say = args.join(' ')
  message.channel.send(say)
  message.delete()
}