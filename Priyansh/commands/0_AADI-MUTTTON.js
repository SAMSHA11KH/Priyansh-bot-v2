const fs = require("fs");
module.exports.config = {
        name: "mutton",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "mutton",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("mutton")==0 || event.body.indexOf("Mutton")==0 || event.body.indexOf("MUTTON")==0 || event.body.indexOf("MUTON")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐒𝐚𝐦𝐞𝐞𝐫 𝐊𝐇𝐚𝐧 \n< ────────────────── >\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐌𝐮𝐓𝐓𝐨𝐍\n< ────────────────── >",
                                attachment: fs.createReadStream(__dirname + `/noprefix/pinterest__1740148114845_Bengali Mutton Curry 1080x1920.mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥩", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
