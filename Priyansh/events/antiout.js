module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "Koi Ase Pichware Mai Lath Marta Hai?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`💐𝐁𝐎𝐒𝐒 𝐌 𝐈𝐒𝐄 𝐃𝐔𝐁𝐀𝐑𝐀 𝐀𝐃𝐃 𝐍𝐀𝐇𝐈 𝐊𝐀𝐑 𝐏𝐀𝐘𝐀💐 ${name} 𝐆𝐑𝐎𝐔𝐏 𝐌 :( `, event.threadID)
   } else api.sendMessage(`💐𝐀𝐋𝐄 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐁𝐇𝐀𝐆 𝐊𝐀𝐑 𝐊𝐀𝐇𝐀 𝐉𝐀 𝐑𝐀𝐇𝐄 𝐇𝐎💐, ${name} 💐𝐇𝐔𝐌 𝐀𝐏𝐊𝐎 𝐁𝐇𝐀𝐆𝐍𝐄 𝐍𝐀𝐇𝐈 𝐃𝐄𝐍𝐆𝐄 𝐉𝐀𝐀𝐍,𝐃𝐄𝐊𝐇𝐎 𝐉𝐀𝐀𝐍 𝐌𝐄𝐍𝐄 𝐀𝐏𝐊𝐎 𝐏𝐇𝐈𝐑 𝐀𝐃𝐃 𝐊𝐀𝐑 𝐃𝐈𝐘𝐀😘💐`, event.threadID);
  })
 }
}
