exports.run = (client, message, args) => {
	
	var rd = Math.floor(Math.random() * 2);
	var txt = "";
	
	if (rd == 0) {txt = "トゥットゥルー♪";}
	else txt = "Tu Tu Ru~♪";
		
	
	message.channel.send(txt, {files: ["https://i.imgur.com/j6QVxo6.png"]}).catch(console.error);
}
