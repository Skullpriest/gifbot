exports.run = (client, message, args) => {
	const write = require("fs");
	var file = require("./streamchannel.json");
	var gID = message.guild.id;
	var cIDdef = message.channel.id;
	var cID = cIDdef;
	if (args[0]) cID = message.guild.channels.find("name", args[0]).toString().slice(2).slice(0,-1);
	
	console.log(`Guild ID: ${gID}`);
	console.log(`Channel ID: ${cIDdef}`);
	console.log(`Channel2 ID: ${cID}`);
	
	
	for (var i = 0; i < file.SChannel.length; ++i){
		if (file.SChannel[i].guildID == gID) {
			file.SChannel[i].channelID = cID;
			file.SChannel.splice(i,1);
		}
	}
		
		var temp = {"guildID" : gID, "channelID" : cID}
		
		file.SChannel.push(temp);
		console.log(JSON.stringify(file));
		var test = "<#"+cID+">";
		message.reply(`stream announcement channel is successfully set to ${test}!`);
		write.writeFile("./commands/streamchannel.json", JSON.stringify(file), (err) => console.error);
	


}