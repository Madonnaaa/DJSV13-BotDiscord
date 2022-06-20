const Discord = require('discord.js')
const config = require('../../config.json')
module.exports = {
    name: "suggerimento",
    aliases: ["suggest", "sugg"],
    execute(message, args, client) {
        const text = args[1]

        const embed1 = new Discord.MessageEmbed()
        .setTitle("🏹SUGGERIMENTO INVIATO")
        .setDescription(`Il tuo suggerimento è stato inviato nella chat: <#${config.CanaleSuggerimenti}>`)
        .setColor("GOLD")
        .setFooter({ text: message.author.tag })

        message.channel.send({ embeds: [embed1] })

        const embed = new Discord.MessageEmbed()
        .setTitle(`📝${message.author.tag} | SUGGERIMENTO`)
        .setDescription(`**__Suggerimento__: ** \n${text}`)
        .setColor("WHITE")

        message.guild.channels.cache.get(config.CanaleSuggerimenti).send({ embeds: [embed] })
    }
}