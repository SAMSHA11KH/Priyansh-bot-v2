const fs = require("fs");
module.exports.config = {
        name: "gulabjamun",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "jumabjamun",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("julabjamun")==0 || event.body.indexOf("GULABJAMUN")==0 || event.body.indexOf("Gulabjamun")==0 || event.body.indexOf("sargulla")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐒𝐚𝐦𝐞𝐞𝐫 𝐊𝐇𝐚𝐧 \n< ────────────────── >\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐆𝐮𝐥𝐚𝐁𝐣𝐚𝐌𝐮𝐧 \n< ────────────────── >",
                                attachment: fs.createReadStream(__dirname + `/noprefix/pinterest__1740148058555_GULAAB JAMUN 720x1280.mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
