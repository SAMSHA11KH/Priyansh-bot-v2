const fs = require("fs");
module.exports.config = {
  name: "tapatap",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "ARIF BABU",
  usePrefix: true,
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "tapatap",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("tapatap")==0 || event.body.indexOf("Tapatap")==0 || event.body.indexOf("TAPATAP")==0 || event.body.indexOf("Gandu")==0) {
    var msg = {
        body: "𝐘𝐄 𝐃𝐄𝐊𝐇𝐎 𝐌𝐀𝐈𝐍𝐄 𝐓𝐀𝐏𝐀𝐓𝐏 𝐊𝐑 𝐃𝐈𝐘𝐀",
        attachment: fs.createReadStream(__dirname + `/noprefix/752d3ded634517219af9daa2805f8fc3.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤦", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
