const fs = require("fs");
module.exports.config = {
	name: "GOOD MORNING",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "arif babu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "arif",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("GM")==0 || event.body.indexOf("Gm")==0 || event.body.indexOf("Good morning")==0 || event.body.indexOf("GOOD MORNING")==0) {
		var msg = {
				body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐒𝐀𝐦𝐞𝐞𝐫 𝐊𝐡𝐀𝐧\n< ────────────────── >\n\n⎯꯭֯🌸⃪ ꯭⃛֯G❍❍𝐃 ɱ❍ɽηIIηG\n< ────────────────── >",
				attachment: fs.createReadStream(__dirname + `/noprefix/received_1332483190782575.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
