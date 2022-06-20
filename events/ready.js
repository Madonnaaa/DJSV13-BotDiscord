const Discord = require('discord.js')
const config = require('../config.json')
module.exports = {
    name: "ready",
    execute(client) {
        client.user.setActivity(config.prefix + "help", { type: "WATCHING" })
    }
}