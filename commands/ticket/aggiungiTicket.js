const Discord = require('discord.js')
module.exports = {
    name: "add",
    aliases: ["aggiungi", "tadd", "taggiungi"],
    execute(message, args) {

            const error1 = new Discord.MessageEmbed()
            .setTitle("Errore...")
            .setDescription("Non puoi utilizzare questo comando qui.")
            .setColor("#ff0000")
            const error2 = new Discord.MessageEmbed()
            .setTitle("Errore...")
            .setDescription("Utente non valido.")
            .setColor("#ff0000")
            const error3 = new Discord.MessageEmbed()
            .setTitle("Errore...")
            .setDescription("Questo utente è già presente nel ticket.")
            .setColor("#ff0000")

            const topic = message.channel.topic;
            if (!topic) {
                message.channel.send({ embeds: [error1] });
                return
            }
            if (topic.startsWith("ID Utente:")) {
                const idUtente = topic.slice(9);
                if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                    const utente = message.mentions.members.first();
                    if (!utente) {
                        message.channel.send({ embeds: [error2] });
                        return
                    }
                    const haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                    if (haIlPermesso) {
                        message.channel.send({ embeds: [error3] });
                        return
                    }
                    message.channel.permissionOverwrites.edit(utente, {
                        VIEW_CHANNEL: true
                    })

                    const embed = new Discord.MessageEmbed()
                    .setTitle(`${utente.toString()} | AGGIUNTO`)
                    .setDescription(`${message.author.toString()} ha aggiunto ${utente.tag} al ticket`)

                    message.channel.send({ embeds: [embed] });
                }
            }
            else {
            message.channel.send({ embeds: [error1] })
        }
    }
}