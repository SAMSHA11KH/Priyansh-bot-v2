const fs = require("fs");
module.exports.config = {
        name: "wada paw",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "wada paw",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("Wada paw")==0 || event.body.indexOf("wada paw")==0 || event.body.indexOf("WADA PAW")==0 || event.body.indexOf("VADA PAV")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐒𝐚𝐦𝐞𝐞𝐫 𝐊𝐇𝐚𝐧 \n< ────────────────── >\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐖𝐚𝐃𝐚 𝐏𝐚w\n< ────────────────── >",
                                attachment: fs.createReadStream(__dirname + `/noprefix/3d8fdc7c59d440d6e0d8ce533872cd2f.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
