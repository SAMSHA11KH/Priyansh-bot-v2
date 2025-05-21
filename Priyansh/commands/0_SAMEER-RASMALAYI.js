const fs = require("fs");
module.exports.config = {
        name: "rasmalayi",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "rasmalayi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("rasmalayi")==0 || event.body.indexOf("RASMALAYI")==0 || event.body.indexOf("Rasmalayi")==0 || event.body.indexOf("Malayi")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐒𝐚𝐌𝐞𝐞𝐑 𝐊𝐇𝐚𝐧 \n< ────────────────── >\n\n𝐘𝐚𝐚 𝐋𝐨 𝐁𝐚𝐁𝐔 𝐑𝐚𝐒𝐦𝐚𝐋𝐚𝐘𝐢 \n< ────────────────── >",
                                attachment: fs.createReadStream(__dirname + `/noprefix/98a697fd2edc0ce8a2e097125c324edf.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🧋", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
