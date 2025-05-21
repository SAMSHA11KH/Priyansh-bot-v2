const fs = require("fs");
module.exports.config = {
	name: "PAISA",
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
	if (event.body.indexOf("PAISA")==0 || event.body.indexOf("Paisa")==0 || event.body.indexOf("paisa")==0 || event.body.indexOf("MONEY")==0) {
		var msg = {
				body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐒𝐀𝐦𝐞𝐞𝐫 𝐊𝐡𝐀𝐚𝐧\n< ────────────────── >\n\n⎯꯭֯🌸⃪ ꯭⃛֯𝐘𝐄 𝐋𝐄 𝐉𝐀 𝐉𝐄𝐄 𝐋𝐄 𝐀𝐏𝐍𝐈 𝐉𝐈𝐍𝐃𝐀𝐆𝐈\n< ────────────────── >",
				attachment: fs.createReadStream(__dirname + `/noprefix/ins_1712261201859.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💸", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
