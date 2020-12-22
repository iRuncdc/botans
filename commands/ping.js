exports.run = async(client, message, args) => {
  message.reply(`:ping_pong: Pong! ${client.ws.ping}ms`)
}