const Discord = require('discord.js')
const config = require('../../config.json')
module.exports = {
    name: "kick",
    execute(message, args, client) {

        const error1 = new Discord.MessageEmbed()
        .setTitle("Errore...")
        .setDescription("Non hai il permesso. `KICK_MEMBERS`")
        .setColor("#ff0000")
        const error2 = new Discord.MessageEmbed()
        .setTitle("Errore...")
        .setDescription("Non hai inserito nessun utente.")
        .setColor("#ff0000")
        const error3 = new Discord.MessageEmbed()
        .setTitle("Errore...")
        .setDescription("Non hai il permesso per kickare questo utente.")
        .setColor("#ff0000")

        let utente = message.mentions.members.first();
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.channel.send({ embeds: [error1] });
        }
        if (!utente) {
            return message.channel.send({ embeds: [error2] });
        }
        if (!utente.kickable) {
            return message.channel.send({ embeds: [error3] });
        }
        utente.kick()
            .then(() => {
                let embed = new Discord.MessageEmbed()
                    .setTitle(`${utente.user.username} - KICK`)
                    .setDescription(`${message.author.toString()} ha kickato: ${utente.tag}`)
                    .setColor("DARK_PURPLE")

                message.channel.send({ embeds: [embed] })
            })
    }
}