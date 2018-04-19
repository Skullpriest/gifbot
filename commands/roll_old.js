exports.run = (client, message, args) => {
	try{
	if (args[0] != null)
	{
		var arr1 = args[0].toLowerCase().split("d");
		var firstnum = arr1[0];
		var pm = 0;
		var secondnum = "";
		var thirdnum = "";
		var result = "{";
		var resultnum = 0;
		var sign = "";
		
		var arr2;
		if (arr1[1].indexOf("+") != -1){pm = 1; sign = "+"; arr2 = (arr1[1].split("+")); secondnum = arr2[0]; thirdnum = arr2[1];}
		else if (arr1[1].indexOf("-")!= -1){pm = 2; sign = "-"; arr2 = (arr1[1].split("-")); secondnum = arr2[0]; thirdnum = arr2[1]; }
		else {secondnum = arr1[1];}
		
		
		var num1 = parseInt(firstnum);
		var num2 = parseInt(secondnum);
		if (pm > 0) var num3 = parseInt(thirdnum);
		
		if (isNaN(num1) || isNaN(num2)) throw "invalid";
		if (num1 == 0 || num2 == 0) throw "zero";
		
		if (num1<100 && num2<100)
		{
			var dicevalues = new Array(num1);
			for (i=0;i < num1;i++){
				dicevalues[i] = Math.floor(Math.random() * num2) + 1;
				result = result + dicevalues[i].toString() + ", ";
				resultnum += dicevalues[i];
			} // end for
			result = result.replace(/..$/ , "}");
		
		// if + or -o
			if (pm > 0)
			{
				if (isNaN(num3)) throw "invalid";
				result = result + " " + sign + " " + num3;
				if (sign == "+") resultnum += num3;
				else resultnum -= num3;
			}
		
			message.reply(result + " = " + resultnum);			
			
		}
		else message.reply("That's either a really big dice or too many dice.");
		
		
		
	}
	else message.reply("I'm pretty sure you're missing a dice.\nProper format: aDb+c or aDb-c");
	}
	catch(err)
	{
		message.reply("The numbers are wrong!\nProper format: aDb+c or aDb-c");
	}
}