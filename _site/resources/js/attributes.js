function getWord(){			
	var attributelist = ["great friend","active","adventurous","affectionate","alert","assertive","athletic","attentive","available","bold","brave","calm","cautious","cheerful","committed","compassionate","confident","considerate","content","coordinated","courageous","creative","curious","decisive","deferential","dependable","determined","devoted","diligent","discerning","discrete","enduring","enthusiastic","expressive","fair","faithful","flexible","forgiving","generous","gentle","graceful","grateful","helpful","hospitable","humble","humorous","imaginative","intelligent","intuitive","joyful","kind","lighthearted","loving","loyal","meek","mellow","merry","mysterious","nurturing","organized","open","patient","passionate","persuasive","playful","practical","proactive","provocative","punctual","reserved","resourceful","responsible","irreverent","reverent","self-controlled","sensitive","sexy","sincere","supportive","tenacious","thorough","thoughtful","tolerant","trusting","truthful","virtuous","vulnerable","warm","wise","witty","zany"]

	var randomattribute = parseInt(Math.random() * attributelist.length);
	var name = attributelist[randomattribute];			

	if(document.getElementById("word")){
		document.getElementById("words").removeChild(document.getElementById("word"));
	}
	var element = document.createElement("div");
	element.setAttribute("id", "word");
	element.appendChild(document.createTextNode(name));
	document.getElementById("words").appendChild(element);
}