exports.run = (client, message, args) => {
	
	var rd = Math.floor(Math.random() * 10);
	var txt = "Hey you should at least ask a question.";
		
	var placeholder = "";
	var num = 0;
	
	while (args[num] != null)
	{
		placeholder = placeholder + args[num] + " ";
		num++
	}
	
	placeholder = placeholder.toLowerCase();
	console.log(placeholder);
	
	if (args[0] != null) {
		txt = "Hmm, I don't know.";
		if (rd > 2) txt = "No!";
		if (rd > 6) txt = "Yes!";
	};
	
	if ((args[0] == "why") || (args[0] == "gifbot" && args[1] == "why")) 
	{
		rd = Math.floor(Math.random() * 10);
		txt = "Hmm, I don't know anymore. Maybe I should reconsider.";
		if (rd > 2) txt = "Because I want to.";
		if (rd > 6) txt = "For obvious reasons.";
	}
	
	rd = Math.floor(Math.random() * 10);
	if (rd == 1) txt = "I think you should ask someone else for that.";
	
	
	
	console.log(message.author.username);
	var teststr = "";
	
	if (placeholder.search("hug") > -1) txt = "Sorry, I'm not really into hugging!";
	else if (placeholder.search("mastina") > -1) txt = "I detected a certain name in your question. And I'm obligated to say that mastina is scum.";
	else if (message.author.username == "Alisae")
	{
		rd = Math.floor(Math.random() * 4);
		if (rd == 1) txt = "Shoot Ali";
	}
	else if (message.author.username == "CHESSKID")
	{
		rd = Math.floor(Math.random() * 2);
		if (rd == 1) txt = "CHESSKID";
	}
	else if (message.author.username == "Firebringer")
	{
		rd = Math.floor(Math.random() * 10);
		if (rd == 1) txt = "Hey Firebringer, why are you keep talking to me?";
	}
	
	message.channel.send(txt).catch(console.error);
}
