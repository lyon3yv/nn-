const { Message, Client, MessageEmbed } = require("discord.js");


module.exports = {
    name: "ping",
    aliases: ['p'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
const emk = new MessageEmbed()
.setDescription(`Mi ping es ${client.ws.ping}`)
    message.channel.send({embeds: [emk]})  
    },
};