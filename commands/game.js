exports.run = (client, message, args) => {
	
	message.channel.send(`${message.author.presence.game.streaming}`);
	
}