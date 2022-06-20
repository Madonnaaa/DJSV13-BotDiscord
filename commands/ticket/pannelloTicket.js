const Discord = require('discord.js')
const config = require('../../config.json')
module.exports = {
    name: "set-ticket",
    execute(message, args , client) {
        message.delete()

        const embed = new Discord.MessageEmbed()
        .setTitle("🎫 | TICKET")
        .setDescription("Vuoi richiedere supporto dallo staff?\nApri un ticket spingendo il ticket sottostante.")
        
        const apriticket = new Discord.MessageButton()
        .setLabel("Apri Ticket")
        .setCustomId("ticketid")
        .setStyle("PRIMARY")

        const row = new Discord.MessageActionRow()
        .addComponents(apriticket)

        message.channel.send({ embeds: [embed], components: [row] })
    }
}