exports.run = (client, message, args) => {
	const dicepattern = /(\d+)([dD])(\d+)(\+\d+$|\-\d+$)?/;
	try{
	if (dicepattern.test(args[0]) == false) throw 0;
	else {
		//hooray, user put correct dice number
		args[0].match(dicepattern);
		var a = parseInt(RegExp.$1);
		var b = parseInt(RegExp.$3);
		console.log(RegExp.$4);
		var calc = RegExp.$4.substring(0,1);
		var test1 = RegExp.$4.slice(1);
		var c = parseInt(test1);
		var ans = "{";
		var value = 0;
		var rand = 0;
		var arr2;
		
		//manually check for wrong numbers after aDb 
		if (args[0].indexOf("+") != -1){arr2 = (args[0].split("+")); if (/^\d+$/.test(arr2[1]) == false) throw 0; }
		else if (args[0].indexOf("-")!= -1){arr2 = (args[0].split("-")); if (/^\d+$/.test(arr2[1]) == false) throw 0; }
		else {arr2 = (args[0].toLowerCase().split("d")); if (/^\d+$/.test(arr2[1]) == false) throw 0;}
		
		if (a < 1 || b < 1) throw 0;
				
		if (a > 100 || b > 100) message.reply("that's too many dice for me to throw!");
		else
		{
			var dicevalues = new Array(a);
			for (i=0;i < a;i++){
				dicevalues[i] = Math.floor(Math.random() * b) + 1;
				ans = ans + dicevalues[i].toString() + ", ";
				value += dicevalues[i];
			} // end for
		ans = ans.replace(/..$/ , "}");
		
		// if + or -o
		if (isNaN(c) == false){
			ans = ans + " " + calc + " " + c;
			
			if (calc == "+")value += c;
			else value -= c;
		}
		
		message.reply(ans + " = " + value);			
		} // end else		
	}	
	}
	catch (err)
	{
		message.reply("Please give me a correct dice!\nProper format: aDb+c or aDb-c");
	}
}