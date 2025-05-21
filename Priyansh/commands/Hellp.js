const fs = require("fs");
module.exports.config = {
	name: "hellp2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Amir", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs5",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Help")==0 || event.body.indexOf("help")==0 || event.body.indexOf("Hellp")==0 || event.body.indexOf("hellp")==0) {
		var msg = {
				body: "🥀🥀🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/hellp.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💗", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }