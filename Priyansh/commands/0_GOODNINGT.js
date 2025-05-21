const fs = require("fs");
module.exports.config = {
  name: "good night",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "SHANKAR SUMAN", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("gn") ||
     react.includes("Gn") || react.includes("GN") || react.includes("GOOD NIGHT") ||
react.includes("good night") ||
react.includes("Good night")) {
    var msg = {
        body: `${name} गुड नाइट बाबू अपना खयाल रखना🥰😘👈`,attachment: fs.createReadStream(__dirname + `/noprefix/received_823141973186040.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥱", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }