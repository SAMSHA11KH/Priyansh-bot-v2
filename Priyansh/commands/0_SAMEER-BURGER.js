const fs = require("fs");
module.exports.config = {
        name: "burger",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "burger",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("burger")==0 || event.body.indexOf("BURGER")==0 || event.body.indexOf("Burger")==0 || event.body.indexOf("barger")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐒𝐇𝐀𝐀𝐍 𝐊𝐇𝐀𝐍 𝐊 \n< ────────────────── >\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐁𝐮𝐑𝐆𝐞𝐑 \n< ────────────────── >",
                                attachment: fs.createReadStream(__dirname + `/noprefix/991e72d7a5c0473b33da9fe4c86ca035.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍔", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
