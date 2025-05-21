const fs = require("fs");
module.exports.config = {
  name: "call",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "LEGEND-ARYAN", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("call") ||
     react.includes("Call") || react.includes("Bot call ao") || react.includes("call ao") ||
react.includes("CALL") ||
react.includes("Cal")) {
    var msg = {
        body: `🥀𝐀𝐋𝐄 𝐓𝐔𝐓𝐈𝐘𝐀 𝐓𝐄𝐑𝐊𝐎 𝐏𝐓𝐀 𝐇𝐀𝐈 𝐍𝐀 𝐌 𝐁𝐎𝐓 𝐇𝐔 𝐏𝐇𝐈𝐑 𝐂𝐀𝐋𝐋 𝐊𝐀𝐈𝐒𝐄 𝐀𝐔🥀😔🙃👈`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😔", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
