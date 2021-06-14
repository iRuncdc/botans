const { MessageEmbed } = require('discord.js')

module.exports = async (client, oldMember, newMember) => {
  //booost
  if (!oldMember.premiumSince && newMember.premiumSince ) {
    return client.channels.cache.get("685332210785845287").send
  }
}