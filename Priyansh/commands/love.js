module.exports.config = {
    name: "love",
    version: "7.3.1",
    hasPermssion: 0,
    credits: "Alvi",///don't change my Credit Coz i Edit 
    description: "Get Pair From Mention",
    commandCategory: "img",
    usages: "[@mention]",
    cooldowns: 5, 
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": "",
        "jimp": ""
    }
};

module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas', 'arr2.png');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.postimg.cc/tgsxXqct/arr2.jpg", path); 
}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");

    let batgiam_img = await jimp.read(__root + "/arr2.png");
    let pathImg = __root + `/batman${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    batgiam_img.composite(circleOne.resize(200, 200), 70, 110).composite(circleTwo.resize(200, 200), 465, 110);
    
    let raw = await batgiam_img.getBufferAsync("image/png");
    
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

module.exports.run = async function ({ event, api, args }) {    
    const fs = global.nodemodule["fs-extra"];
    const { threadID, messageID, senderID } = event;
    const mention = Object.keys(event.mentions);
    if (!mention[0]) return api.sendMessage("Please mention 1 person.", threadID, messageID);
    else {
        const one = senderID, two = mention[0];
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "╭──────•◈•───────╮\n         🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍𝐒𝐀𝐦𝐞𝐞𝐫 𝐊𝐡𝐀𝐚𝐧☜ ✧•❁       \n\n━━━━⊱🩷⊰━━━━\n🌻⑅⃝𝐋𝐨𝐯𝟑🪴𝐏𝐚𝐢𝐫𝐢𝐧𝐆🩷⑅⃝┉❈\n━━━━⊱🩷⊰━━━━\n💜🌻┼─🌈— •°─༅༎༅💖 ❥︎:-🌼💚_𝐅𝐞𝐞𝐥𝐢𝐧𝐆𝐬 𝐚𝐫𝟯 𝐦𝐚𝐧𝐲 𝐁𝐮𝐭 𝐭𝐡𝐞 𝐥𝐚𝐧𝐆𝐮𝐚𝐆𝐞 𝐨𝐟 𝐞𝐱𝐩𝐫𝟯𝐬𝐬𝐢𝐨𝐧 𝐢𝐬 𝐟𝐞𝐰:-🌼🌻\n\n彡❝:-🌼💞✶⊶⊷⊷❍⊶⊷⊷✶                    ─━━◉❖𝐈 𝐋𝐎𝐯𝟑 𝐘𝐨𝐔🤗❖◉━━─           ❥═≛𝐒𝐨 𝐌𝐮𝐂𝐡 💝≛═❥                ─━━◉❖ 𝐌𝘆 𝗝𝐚𝐚𝐧𝐔 🙈❖◉━━─🪴✨💜\n\━━━━⊱🩷⊰━━━━\n🌻⑅⃝🩷⑅⃝┉❈\n━━━━⊱🩷⊰━━━━\n\n  Ỗ𝐖ηᗴ𝐑◉❖𒁍𝐒𝐀𝐦𝐞𝐞𝐫 𝐊𝐡𝐀𝐚𝐧 ッ\n╰──────•◈•───────╯", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
      }
