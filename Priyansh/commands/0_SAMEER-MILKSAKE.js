const fs = require("fs");
module.exports.config = {
        name: "milksake",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "milksake",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("milksake")==0 || event.body.indexOf("MILKSAKE")==0 || event.body.indexOf("Milksake")==0 || event.body.indexOf("milkseke")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐒𝐇𝐀𝐀𝐍 𝐊𝐇𝐀𝐍 𝐊 \n< ────────────────── >\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐌𝐢𝐋𝐤𝐒𝐚𝐊𝐞 \n< ────────────────── >",
                                attachment: fs.createReadStream(__dirname + `/noprefix/2e8ed3ced2384cd15b9bb2465d8be768.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🧋", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
