const fs = require("fs");
module.exports.config = {
        name: "cola",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "cola",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("cola")==0 || event.body.indexOf("COLA")==0 || event.body.indexOf("Cola")==0 || event.body.indexOf("Coka cola")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐒𝐇𝐀𝐀𝐍 𝐊𝐇𝐀𝐍 𝐊 \n< ────────────────── >\n\n𝐘𝐞 𝐋𝐨 𝐉𝐚𝐍𝐞𝐌𝐚𝐍 𝐂𝐨𝐋𝐚 𝐏𝐢𝐘𝐎 \n< ────────────────── >",
                                attachment: fs.createReadStream(__dirname + `/noprefix/94bb49af864867ba223903adba404e16.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍷", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
