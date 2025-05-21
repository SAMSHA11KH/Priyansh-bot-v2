const fs = require("fs");
module.exports.config = {
	name: "sorry",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sorry",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("sorry")==0 || event.body.indexOf("Sorry")==0 || event.body.indexOf("SORRY")==0 || event.body.indexOf("SORYYY")==0) {
		var msg = {
				body: "❤️𝐉𝐀𝐎 𝐌𝐀𝐅 𝐊𝐈𝐘𝐀 𝐌𝐀𝐈𝐍𝐄 🙈",
				attachment: fs.createReadStream(__dirname + `/noprefix/sorry.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
