exports.run = async(client, message, args) => {
    
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send("kamu tidak memiliki izin!");

  let say = args.join(' ')
  message.channel.send(say)
  message.delete()
}