const fs = require("fs");
module.exports.config = {
  name: "Bkkk",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Bkkk",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Bhk")==0 || event.body.indexOf("Bhak")==0 || event.body.indexOf("Bhak")==0 || event.body.indexOf("bhak")==0) {
    var msg = {
        body: "😻𝐘𝐑 𝐁𝐇𝐀𝐆𝐀𝐎 𝐍𝐇𝐈 𝐏𝐋𝐈𝐙 𝐁𝐀𝐁𝐔😻",
        attachment: fs.createReadStream(__dirname + `/noprefix/received_374327888851290.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🏃", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }