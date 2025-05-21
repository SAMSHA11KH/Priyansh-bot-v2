const fs = require("fs");
module.exports.config = {
  name: "bhabhi",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "AADI BABU", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("BHAbhi") ||
     react.includes("BhaBhi") || react.includes("bhaBhi") || react.includes("Bhabhi") ||
react.includes("bhabhi") ||
react.includes("BHABHI")) {
    var msg = {
        body: `😛 𝐌𝐚𝐢  𝐁𝐨𝐓 😹 𝐇𝐮 𝐓𝐨 𝐊𝐲𝐚 𝐇𝐮𝐚 😛 𝐌𝐚𝐢 𝐁𝐡𝐢 𝐁𝐡𝐚𝐁𝐡𝐢 😆 𝐁𝐨𝐋𝐮𝐧𝐆𝐚 👻 𝐁𝐡𝐚𝐁𝐡𝐢 😸`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }