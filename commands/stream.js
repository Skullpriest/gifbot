exports.run = (client, message, args) => {	
	
	var file = require("./streamchannel.json");

	if (message.author.presence.game == null){ 
		console.log("No game playing");
		message.reply("you are not playing any games!");
	}
	
	else
	{
		console.log(`${message.author.username} is currently playing ${message.author.presence.game.name}.`);
	
	if (message.author.presence.game.streaming == false){
		console.log(`${message.author.username} is not streaming.`);
		message.reply("you are currently not streaming!");}
	else
	{
		// test if stream channel is defined.
		
		var gID = message.guild.id;
		var guildfound = false;
		var cID = "";
		
		for (var i = 0; i < file.SChannel.length; ++i){
			console.log(file.SChannel[i]);
		if (file.SChannel[i].guildID == gID) {
			guildfound = true;
			cID = file.SChannel[i].channelID;
			}
		}
		
		console.log(guildfound);
		
		if (guildfound == false) {
			message.reply("The stream channel is not set on this server. use !setsc stream_server_name to set a stream channel for this server!");
		}
		else {
		client.channels.get(cID).send({embed: {
			
			color: 3447003,
			title: `${message.author.username} is currently streaming!`,
			url: `${message.author.presence.game.url}`,
			description: ` ${message.author.presence.game.name}`
			}			
		});
		}
	}	
	}
}