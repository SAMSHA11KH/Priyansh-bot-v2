const PREM_BABU= "PREM-PROJECT"; // Original credit

module.exports.config = {
  name: "pair",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: PREM_BABU,
  description: "THIS BOT WAS MADE BY MR PREM BABU",
  commandCategory: "LOVE PAIRING",
  usePrefix: false,
  usages: "PREFIX", 
  cooldowns: 5
};

module.exports.run = async function({ api, event, Threads, Users }) {
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];

  var { participantIDs } = (await Threads.getData(event.threadID)).threadInfo;
  var tle = Math.floor(Math.random() * 101);
  var namee = (await Users.getData(event.senderID)).name
  const botID = api.getCurrentUserID();
  const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
  var id = listUserID[Math.floor(Math.random() * listUserID.length)];
  var name = (await Users.getData(id)).name
  var arraytag = [];
  arraytag.push({id: event.senderID, tag: namee});
  arraytag.push({id: id, tag: name});

  // Check if credit has been modified
  if (module.exports.config.credits !== PREM_BABU) {
    return api.sendMessage("DON'T CHANGE CREDIT! PREM-PROJECT FUCK YOUR MOTHER AND SISTER", event.threadID, event.messageID);
  }

  // Array of Imgur gif links
  const imgurGifs = [
    "https://i.postimg.cc/VLfz1b3T/fP5kc0h.gif",
    "https://i.postimg.cc/25vsnzsh/EO5EtJp.gif",
    "https://i.postimg.cc/LX2bfjBF/3qSoi8K.gif",
    "https://i.postimg.cc/m2JpjvNw/OJ6uIXY.gif",
    "https://i.postimg.cc/0ySWBVVq/qVpA7RB.gif",
    "https://i.postimg.cc/25wxsMvg/41ogamD.gif",
    "https://i.postimg.cc/V6mFXndC/b3b9c8f5da7157a9dd56230f2ba96920.gif",
    "https://i.postimg.cc/qvQKWSRz/027b9c1e4e9eb567c0d91b8fd60461ea.gif",
    "https://i.postimg.cc/P5NPz3j1/b738efcb91a80ad84a4cb60b9d9ceb6b.gif",
    "https://i.postimg.cc/7ZpY1qXy/b6c5d4fd5a3fcb73d4419eaf1a31da22.gif"
    // Add more Imgur gif links as needed
  ];

  // Select a random Imgur gif link
  const randomImgurLink = imgurGifs[Math.floor(Math.random() * imgurGifs.length)];

  // Download the gif from the selected Imgur link
  const gifData = (await axios.get(randomImgurLink, { responseType: "arraybuffer" })).data; 
  fs.writeFileSync(__dirname + "/cache/giflove.png", Buffer.from(gifData, "utf-8"));

  // Download avatars
  let Avatar = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data; 
  fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );

  let Avatar2 = (await axios.get( `https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
  fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );

  // Prepare attachments
  var imglove = [];
  imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
  imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
  imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));

  var msg = {
    body: `🌸=== 𝐎𝐰𝐧𝐞𝐫 ➻    𝐒𝐀𝐦𝐞𝐞𝐫 𝐊𝐡𝐀𝐧\n\n<   ❤__________💋

🍒🐰•|____[🌺]~Kʌʌs  ɣɘʜ  Sʌpŋʌ  Bʜɩ Pʋɽʌ┣┫❍ JʌɣƏ______|•💜 |•_____🌿| 🧸❤️

♡🧸•||•___[✨]~┣┫ʋɱ  Bʜɩ  KɩsɩĸƏ Sʌpŋ❍ ɱƏ Aʌ JʌɣƏ___|•💎 |•_____🎻♡🥀

______':) "☘️"°•°𝐊н๏๏sɓ๏๏ bʌηʞəɽ təɽı sʌʌηsøη ɱə Smʌ JaYƏnGə_____"💌◔✩◔🌹"

"☘️"______':) "💛"[[Sʋʞøøη ɓʌηʞəɽ ʈəɽə ɗıɭ ɱə ʋʈʌɽ Jʌɣəηʛə__"🌹🍷"]]

______':) "☘️"𝐌əнsøøs kʌɽηə kı ʞ๏sıs ʈø ʞıנıɣə əʞ ɓʌʌɽ___"😘◔✩◔🌹"

•||🌹||•◔✩◔"☘️"Ɗʋɽ ɽʌнʈə Ӈʋə ɓнı Pʌʌs Nʌʑʌ ʌʌɣəηʛə__"🍷🍷🌹"
            🌹   ____"😘💌"AAP DONO KA PYAR 👉 ${tle}% है\n`+namee+" "+"💖"+" "+name, 
    mentions: arraytag, 
    attachment: imglove
  };

  return api.sendMessage(msg, event.threadID, event.messageID);
}
