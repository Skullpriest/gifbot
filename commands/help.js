exports.run = (client, message, args) => {
	message.channel.send(
	{embed: {
    color: 3447003,
    author: {
      name: "GIFbot",
      icon_url: "https://s6.postimg.org/tackk79kx/token.png"
    },
    title: "Commands List",
    description: "Here are the available commands.",
    fields: [{
        name: "!help",
        value: "Displays this help message."
      },
	  {
		  name: "!hi",
		  value: "I greet you."
	  },
	  {
		  name: "!roll",
		  value: "Rolls a dice. The format is aDb+c or aDb-c."
	  },
	  {
		  name: "!stream",
		  value: "Generates a stream announcement if you're streaming. Make sure you use !setsc to set up the streaming channel!"
	  },
	  {
		  name: "!setsc channelname",
		  value: "Set up the streaming channel at the designated channel name. If left out, it sets the current channel as the streaming channel."
	  }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: "https://s6.postimg.org/tackk79kx/token.png",
    }
  }
});
	
}