const Discord = require('discord.js')
module.exports = {
    name: "interactionCreate",
    execute(interaction) {
        if(interaction.customId == "closeid") {
            interaction.channel.delete()
        }
    }
}