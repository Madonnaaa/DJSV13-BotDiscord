const Discord = require('discord.js')
const config = require('../config.json')
module.exports = {
    name: "interactionCreate",
    execute(interaction, client) {

        if (interaction.customId == "ticketid") {
            interaction.deferUpdate()
            if (interaction.guild.channels.cache.find(canale => canale.topic == `ID Utente: ${interaction.user.id}`)) {
                interaction.user.send("**❗ | Hai gia un ticket aperto!**").catch(() => { })
                return
            }
            interaction.guild.channels.create(interaction.user.username, {
                type: "GUILD_TEXT",
                topic: `ID Utente: ${interaction.user.id}`,
                parent: config.ticketCategoria, //Settare la categoria,
                permissionOverwrites: [
                    {
                        id: interaction.guild.id,
                        deny: ["VIEW_CHANNEL"]
                    },
                    {
                        id: interaction.user.id,
                        allow: ["VIEW_CHANNEL"]
                    },
                    { //Aggiungere altri "blocchi" se si vogliono dare permessi anche a ruoli o utenti
                        id: config.ruoloAccessoTicket,
                        allow: ["VIEW_CHANNEL"]
                    }
                ]
            }).then(canale => {
                const embed = new Discord.MessageEmbed()
                .setTitle("TICKET APERTO")
                .setDescription("Grazie per aperto il ticket, ora puoi scrivere con lo staff.")
                .setColor("BLURPLE")

                const close = new Discord.MessageButton()
                .setLabel("Chiudi")
                .setStyle("DANGER")
                .setCustomId("closeid")

                const row = new Discord.MessageActionRow()
                .addComponents(close)

                canale.send({ embeds: [embed], components: [row] })
            })
        }
    }
}