const fs = require("fs");
module.exports.config = {
        name: "Rasgulla",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "Rasgulla",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("Rasgulla")==0 || event.body.indexOf("rasgulla")==0 || event.body.indexOf("RASGULLA ")==0 || event.body.indexOf("RASGULA")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐒𝐚𝐦𝐞𝐞𝐫 𝐊𝐇𝐚𝐧 \n< ────────────────── >\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐑𝐚𝐒𝐆𝐮𝐋𝐋𝐚 \n< ────────────────── >",
                                attachment: fs.createReadStream(__dirname + `/noprefix/be44596031d105b70ff8ab6fafac56a9.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
