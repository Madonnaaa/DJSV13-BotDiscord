const Discord = require('discord.js')
module.exports = {
    name: "remove",
    aliases: ["rimuovi", "tremove", "trimuovi"],
    execute(message, args) {

            const error1 = new Discord.MessageEmbed()
            .setTitle("Errore...")
            .setDescription("Non puoi utilizzare questo comando qui.")
            .setColor("#ff0000")
            const error2 = new Discord.MessageEmbed()
            .setTitle("Errore...")
            .setDescription("Utente non valido.")
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
                    message.channel.permissionOverwrites.edit(utente, {
                        VIEW_CHANNEL: false
                    })

                    const embed = new Discord.MessageEmbed()
                    .setTitle(`${utente.toString()} | RIMOSSO`)
                    .setDescription(`${message.author.toString()} ha rimosso ${utente.tag} al ticket`)

                    message.channel.send({ embeds: [embed] });
                }
            }
            else {
            message.channel.send({ embeds: [error1] })
        }
    }
}