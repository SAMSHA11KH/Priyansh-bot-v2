module.exports.config = {
        name: "pair5",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "ARIF BABU",
        description: "MADE BY ARIF BABU",
        commandCategory: "Picture",
        cooldowns: 5,
        dependencies: {
        "axios": "",
        "fs-extra": ""
    }
}
module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas', 'pairing.png5');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.postimg.cc/KckkhTxj/Messenger-creation-644610128725302.png", path);
}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");

    let pairing_img = await jimp.read(__root + "/pairing.png5");
    let pathImg = __root + `/pairing_${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;

    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));

    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));

    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    pairing_img.composite(circleOne.resize(147, 147), 153, 179).composite(circleTwo.resize(146, 146), 387, 195);

    let raw = await pairing_img.getBufferAsync("image/png");

    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);

    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}
module.exports. run = async function({ api, event, args, Users, Threads, Currencies }) {
  const axios = require("axios");
    const fs = require("fs-extra");
    const { threadID, messageID, senderID } = event;
    var tl = ['21%', '67%', '19%', '37%', '17%', '96%', '52%', '62%', '76%', '83%', '100%', '99%', "0%", "48%"];
        var tle = tl[Math.floor(Math.random() * tl.length)];
        let dataa = await api.getUserInfo(event.senderID);
        let namee = await dataa[event.senderID].name
        let loz = await api.getThreadInfo(event.threadID);
        var emoji = loz.participantIDs;
        var id = emoji[Math.floor(Math.random() * emoji.length)];
        let data = await api.getUserInfo(id);
        let name = await data[id].name
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});

        var sex = await data[id].gender;
        var gender = sex == 2 ? "Male🧑" : sex == 1 ? "Female👩‍  " : "Tran Duc Bo";
var one = senderID, two = id;
    return makeImage({ one, two }).then(path => api.sendMessage({ body: ` ${namee} ❤️ ${name} \n ️,,❉্᭄͜͡✣█✣█✣█✣█✣█✣█✣█❉্᭄͜͡

     ♥︎⊶⊷⊶⊷💛❍❤️❍💜⊶⊷⊶⊷♥︎                      
    ︗︗︗︗︗︗︗︗︗︗︗︗︗︗︗︗
      ❍♥️♥️❍♥️♥️❍♥️♥️❍♥️♥️❍
         𝐊𝐞𝐬𝐞 𝐤𝐞𝐡𝐝𝐮 𝐦𝐨𝐡𝐚𝐛𝐛𝐚𝐭 𝐧𝐚𝐡𝐢 𝐡𝐚𝐢
         𝐀𝐚𝐩𝐬𝐞 𝐦𝐞𝐫𝐞 𝐥𝐢𝐲𝐞 𝐦𝐨𝐡𝐚𝐛𝐛𝐚𝐭 𝐤𝐚
                     𝐌𝐚𝐭𝐥𝐚𝐛 𝐡𝐢 𝐚𝐚𝐩 𝐡𝐨
      ❍♥️♥️❍♥️♥️❍♥️♥️❍♥️♥️❍
  ╔╬⓼★⓼╃───────➣™
🄼🅁 🄱🄾🅃 🄾🅆🄽🄴🅁 🅂🄰🄼🄴🄴🅁𝄠━─━Ⓔ⧐
╰✾✾®️╀✿✿╀─━ↈⓇ⧐
      ♥︎⊶⊷⊶⊷♥️❍♥️❍♥️⊶⊷⊶⊷♥︎〔===== •𝐀𝐀𝐏 𝐃𝐎𝐍𝐎 𝐊𝐀 𝐏𝐘𝐀𝐑• =====☞: 〘${tle}〙`, mentions: arraytag, attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
}
