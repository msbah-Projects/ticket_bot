const { SlashCommandBuilder,EmbedBuilder ,StringSelectMenuBuilder, StringSelectMenuOptionBuilder,ActionRowBuilder} = require('discord.js');
const config = require("../../config.json")

let panels = config.panels.map(panel => { return {name:panel.name,value:panel.name}})
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('لأرسال بانل بروم معين'),
	async execute(interaction) {
		await interaction.reply(`ping :**${interaction.client.ws.ping} ms**`)	

	},
};