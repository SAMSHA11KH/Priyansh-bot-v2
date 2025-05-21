const fs = require("fs");
module.exports.config = {
	name: "PyariSamjhGayi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "began ayee",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🙈")==0 || event.body.indexOf("🙈🙈")==0 || event.body.indexOf("Pyari")==0 || event.body.indexOf("🙈")==0) {
		var msg = {
				body: "🤭Pyari Samjh gyi 🫠",
				attachment: fs.createReadStream(__dirname + `/noprefix/pyari.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤫", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
