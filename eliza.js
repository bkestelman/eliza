exports.response = (human) => {
	var generic_replies = [ "Show me where he touched you.", "I see.", "I understand.", "Go on.", "How does that make you feel?" ];
	var rand = Math.random() * generic_replies.length;
	var reply = generic_replies[Math.floor(rand)];

	var hello_reply = "Hello. How are you feeling?";
	var hello_regex = /(hello)|(hi)|(hey)/i;

	var you_reply = "I'm very well. I just got back from my vacation in the southern provinces of Argentina. The weather was marvelous, even up in the mountains.";
	var you_regex = /(you\?*$)/i;

	var whatup_reply = "All good homie. How you hangin'?";
	var whatup_regex = /(what.*up\?*$)/i;

	var feelingGood_reply = "That's good to hear.";
	var feelingGood_regex = /(fine)|(good)|(well)|(splendid)|(great)|(never better)|(happy)|(jolly)|(fun)|(ok)|(perfect)/i;

	var feelingBad_reply = "Oh dear. Are you taking your medication?";
	var feelingBad_regex = /(bad)|(not good)|(not well)|(terrible)|(awful)|(sad)|(could be better)|(angry)|(unhappy)|(depressed)/i;

	var iam_reply = "Why are you "; 
	var iam_regex = /i am (\w+)/i;

	if(human.match(whatup_regex)) reply = whatup_reply;
	else if(human.match(iam_regex)) {
		var iam_verb = iam_regex.exec(human)[1];
		console.log(iam_verb);
		reply = iam_reply + iam_verb + "? Are you taking your medication?";
	}
	else if(human.match(hello_regex)) reply = hello_reply;
	else if(human.match(feelingBad_regex)) reply = feelingBad_reply;
	else if(human.match(you_regex)) reply = you_reply;
	else if(human.match(feelingGood_regex)) reply = feelingGood_reply;

	return { eliza : reply };
}
