const fs = require("fs");
module.exports.config = {
        name: "kachalu",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "kachalu",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("Kachalu")==0 || event.body.indexOf("kachalu")==0 || event.body.indexOf("KACHALU")==0 || event.body.indexOf("KACHAALU")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐒𝐚𝐦𝐞𝐞𝐫 𝐊𝐇𝐚𝐧 \n< ────────────────── >\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐊𝐚𝐂𝐇𝐚𝐋𝐔\n< ────────────────── >",
                                attachment: fs.createReadStream(__dirname + `/noprefix/80cf2c9fe179f584343e6993061b6ab7.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
