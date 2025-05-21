const axios = require("axios");
const request = require("request");

module.exports.config = {
  name: "hercai",
  version: "1.6.1",
  hasPermission: 0,
  credits: "SHANKAR SIR",
  description: "AI बॉट जो हर यूजर की बातचीत को याद रखकर जवाब देगा",
  commandCategory: "AI",
  usePrefix: false,
  usages: "[बॉट के मैसेज पर रिप्लाई करें]",
  cooldowns: 5,
};

let userMemory = {};
let isActive = true;

// **बॉट का मुख्य इवेंट**
module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, messageID, senderID, body, messageReply } = event;
  if (!isActive || !body) return;

  // **अगर यूजर ने बॉट के मैसेज पर रिप्लाई नहीं किया, तो कुछ मत करो**
  if (!messageReply || messageReply.senderID !== api.getCurrentUserID()) return;

  const userQuery = body.trim();

  // **यूजर हिस्ट्री लोड करो**
  if (!userMemory[senderID]) userMemory[senderID] = [];

  // **यूजर का पिछला कन्वर्सेशन जोड़ें**
  const conversationHistory = userMemory[senderID].join("\n");
  const fullQuery = conversationHistory + `\nUser: ${userQuery}\nBot:`;

  // **API को कॉल करो (अब पिछली चैट भी भेज रहे हैं)**
  const apiURL = `https://shankar-gpt-3-api.vercel.app/api?message=${encodeURIComponent(fullQuery)}`;

  try {
    const response = await axios.get(apiURL);
    let botReply = response.data.response || "मुझे समझने में दिक्कत हो रही है। क्या आप इसे दोहरा सकते हैं?";

    // **यूजर की हिस्ट्री स्टोर करें (अब 15 मैसेज तक)**
    userMemory[senderID].push(`User: ${userQuery}`);
    userMemory[senderID].push(`Bot: ${botReply}`);
    if (userMemory[senderID].length > 15) userMemory[senderID].splice(0, 2);

    return api.sendMessage({
      body: botReply,
      mentions: [{
        tag: "Bot",
        id: api.getCurrentUserID()
      }]
    }, threadID, messageID);
  } catch (error) {
    console.error("API Error:", error.message);
    return api.sendMessage("❌ AI से जवाब लाने में समस्या हुई। कृपया बाद में प्रयास करें।", threadID, messageID);
  }
};

// **बॉट के कमांड**
module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID, senderID } = event;
  const command = args[0] && args[0].toLowerCase();

  if (command === "on") {
    isActive = true;
    return api.sendMessage("✅ Hercai bot अब सक्रिय है।", threadID, messageID);
  } else if (command === "off") {
    isActive = false;
    return api.sendMessage("⚠️ Hercai bot अब निष्क्रिय है।", threadID, messageID);
  } else if (command === "clear") {
    if (args[1] && args[1].toLowerCase() === "all") {
      userMemory = {};
      return api.sendMessage("🧹 सभी उपयोगकर्ताओं की बातचीत की हिस्ट्री क्लियर कर दी गई है।", threadID, messageID);
    }
    if (userMemory[senderID]) {
      delete userMemory[senderID];
      return api.sendMessage("🧹 आपकी बातचीत की हिस्ट्री क्लियर कर दी गई है।", threadID, messageID);
    } else {
      return api.sendMessage("⚠️ आपकी कोई भी हिस्ट्री पहले से मौजूद नहीं है।", threadID, messageID);
    }
  }
};