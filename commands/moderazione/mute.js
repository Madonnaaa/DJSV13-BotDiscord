const Discord = require('discord.js')
const config = require('../../config.json')
module.exports = {
    name: "mute",
    execute(message, client, args) {
        let utente = message.mentions.members.first();

        const error1 = new Discord.MessageEmbed()
        .setTitle("Errore...")
        .setDescription("Non hai il permesso. `MANAGE_ROLES`")
        .setColor("#ff0000")
        const error2 = new Discord.MessageEmbed()
        .setTitle("Errore...")
        .setDescription("Non hai inserito l'utente da mutare.")
        .setColor("#ff0000")


        if (!message.member.permissions.has("MANAGE_ROLES")) {
            return message.channel.send({ embeds: [error1] });
        }
        if (!utente) {
            return message.channel.send({ embeds: [error2] });
        }

        utente.roles.add(config.ruoloMute)

        let embed = new Discord.MessageEmbed()
            .setTitle(`${utente.user.username} - MUTE`)
            .setDescription(`${message.author.toString()} ha mutato: ${utente.tag}`)
            .setColor("DARK_PURPLE")

        message.channel.send({ embeds: [embed] })
    }
}