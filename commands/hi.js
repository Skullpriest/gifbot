exports.run = (client, message, args) => {
	message.channel.send(`<:KonCha:297227448997642240> ${message.author.username}!`).catch(console.error);
}