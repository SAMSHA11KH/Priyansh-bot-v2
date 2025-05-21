const fs = require("fs");
module.exports.config = {
	name: "hug",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "hug",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("huge")==0 || event.body.indexOf("hug")==0 || event.body.indexOf("Hug")==0 || event.body.indexOf("HUG")==0) {
		var msg = {
				body: "🙂𝙔𝙀 𝙇𝙊 𝘽𝘼𝘽𝙔 𝙃𝙐𝙂 𝙆𝙍 𝙇𝙄𝙔𝘼🙂",
				attachment: fs.createReadStream(__dirname + `/noprefix/hug.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
