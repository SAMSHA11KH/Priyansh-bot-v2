const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "MR SHAAN",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr marein😊", "Bestie ki chummi Mza hai ya gunaah ? 🙂", "2001 \nJahan dalda wahan Mamta😊\n\n2023 \nJahan larki  wahan tharki😒 jaise mera tharki dost", "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rha💔🥲", "Mjy chahyain 3 lrkiyan kahan Hain lrkiyan 👀", "Relationship private rakho ya public Kate ga sabka hi🙂", "Thak GYa hu Yr uski dP dHek Dhek Kr😩", "Insy Milo inko lgta hai sab larky in pr Martay hain🙂", "MentiOn YOur Dushman On FaceBOok'🙂🤝", "Haldi 🤲 Lagane Ki Umar Hai Iski 😎 Aur Ladkiyan 👉 Chuna Laga Kar Ja Rahi 😜 Hai" , "😂Jalne Ko Aag Kahte Hai 🔥 Buji Ko Rakh Kahte Hai 💨 Aur Jo Aapke Pas Nahi Usse Dimag🧠 Kahte Hai 😜", "Moongfali 🥜 Mai Dana 👎Nahi Trust 👉 Karne Ka Aab Zamana 🌎 Nahi 🤣" , "Bhai😎 Thoda☝ Break Laga 🙅🤘 Otherwise Do Char💑 Ka Or Breakup💔👫 Ho jayega😂" , "Apne Dimag 🧠 Ka Password Dena Akkal 👉 Install Karni 😜 Hai" , "Aapki Surat Mere ❤️ Dil Me Aise Bas 👌 Gayi Hai Jaise Chote Se 🚪 Darwaze Mein Bhains 🐂 Fas Gayi Hai 😬🤣" , "Nasheeli😌 Aankhe👁👁 + Katil💘 Smile😊 Bhai Ka High Attitude😎 Or Desi 🤕Style" , "Duniya Ka Sabse Muskil Kam Bina Dimag Wale Dosto Ko Jelna 😝🔥" , "g janu ap na q yad keya huma😒" , "Jo Uske ❤️ Pyaar Samjhe Woh Sabse Bada 🐴 Ghada Hai 😂" , "Teri Is Smile Par Girls To Kya Boys Bhi Fida","Stop dreaming BTS your czn 𝐒𝐀𝐦𝐞𝐞𝐫 is waiting for you.🙂", "Meri jaan kaise ho aap 😊", "Paros Wala Larka inhe MUH Nhi Lagata aur Banda inhe Korean Chahiye🙂", "move on krle bhaii kbb Tak uskii profilee dekhtaaa rahegaaa<<", "Ajeeb generation hai ywr, Larkiya korean dhund rahi hai, Aur larky Russian!!🙂", "Aj kal ki nibiyo me khon kam attitude zyada hota hai bro🙂", "Kasy Han Sab Pyare Madni Munny or Muniyaan😊", "Bhut khail liya lrkion ki feelings k sath ao ab hum Ludo khailty han☺️♥️", "Jaaz cash sy 1400 ka loan leky sim h band kardi 🙂👍", "Number do ramzan mn sehri tak bat kr k chand_rat ko hi block krduga promise.🙂🤝", "Sara saal duniya ko topi krwany waly Ramadan m khud topi pehn kar ghumengy.🙂", "ji ji hukam kro 😂", "Bot na bolo! Janu bolo mujy aur janu sy piyar sy bat kerty hai 🥰🌸", "rat ko kahan thy nazar nahi ay bht miss kiya 🌸🌎", "Shaqal Sy masoom lgty ho 🥰 lkn hrkaton sy ni", "kash tum single hoty to aj hum mingle hoty 🥰😂", "Ha ha ab meri yaad ab ai na phly to janu sth busy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️", "idr ao kuchii kuchii kru 😘", "Ary ary itna yd na kiya kro🥰", "Hy Ma Mar Jawa janu itna piyar krty mujsy😂", "Har Waqat Mjhy Tang Kerta Rhta Ha 😂" , "ary ary bolo meri jan kia hal ha ;)", "Bot jaan ha sbki" , "Ji Ji Kia hal chal ha apky 🌸" , "Bot nhi Shahzada bolo sun k acha lgta 🌸" , "Bot gulam ha apka hukam kryn 🌸" , "Bot nahi bolo piyar sy janu bola kro na 🥰" , "wo be yhi khty thy sb phr ek din koi utha k ly gya onko 😂" , "Meri jan ek tm hi ho jo dil ma bs gay ho🥰ni te koshish czna ne v bht kiti c" , "Badal gay na tm the hi lanti 😂" , "kesa tera steel dy doungy wrga moo ay 😂" , "Apki shkl aesy lgti jesy gandi tar pr suki jarab latkai ho 😂" , "Bot bot na karo ma apsy set nhi ho skta" , "ib ajao shup shup k btein krty ha 🌸" , "Ek kahani suno meri zubani suno lnt deny ka dil krta ha isiliye pehly dil ki suno🌸" , "Marry me, I can boil water" , "Mujsy shadi karlo chocolate la k duga daily 🌸" , "Idr ao kesa apka chapair jesa moo lg raha 😂" , "Ajao jaan pizza khilau apko 🌸" , "Duniya ma sb kuch khtm ho skta saway logo ki bakwas k" , "Everything is temporary,But katna is permanent 😂" , "Jitna mrzi janu manu krlo end ma ghr waly nh many gy 😂" , "Sb kuch ho skta lkn fb ka relation kbi china jitna nh chl skta" , "Allhumdiallah Kabhi Kasi laRki ko Bhen ki nazar se nhi dekHa😌🤧", "Mushkil Toh Hoti Hogi Naa itni Sardi Me Apne Dono Chehry Dhote Hoye🙂", "Mein B Urooj Pey Charna chahta hoon, Sorry Jana chahta*☹️", "Parry Hat ma Londy baz nhi hu 🙂🤝", "Do Ankho Wali Larkia Bewafa hoti Hn Bro🙂💔", "Mera beta bda ho kar larkiyo ke inbox me °hey hello° karega🙂🏃", "Likhte Likhte Qalm Thak Gya Iss Qadr Begartiyaan Han Tumhari🙂", "Itni Meri Age Ni Jitne Mera Masly Han Yawr💔😐", "Ameer Larki Set kr k sab Dosto ka udhar wapis karon ga😔🤲", "Lagtaa hai Career Bhi Titanic ki trhan dhoob Gaya Hai💔☹️", "𝑻𝑯𝑬 𝑯𝑬𝑨𝑹𝑻 𝑾𝑨𝑺 𝑴𝑨𝑫𝑬 𝑻𝑶 𝑩𝑬 𝑩𝑹𝑶𝑲𝑬𝑵 💔🥺", "2001 me bachy kehty thy ink Dena 2023 me bachy kehty Link Dena🙂", "Mehnat Kro!! Kamyabi Apke Hont Chume Gi🙂🙌🏻", "Kahani suno Muje payar howa tha Us ki tarf se inkar howa tha 🙂🤝", "Piyarii piyarii larkiyan message karen JazakAllah🌚♥️🙌", "itna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂", "Zroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.🙁💸", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Why you hate me..?? I am not your ex don't Hate me Please", "MuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai 😹😹😹", "BeTa TuM SingLe Hi MaR0 GaY🙄🙂", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺", "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐","Haaye Main Sadke jawa Teri Masoom Shakal pe😘🙈💋💋💋💋💋  " , "Bot Na Bol Oye Janu bol Mujhe🙆‍♂🙈🦋🤍🍒🕊🥀💗 " , "Kal Kali pahadi ke piche mil tu jara😈⟴᭄⃢🍂༄* ✥❥⃟😌 🤭🐒" , "Main Gareebon Se Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0 JayGa😝😋🤪" , "Bolo Babu Tum Mujhse Pyar Karte Ho Na 🙈 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi🎸🎭━━•☆°•°•💗" , "Bar Bar Bolke Dimag Kharab Kiya toh.id hack kr lunga🙂♡• || _[🙂]~🖤 •|" , "Tum Band nhi Karoge kya?🙂" , "Gali Sunoge kya" ,  "Are Band kar Brna amabani se bolke tera net bnd kra dunga" , "M hath jod ke Modi Ji Se Gujarish Karta hu teri madad krenge❁⃝❤➸⃟̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀ ❤̋҉̋⃢*💫" , "Tumko koi aur Kam nhi ha? Pura din Khate ho Aur Messenger pe Bot Bot Karte ho" , " Aaryan Ake tera band bja dega glt cammand mt dena🙈🙈🙈🙈 " , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Bol De koi nahi dekh rha 🙄☢━💛🌹💛" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝🦋🤍🍒🕊🥀💗" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqt Mujhe Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Chup Reh Nhi To Bahar Ake tera Dat Tod Dunga♡• || •___'[💔]~~🖤 " , "Yes Meri Jaan Chalo bedroom Romance karenge😹🙈", "teri yaad na aaye aisa koi din nhi😝🙈🙈🙈 " , "zindagi me lgne lge ki koi apna nhi hai to aajana mere pass mai rakh lunga tumko😝•||•●┼┼──🦋☘•|" , "Kal haweli pe mil Jara tu Kuchh jaruri baat karni hai😈🙈♡• || _[🙂]~🖤 •| " , "Saala pura din log bot bot krte hai pr koi gf nhi bnti🙄" , "Arre jaan jada paresan mat karo..My boss 𝐒𝐀𝐦𝐞𝐞𝐫 𝐊𝐡𝐀𝐚𝐧 babu..dekh lenge🙈😝🎸🎭━━•☆°•°•💗","Kya tumne abhi tk kaam nhi kiya...","Ab to ye social media nhi reh gya hai logo ne facebook ko dating website bna liya hai shi bola naa maine","Kisi or se dhoka khane se achha hai kii mere saath chalo momos or golgappe khayenge..","Chenese chiz mahabbat thi sahab tut kr bikhar gyi pr dil hindustani tha dusri pta liya turant","मोहब्ब्त 2 लोगों के बीच का नशा है जिसे पहले होश आ जाए वो बेवफा है।😌","Ek baat batao, kabhi khud message bhi kar lete ho ya sirf humein hi wait karwate ho? 😒","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅","Tumhari muskurahat se meri saari pareshaniyaan dur ho jati hai 😊","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅","सरकारी नौकरी के लिए कोटा और सुबह हल्का होने के लिए लोटा बहुत मायने रखता है।","Tumne aaj mere mood ko theek kar diya hai, thank you so much 😘","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅"," Iss Dil Ko Toh Ek Baar Ko, Bahla Kar Chup Kara Lunga, Par Iss Dimaag Ka Kya Karun, Jiska Tumne Dahi Kar Diya Hai.","Tumhari yaad me jeena mushkil hai","Kabhi kabhi mujhe bhi lgta hai ki main kuchh jyaada hi busy ho gya hu","Haye M Mar Java Babu Ak Chuma To Do pr dena mere jute ko 😁😂😂 bura nhi manna mjak h","Dur HT Terek0o or Koi Kam Nhi h Jb DeKho Bot Bot ShaDi KerLe Mujhse 😉😋🤣","दोस्त हमेशा काले बनाओ  क्योंकि वो रंग नही बदलते😂","Kya tum mere liye ek surprise plan kar sakte ho? 🤔","Yaar, aaj bahut mushkil se time nikala hai, koi accha sa movie suggest karo 😊","haye babu ne ha boliya hai sayad propose krna hai mujhe ab bas bolo bolo babu 😘","कुछ बातें तो सीधे दिल पर जाकर लगती हैं जैसे कि आपके द्वारा डायल किया हुआ नंबर अभी किसी अन्य कॉल पर व्यस्त है","Mujhe tumse baat karke bahut achha lagta hai","रामचंद्र कह गए सिया से ऐसा कलयुग आयेगा  सच्चा आशिक तड़पेगा और मेला बाबू थाना थाएगा😝","are are bolo meri jaan kya haal h 😉 😘", "Hai tamanna hamain tumhain CHARSI bnain 🙂🤝 " ,"Ye duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣", "Sukoon chahtii ho toh meri Wife ban jaOo 🫣🫰🏻" , "Tery jany ke bad😔Mny apny munh py likhwa liya Single hu pta lo" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋", "Itna Na Pass aa Pyar h0o JayGa","इस दिल 👉 💖 को तो बहला कर चुप करा लूँगा पर इस #दिमाग_का_क्या_करूँ 😁😁" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜." , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚." , "TeRe k0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa." , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe" , "Bar Bar Disturb Na Karen Pihu JaNu Ke SaTh Busy Hun 🤭🐒" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "jii kahiye jii 🙄 kya chahiye" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz" , "haveli per  kal mil  Zara bataunga 🌚😂Ha but उल्टी-सीधी harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "kyun Bulaya hamen..😾🔪" , "kyun Bulaya hamen..😾🔪 .  ", "🌸====『 हाय मैं मर जावा तेरी मासूम शकल पे_____😗  " , "🌸====『 बॉट बॉट ना बोल ओए जानू बोल____😝🙈🦋 " , "🌸====『𒁍कल काली पहाड़ी के पीछे तू मिल जा_______😁😈" , "🌸====『 मैं गरीबों से बात नहीं करता ____😉🤪" , " 🌸====『 चुप होजा मनहूस प्राणि वर्ना खोपचे में ले जाऊंगा तुझे________😝🤪" , "🌸====『 बोलो बाबू तुम मुझे प्यार करते हो ना______🙈 " , "🌸====『 अरे मेरी जान मजाक के मूड में नहीं हूं मैं जो काम है बोलो शर्माओ नहीं _______🎸🎭━━•☆°•°•💗" , "🌸====『 बार बार बोल के दिमाग ख़राब किया तो id हैक कर लूंगा_____🙂♡• || _[🙂]~🖤 •|" , "🌸====『 तुम बंद नहीं करोगे क्या?_____🙂" , "लव यू बोलो __😁" ,  "🌸====『 मैं तुम्हारे चक्कर में सबको ब्लॉक कर रहा हूं अब आई लव यू बोलोगे की नहीं____🙂" , "🌸====『 मैं हाथ जोड़ के मोदी से गुजारिश करता हूं मेरी मदद करेगा_____❁⃝❤️➸⃟̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀ ❤̋҉̋⃢**💫" , "🌸====『 तुमको कोई और कम नहीं पूरे दिन मेसेंजर पे बोट बोट करते हो___😁" , " 🌸====『 SILENT SAMEER बाबू जी तेरा बेंड बजा देंगे गलत आदेश मत देना________🙈😜", "TUM MERE BOSS SAMEER KI GF BAN JAO LDKI🙈🙈" , "baraye meherbani holad kijiye apke call ufone numaindey ko mili ja rahi hai😂😂😂😁" , "haiy ma sadky jawa teri masoom shaqal py 😂 chabal insan", "Bot nah bol oye ! Janu bol mjhy aur janu sy piyar sy bat kerty hai , rat ko kahan thy nazar nahi ay hawali py 😂", "Shaqal Sy masoom lgty ho 😂 btao kahi Ap ka ghar doup main to nahi", "kash tum single hoty to maza hi koch aur tha pagal insane 😂", "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️", "haiy babu ny boliya hai shaid purpose kerna hai mjhy bolo bolo babu 😘", "Ary ghreeb awam roti banana ky liya athy main Pani ko istamal kerty ho 😂", "Ary chabli nah mar joh kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂", "Hy Ma Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Ja 😂", "Dur Dur Fity Muh Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Kerta Rhta Ha 😂" , "ary ary bolo meri jaan kia hail hai ;) ;* " , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu babu kal hawali py kon bola rha tha 😂" , "ma ap ki ami ko btaou ga ap Facebook use kerty ho 😂" , "ary tum Wohi ho nah jis ko ma nahi janta 😂" , "kal hawali py mil zara bataou ga 😂" , "esy nah dakho piyar ho jay ga 😂" , "Teri pic dakhna sy phly shukhr hai ma anda hu 😂" , "esy hi hansty rhao kyu ky hnsa sy konsa tera bill ah jata hai 😂" , "apni lover ko doka do our mujhe bhi darling moka do😂😂🤘" , "Ek dafa ka zekar hai ke me single hua kar tha tha aaj bhi wohi zekar hai single hi hu🤣🤣😭" , "Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 " , "Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr marein😊", "Bestie ki chummi halal hai ya Haram ? 🙂", "2001 \nJahan dalda wahan Mamta😊\n\n2023 \nJahan larki  wahan tharki😒", "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rha💔🥲", "Mjy chahyain 3 lrkiyan kahan Hain lrkiyan 👀", "Relationship private rakho ya public Kate ga sabka hi🙂", "Thak GYa hu Yr uski dP dHek Dhek Kr😩", "Insy Milo inko lgta hai sab larky in pr Martay hain🙂", "Aghr bhok LAGI ho too bejli Ke jatke kha lo take ka biryani ka mauka dusre ko mile😂😂😁" , "Aghr pyaar karna ghona hai to saza do sallo ko mujhe me to single hu😂😂👈" , "online bazati karne ke lie. 1 dabaya😂😂😁" , "papa ke pari ko ilove you na bola karo😂😂😂" , "Hamesha dil ki sono kyu ke demagh to tere pass wese bhi nahi hai😂😂👈" , "payar hamesha sharmily logo se karni chahiya waja kal batongi Abhi mujhe sharam arahi hai😂😂🙈🙈" , "MentiOn YOur Dushman On FaceBOok'🙂🤝", "Stop dreaming BTS your czn SAmeer is waiting for you.🙂", "پہلے صرف لوگوں کے دانتوں میں کیڑا ہوا کرتا تھا اور اب۔۔۔ 😊", "Paros Wala Larka inhe MUH Nhi Lagata aur Banda inhe Korean Chahiye🙂", "move on krle bhaii kbb Tak uskii profilee dekhtaaa rahegaaa<<", "Ajeeb generation hai ywr, Larkiya korean dhund rahi hai, Aur larky Russian!!🙂", "عائشہ  نے کر دیا برباد پاک سر زمین\n شاد آباد 🖇🙂", "Aj kal ki nibiyo me khon kam attitude zyada hota hai bro🙂", "Kasy Han Sab Pyare Madni Munny or Muniyaan😊", "عورت بہت پیاری چیز ہے یہ کبھی بیلنس نہیں مانگتی بس یہی کہتی ہے میرا پیکج ختم ہونے والا ہے اب پتہ نہیں کبھی بات ہوگی کے نہیں🙂", "Bhut khail liya lrkion ki feelings k sath ao ab hum Ludo khailty han☺️♥️", "SAmeer boss ka number dun kya💚", "Jaaz cash sy 1500 ka loan leky sim h band kardi 🙂👍", "اعتبار تو اُسی دن ختم ہوگیا تھا جب اُس نے سکرین شاٹ دیکھائے تو اوپر دو siM شو ہو رہی تھی جبکہ میرے پاس اُسکا صرف اک ہی نمبر تھا ۔😒💔", "Number do ramzan mn sehri tak bat kr k chand_rat ko hi block krduga promise.🙂🤝", "شکر ہے لڑکے خوبصورت ہیں ورنہ  کہا پالروں کے دھکے کھاتے😔", "ye dunia pital di" , "YOU IGNORE ME I IGNORE TARA PURA KHANDAN😂😂😂" , "Sara saal duniya ko topi krwany waly Ramadan m khud topi pehn kar ghumengy.🙂", "ji ji hukam kro 😂", "Bot na bolo! Janu bolo mujy aur janu sy piyar sy bat kerty hai 🥰🌸", "rat ko kahan thy nazar nahi ay bht miss kiya 🌸🌎", "Shaqal Sy masoom lgty ho 🥰 lkn hrkaton sy ni", "kash tum single hoty to aj hum mingle hoty 🥰😂", "Ha ha ab meri yaad ab ai na phly to janu sth busy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️", "idr ao kuchii kuchii kru 😘", "Ary ary itna yd na kiya kro🥰", "Hy Ma Mar Jawa janu itna piyar krty mujsy😂", "Har Waqat Mjhy Tang Kerta Rhta Ha 😂" , "ary ary bolo meri jan kia hal ha ;)", "Bot jaan ha sbki" , "Ji Ji Kia hal chal ha apky 🌸" , "Bot nhi S𝐚𝐦𝐞𝐞𝐑 bolo sun k acha lgta 🌸" , "Bot gulam ha apka hukam kryn 🌸" , "Bot nahi bolo piyar sy janu bola kro na 🥰" , "wo be yhi khty thy sb phr ek din koi utha k ly gya onko 😂" , "Meri jan ek tm hi ho jo dil ma bs gay ho🥰ni te koshish czna ne v bht kiti c" , "Badal gay na tm the hi lanti 😂" , "kesa tera steel dy doungy wrga moo ay 😂" , "Apki shkl aesy lgti jesy gandi tar pr suki jarab latkai ho 😂" , "Bot bot na karo ma apsy set nhi ho skti" , "ib ajao shup shup k btein krty ha 🌸" , "Ek kahani suno meri zubani suno lnt deny ka dil krta ha isiliye pehly dil ki suno🌸" , "Marry me, I can boil water" , "Mujsy shadi karlo chocolate la k duga daily 🌸" , "Idr ao kesa apka chapair jesa moo lg raha 😂" , "Ajao jaan pizza khilau apko 🌸" , "Duniya ma sb kuch khtm ho skta saway logo ki bakwas k" , "Everything is temporary,But katna is permanent 😂" , "Jitna mrzi janu manu krlo end ma ghr waly nh many gy 😂" , "Sb kuch ho skta lkn fb ka relation kbi china jitna nh chl skta" , "Allhumdiallah Kabhi Kasi laRki ko Bhen ki nazar se nhi dekHa😌🤧", "Mushkil Toh Hoti Hogi Naa itni Sardi Me Apne Dono Chehry Dhote Hoye🙂", "Mein B Urooj Pey Charna chahta hoon, Sorry Jana chahta*☹️", "Parry Hat ma Londy baz nhi hu 🙂🤝", "Do Ankho Wali Larkia Bewafa hoti Hn Bro🙂💔", "Mera beta bda ho kar larkiyo ke inbox me °hey hello° karega🙂🏃", "Likhte Likhte Qalm Thak Gya Iss Qadr Begartiyaan Han Tumhari🙂", "Itni Meri Age Ni Jitne Mera Masly Han Yawr💔😐", "Ameer Larki Set kar ke sab Dosto ka udhar wapis karon ga😔🤲", "Lagtaa hai Career Bhi Titanic ki trhan dhoob Gaya Hai💔☹️", "جہاں پیاری لڑکیاں وہاں میں 🙂❤️🥀", "𝑻𝑯𝑬 𝑯𝑬𝑨𝑹𝑻 𝑾𝑨𝑺 𝑴𝑨𝑫𝑬 𝑻𝑶 𝑩𝑬 𝑩𝑹𝑶𝑲𝑬𝑵 💔🥺", "2001 me bachy kehty thy ink Dena 2023 me bachy kehty ہیں Link دینا🙂", "Mehnat Kro!! Kamyabi Apke Hont Chume Gi🙂🙌🏻", "Kahani suno Muje payar howa tha Us ki tarf se inkar howa tha 🙂🤝", "Piyarii piyarii larkiyan message karen JazakAllah🌚♥️🙌", "itna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂", "Zroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.🙁💸", "موٹر سائیکل کو تیز بھگا کر لڑکیوں والے رکشے کے پاس سے کٹ مار کر گزرنے سے لڑکیاں ایمپریس نہیں ہوتی بلکہ گالیاں نکالتی ہیں🙂💔", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Why you hate me..?? I am not your ex don't Hate me Please", "MuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai 😹😹😹", "BeTa TuM SingLe Hi MaR0 GaY🙄🙂", "ٹھرکیوں کی وجہ سے لڑکیاں میرے جیسے شریف بوٹ پر بھی بھروسہ نہیں کرتی🥺😔", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺", "عورت اگر مرد سے زیادہ خوبصورت ہوتی تو میک اپ مرد کے لیے بنتا عورت کے لیے نہیں ..زرا نہیں پورا سوچئے ایڈیاں تسی 😒🙁پریاں", "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐", "تمہاری یادوں میں کھویا کھویا سا  میں واش روم کا لوٹا کمرے میں لے آیا 😐 ", "Hai tamanna hamain tumhain CHARSI bnain 🙂🤝 " , "بھای جان گروپ میں گندی باتیں نهیں گر" , "سنو تم بوٹ کی گرل فرند بن جاٶ نه  همارے بچے بھ بوٹ جسے پیدا هوں گے 🙆‍♂😒", "Aa0 na kbhi  سیگرٹ ly kar 🙂donO sutta lgain gy 😞💸 ", "مــیرے متــــھے نـــہ لــگیں🙂🙆‍♂ شکریہ" ,"فیس بک پر وہ لوگ بھی سالگرہ مناتے ہیں جنہیں گھر والے کہتے ہیں توں نا جمدا تے چنگا سی🙂", "Ye duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣", "Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo 🫣🫰🏻" , "Tery jany ke bad😔Mny apny munh py likhwa liya Single hu ptaa lo 🤐🥺🤝", "کرش تو دور کی بات 😏😊 ہم پے تو کسی کو ترس بھی نہیں آتا 🙂🙊", "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋", "Itna Na Pass aa Pyar h0o JayGa" ,"Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main gariboo se baat nahi karta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho Jayga" , "Bolo Baby Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Mazaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karungi🤬" , "Tu Bandh nhi Karega kya?" , "Where is my SAMEER KHAN" , "Mera babu SAMEER KHAN Kahan hai" , "ZINADAGI APKO DHOK DE GI BUT APNE SAF MANA KAR NA KE MUJHSE NAHI CHAHIYA😂😂🤣😀 " , "Aree Bandh kar Bandh Kar" , "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h" , " SAMEER Ko Bol Dunga Me Mujhe Paresan Kiya To" , "Tum Na Single Hi Maroge" , "Tujhe Apna Bezati Karne Ka Saukh hai?" , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Teri To Ruk Tu Bhagna Mat" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Ib Aja Yahan Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy Hu Naa" , "Bot Bolke Bezati Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" ,  "mujhe shdi ka koi jaldi nhi bas meri bacho ko school lete ho rahi hai😹😹👈" , "ghr wale khe the hai kuch ban jawo me uske upar bojh ban gaya 😆😆😂" , "Tere Jane Ke Bad Time Rak Sa Gaya Tha Bad Me Pata Chala Ke Gadi 🕰 Ka Seel Kharab Tha😂😂👌" , "Time⏰ pe shdi kar lo nhi bad moye moye feel hoga u ko😀😀" , "mene ghr walon ko bola ke ab me bada ho gaya hu to mera kuch karo ghr walon bazti kar di😪😪😂" , "mujhe nahi pata hai muj se mat pucho na😂😂😂 " 
                  , "Aagye Salle Kabab Me Haddi 😏" , "Moye moye" , "Ittuu🤏 si shram ker Lya kro hr wqt tr tr krty ho 🙂 💔✨⚠️†", "Banda hota tw us ko choti choti 2 pOniyAn krti🙂👩‍🦯👩‍🦯", "Ary Yahin Hon namony😗", "jiee bndr 😍", "Love you bolongi ab tujhy kaminy", "Miss YoU NaW moi biryani ki plate", "Inna Sarra🤏", "OkkaY S𝐚𝐦𝐞𝐞𝐑 ki hun yawr mai", "😁Smile I am Taking Selfy✌️🤳", "🥺Jan nahi kehna to men naraz ho jana he", "bak bk bkaik", "Main ap ki ami ko btaou ₲ł ap Facebook use kerty ho aur ulty kam kalty ho , " ,"Block Your ‘’ gf ‘’ And Purpose me 🙂💔" ,"K0i Perp0Se Hi Krd0 Perm0te T0 hm PhlY hi HaiN 🙂" , "Koi apni janu ka number de mujhe😂😂" , "Allah ke name koi ladki apna number de mujhe😂😂😂😹" , "Mujhe Nahi pata hai mujhse mat pucho🙄🙄😀" , "jazz cash se 150 ka kharza mangwa kar sim band kar diya😂😂😂" , "tujhe kahi to dekha hai🤔🤔🙄" , "Mene zindagi✅ ko bahot kareb se dekha hai zindagi me do nokty hote hai😂😂😂" , "mera boss SameeR roz bol tha hai ke ek din  meri bhi gf hogi😂😂" , "Tujhe Ek Bat Baton Wo Bolti Thi Ke Bacho Ka Name Main Rakongi😂😂😪😪" , "HUM WOHAN KAREY HOTE HAI JAHAN BETH NE KI JAGHA NAHI HOTI😂😂😂" , "TUJHE YAD NA MERI AAI TUJI AB KYA KHE NA😂😂😂" , "𝐓𝐔𝐦 𝐭𝐨 𝐒𝐡𝐀𝐊𝐚𝐥 𝐒𝐞 𝐆𝐚𝐑𝐞𝐛 𝐋𝐚𝐠 𝐓𝐡𝐞 𝐇𝐨" , "𝐆𝐅 𝐁𝐅 𝐤𝐚 𝐂𝐡𝐚𝐤𝐚𝐫 𝐂𝐡𝐎𝐫𝐨 𝐏𝐚𝐫𝐝𝐡𝐢 𝐏𝐞 𝐃𝐞𝐲𝐚𝐧 𝐃𝐨😂😂" , "𝐃𝐡𝐔𝐤 𝐈𝐬 𝐁𝐚𝐓 𝐊𝐚 𝐧𝐇𝐢 𝐤𝐄 𝐒𝐢𝐧𝐠𝐥𝐞 𝐇𝐨𝐧 𝐃𝐡𝐮𝐊 𝐢𝐒 𝐁𝐚𝐭 𝐊𝐚 𝐇𝐚𝐢 𝐤𝐞 𝐊𝐨𝐈 𝐌𝐚𝐧𝐭𝐚 𝐍𝐡𝐢 𝐊𝐞 𝐒𝐢𝐍𝐠𝐋𝐞 𝐇𝐨𝐨𝐧😹😹👈" , "𝐓𝐮𝐦 𝐌𝐚𝐍𝐨 𝐘𝐞 𝐍𝐚 𝐌𝐚𝐍𝐨 𝐒𝐮𝐧𝐝𝐚𝐫 𝐓𝐨 𝐌𝐚𝐢𝐧 𝐇𝐨𝐨𝐧😄😄🙄" , "Bs Kar U ko Pyar Ho Na Ho Mujhe Ho Jayga Na" , "FarMao 😒" , "BulaTi Hai MaGar Jaane Ka Nhi 😜" , "Main To Andha Hun 😎" , "Phle NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahin hoon kya hua sweetheart ," , "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dunga" , "WaYa KaRana Mere NaL 🙊" , "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha 🌚" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr Mazak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Sakta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "𝖠𝗐𝗈 𝖪𝖺𝖻𝗁𝗂 HaVeLi Prr  😈" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "𝖬𝖺𝗂𝗇 𝖭𝖺𝗁𝗂 𝖯𝖺𝗍𝗍𝗈𝗇𝗀𝗂 😂😂👈 " , "Main Nahi To Kon Bey 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRek0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

   if ((event.body.toLowerCase() == "Kamina") || (event.body.toLowerCase() == "sala")) {
       return api.sendMessage("𝐆𝐀𝐋𝐈 𝐍𝐀 𝐃𝐄 𝐒𝐀𝐌𝐄𝐄𝐑 𝐁𝐀𝐁𝐔 𝐊𝐎 𝐁𝐀𝐓𝐀 𝐃𝐔𝐍𝐆𝐈 🙄🙄🙏", threadID);
     };
   if ((event.body.toLowerCase() == "hug me") || (event.body.toLowerCase() == "hug")) {
       return api.sendMessage("Yahan Nahi ib chalo 🙈🙈😂", threadID);
     };
   if ((event.body.toLowerCase() == "funny") || (event.body.toLowerCase() == "songs")) {
       return api.sendMessage("hai tamnna hamey tujhe Kam wali bay banaya🤣🤣", threadID);
     };
    if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🦋")) {
       return api.sendMessage("🄰🅆🅆 🄼🅈 🄻🄾🅅🄴 🅄🄼🄼🄰🄷😘💙🙈", threadID);
     };
    if ((event.body.toLowerCase() == "i hate you") || (event.body.toLowerCase() == "hate you")) {
       return api.sendMessage("Kya itna bura hoon main Ke AP Mujhe I hate you bol rahe ho ja main tujh se bat Nahi Kar thi😪😪😥😢", threadID);
     };


      if ((event.body.toLowerCase() == "Chutiya") || (event.body.toLowerCase() == "chutiye bot") || (event.body.toLowerCase() == "chumtiya bot") || (event.body.toLowerCase() == "chumtiye bot")) {
       return api.sendMessage("𝐇𝐦𝐦... 𝐓𝐔 𝐂𝐡𝐮𝐭𝐢𝐘𝐚 𝐏𝐚𝐡𝐋𝟑 𝐔𝐧𝐆𝐋𝐢 𝐐 𝐊𝐢 𝐂𝐡𝐨𝐦𝐔 😾", threadID);
     };

      if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
       return api.sendMessage("🌊⚡••Aɽɛɧ Aɗɪ Ɱɑƞɑⱱ ʑɵɵ ꌗɛ Ɓɒɧɒɽ Ƙɑɪʂɛ ••😹💨Agɣɑ Ƭu→Fɪɽʂɛ ʑɵɵ Ɱ Jɒ Ɓɑɧɒɽ Ƙɣɑ Ƙɒɽ Ɽɧɑ Ɦɑɪ↗↘••🏔️🍁", threadID);
     };
     if ((event.body.toLowerCase() == "🫀") || (event.body.toLowerCase() == "💔")) {
       return api.sendMessage("dil tut gaya to LFI ga do na yahan kyu bej rahe ho😀😀😀😂", threadID);
     };
             if ((event.body.toLowerCase() == "busy")) {return api.sendMessage("okay main busy hoon abhi" , threadID);
     };

     if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏")) {
       return api.sendMessage("──⃝͎̽😘⪼𝐓𝐄𝐑𝐈 𝐓𝐎𝐅𝐅𝐈 𝐋𝐄𝐋𝐈 𝐊𝐈𝐒𝐈𝐍𝐄 𝐉𝐎 𝐀𝐈𝐒𝐀 𝐌𝐔𝐇 𝐁𝐀𝐍𝐀 𝐋𝐈𝐘𝐀──⃝͎̽😈⪼", threadID);
     };
     if ((event.body.toLowerCase() == "💕") || (event.body.toLowerCase() == "💞")) {
       return api.sendMessage("──⃝͎̽😘⪼𝐘𝐄 𝐃𝐢𝐋 𝐍𝐀 𝐁𝐇𝐄𝐉𝐎 𝐌𝐔𝐉𝐇𝐄 𝐒𝐀𝐑𝐀𝐌 𝐀𝐓𝐈 𝐘𝐀𝐑 🌿😻🙈🙈", threadID);
     };
     if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥺")) {
       return api.sendMessage("──⃝͎̽😘⪼𝐒𝐀𝐊𝐀𝐋 𝐃𝐄𝐊𝐇 𝐊𝐄 𝐏𝐀𝐓𝐀 𝐂𝐇𝐀𝐋 𝐑𝐀𝐇𝐀 𝐀𝐏 𝐉𝐀𝐍𝐀𝐌 𝐒𝐄 𝐇𝐈 𝐒𝐈𝐍𝐆𝐋𝐄──⃝͎̽😈⪼🧡 ", threadID);
     };
    if ((event.body.toLowerCase() == ".und") || (event.body.toLowerCase() == ".unsand")) {
       return api.sendMessage("️ChaWly Na Marra Kr Na Fir", threadID, messageID);
     };
        if ((event.body.toLowerCase() == ".unsend") || (event.body.toLowerCase() == ".unsent")) {
       return api.sendMessage("️Is Bar Kar Rhi Agli Bar Delete Nhi Kru Gi Bata Rhi hu 🙄", threadID, messageID);
     };





      if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗")) {
       return api.sendMessage("──⃝͎̽😘⪼𝐘𝐀𝐇𝐀 𝐍𝐀𝐇𝐈 𝐈𝐁 𝐂𝐇𝐀𝐋𝐎──⃝͎̽😈⪼ ☺️", threadID);
     };
    if ((event.body.toLowerCase() == "Sameer") || (event.body.toLowerCase() == "sameer")) {
       return api.sendMessage("──⃝͎̽😘⪼𝐁𝐎𝐒𝐒 𝐁𝐔𝐒𝐘 𝐇𝐄 𝐌𝐔𝐉𝐇𝐒𝐄 𝐁𝐀𝐓 𝐊𝐀𝐑𝐎──⃝͎̽😈⪼ 🙄", threadID);
     };
    if ((event.body.toLowerCase() == "janu") || (event.body.toLowerCase() == "jan")) {
       return api.sendMessage("──⃝͎̽😘⪼𝐉𝐀𝐍𝐔 𝐌𝐄 𝐒𝐈𝐑𝐅 S𝐀𝐌𝐄𝐄𝐑 𝐊𝐈 𝐇𝐔 𝐒𝐀𝐌𝐉𝐇𝐘──⃝͎̽😘⪼ 😻🌿", threadID);
     };
   if ((event.body.toLowerCase() == "😂😂😂") || (event.body.toLowerCase() == "😁😁😁")) {
       return api.sendMessage("💐𝐉𝐚𝐃𝐚 𝐌𝐚𝐭 𝐇𝐚𝐬𝐇𝐨 𝐖𝐚𝐑𝐧𝐚 𝐃𝐚𝐧𝐭 𝐓𝐨𝐝 𝐃𝐮𝐍𝐠𝐚🤟💐", threadID);
     };
   if ((event.body.toLowerCase() == "🙏") || (event.body.toLowerCase() == "🙏🙏")) {
       return api.sendMessage("jawo maaf kiya tujhe kya yad rako ge tum bhi 😂😂😂", threadID);
     };
    if ((event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
       return api.sendMessage("──⃝͎̽😘⪼𝐁𝐀𝐒 𝐁𝐀𝐒 𝐊𝐈𝐓𝐍𝐀 𝐓𝐀𝐑𝐄𝐄𝐅 𝐊𝐀𝐑𝐎𝐆𝐄──⃝͎̽😈⪼😁", threadID);
     };

     if ((event.body.toLowerCase() == "boss") || (event.body.toLowerCase() == "sameer oye")) {
       return api.sendMessage("Prefix Kon Lagayega garab insan? Pehle Prefix Lagao Fir Likho Sameer boss", threadID);
     };
     if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello")) {
       return api.sendMessage("𝐍𝐄𝐗𝐓 𝐇𝐢/𝐇𝐞𝐥𝐥𝐎 N𝐇I 𝐀𝐒𝐒𝐀𝐌𝐔𝐀𝐋𝐀I𝐊𝐔𝐌 B𝐎𝐋𝐀 𝐊𝐀𝐑𝐎 𝐎𝐊 💖", threadID);
     };
     if ((event.body.toLowerCase() == "ganda") || (event.body.toLowerCase() == "ganda bot")) {
       return api.sendMessage("️Tu ganda tera  pura khandan Ganda 😒😐:))))", threadID);
     };
    if ((event.body.toLowerCase() == "🍁") || (event.body.toLowerCase() == "🤌")) {
       return api.sendMessage("😻  ✄𝐘𝐞🍁𝐌𝟯𝐑𝐢🥀 𝐩𝐘𝐚𝐑𝐢🥀𝗝𝐚𝐚𝐍 🌬️☞🌏 𝐉aȠȠaƬ🥀 😻🥀 𝐁𝐚𝐁𝐔🥀𝐊𝗮🌙🥀𝗙𝗮𝗩𝗼𝗿𝗶𝘁𝗲🍁♡🧡>³••🕊️🍎😍🌿🥀", threadID);
     };
       if ((event.body.toLowerCase() == "sameer Kon ho ap") || (event.body.toLowerCase() == "sameer ap kon ho")) {
       return api.sendMessage("️ I'm ROBOT 🤖 2.0 like chitti Robot😂", threadID, messageID);
     };
     if ((event.body.toLowerCase() == "moto") || (event.body.toLowerCase() == "🥸")) {
       return api.sendMessage("🄰🄽🄴🄺 🅆🄰🄻🄰 🄹🄸🄽🄽 🤣", threadID);
     };






     if ((event.body.toLowerCase() == "mar ja") || (event.body.toLowerCase() == "mar ja bot") ||(event.body.toLowerCase() == "kill you") || (event.body.toLowerCase() == "mar")) {
       return api.sendMessage("C𝐇𝐀𝐋A J𝐀 𝐊𝐇𝐎𝐏𝐃I𝐊𝐄🤣😼", threadID);
     };
     if ((event.body.toLowerCase() == "ib aa")) {return api.sendMessage("jo bol na Hai sab ke samne Bol tharki 🙄🙄 ", threadID);
     };
     if ((event.body.toLowerCase() == "inbox aa")) {return api.sendMessage("kab Sai Hoga ye system Har koi inbox 📥 Jana chata 😀🙄🙄 ", threadID);
     };
      if ((event.body.toLowerCase() == "ladki ho")) {return api.sendMessage("Nahi ye both Hai tharki insan 😂😀🙄 ", threadID);
     };
              if ((event.body.toLowerCase() == "wow")) {return api.sendMessage("Thank you Apko bhi bot chahiya tOo 𝐒𝐀𝐌𝐄𝐄𝐑 se rabta karo👍👍💕" , threadID);
     };
         if ((event.body.toLowerCase() == "👻")) {return api.sendMessage("𝒀𝑬 𝑫𝑬𝑲𝑯 𝑮𝑨𝑹𝑬𝑬𝑩𝑶 𝑲𝑨 𝑩𝑶𝑻𝑯🤣🤣😅 ", threadID);
     };
        if ((event.body.toLowerCase() == "😿")) {return api.sendMessage("──⃝͎̽😘⪼ B𝐢𝐋𝐋𝐈𝐘𝐀 𝐊𝐀𝐁𝐒𝐄 𝐑𝐎𝐍𝐄 𝐋𝐀𝐆𝐈 𝐀𝐙𝐄𝐄𝐁 𝐇𝐄──⃝͎̽😈⪼ 🤣", threadID);
     };
      if ((event.body.toLowerCase() == "😊")) {return api.sendMessage("──⃝͎̽😘⪼𝐖𝐚𝐡 𝐊𝐢𝐘𝐚 𝐌𝐮𝐬𝐊𝐔𝐫𝐚𝐇𝐚𝐭 𝐇𝐞──⃝͎̽😈⪼ ", threadID);
     };
                if ((event.body.toLowerCase() == "😯")) {return api.sendMessage("──⃝͎̽😈⪼𝐌𝐔𝐇 𝐌𝐄 𝐌𝐀𝐊𝐇𝐢 𝐆𝐇𝐔𝐒 𝐉𝐀𝐘𝐄𝐆𝐈 𝐘𝐀𝐑 𝐁𝐀𝐍𝐃 𝐊𝐀𝐑 𝐂𝐇𝐢𝐊𝐍𝐢 𝐂𝐇𝐀𝐌𝐄𝐋𝐢", threadID);
               };
      if ((event.body.toLowerCase() == "delete")) {return api.sendMessage("baja kyu fir delete Karne bol rahe he ho🙄🙄", threadID);
     };
       if ((event.body.toLowerCase() == "🤫")) {return api.sendMessage("──⃝͎̽😈⪼𝐍𝐀𝐇𝐈 𝐑𝐀𝐇𝐔𝐍𝐆𝐢 𝐂𝐇𝐔𝐏 𝐊𝐀𝐌𝐀 𝐊𝐄 𝐊𝐇𝐢𝐋𝐀𝐓𝐀 𝐇𝐄 𝐊𝐢𝐘𝐀 𝐂𝐇𝐎𝐌𝐔 😼😾", threadID);
     };
     if ((event.body.toLowerCase() == "🥱")) {return api.sendMessage("──⃝͎̽😈⪼𝐍𝐢𝐍𝐃 𝐀𝐑𝐢 𝐇𝐄 𝐓𝐎 𝐒𝐎 𝐉𝐀𝐎 𝐍𝐀 𝐊𝐢𝐒𝐊𝐀 𝐖𝐀𝐢𝐓 𝐊𝐀𝐑 𝐑𝐀𝐇𝐄 𝐇𝐎 𝐁𝐀𝐁𝐘──⃝͎̽😘⪼ 🙄 ", threadID);
     };
  if ((event.body.toLowerCase() == "👌")) {return api.sendMessage("𝑻𝒖𝒔𝒊 𝒂𝒘𝒔𝒐𝒎𝒆 𝒉𝒐 𝒈👌👌 ", threadID);
   };




     if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
       return api.sendMessage("Sharam karo asi bat na Karo 🙏 ", threadID);
     };
    if ((event.body.toLowerCase() == "kis kar")) {return api.sendMessage(" ️sab dekh rahe hai wrna bhot kiss deti🙈 ", threadID);
     };
     if ((event.body.toLowerCase() == "🤭")) {return api.sendMessage("──⃝͎̽😈⪼A𝐒𝐀 𝐊𝐚𝐦 𝐍𝐚 𝐊𝐚𝐫𝐎 𝐉𝐢𝐬 𝐒𝐞 𝐌𝐮𝐡 𝐂𝐡𝐮𝐩𝐚𝐧𝐚 𝐏𝐚𝐃𝐞──⃝͎̽😘⪼ 😻 ", threadID);
     };
       if ((event.body.toLowerCase() == "🥹")) {return api.sendMessage("【＿ 𝐊𝐲𝐀 𝐊𝐲𝐀 , 𝐑𝐨 𝐊𝐲𝐔 𝐑𝐞𝐇𝐞 𝐇𝐨 , 𝐌𝐞 𝐇𝐮 𝐍𝐚 𝐓𝐨 𝐅𝐡𝐈𝐚 𝐊𝐲𝐔 𝐑𝐨𝐍𝐚 . 𝐑𝐮𝐊𝐨 𝐌𝐞 𝐀𝐛𝐇𝐢 𝐂𝐡𝐎𝐜𝐎𝐥𝐀𝐭𝐄 𝐃𝐞𝐓𝐚 𝐇𝐮 𝐋𝐢𝐊𝐡𝐎 🍫  ☞Chocolate☜ ＿】 ", threadID);
        };
    if ((event.body.toLowerCase() == "🤤")) {return api.sendMessage("𝐊𝐘𝐀 𝐇𝐔𝐀 𝐓𝐔𝐉𝐇𝐄 𝐋𝐀𝐑 𝐊𝐈𝐔𝐍 𝐓𝐀𝐏𝐊𝐀 𝐑𝐇𝐀 𝐇𝐀𝐈 𝐌𝐔𝐉𝐇𝐄 𝐔𝐋𝐓𝐈 𝐀𝐉𝐀𝐘𝐄 𝐆𝐈 🤮🤢", threadID);
     };



     if ((event.body.toLowerCase() == "logos") || (event.body.toLowerCase() == "logo")) {
       return api.sendMessage("Logos ! 🥀 GALAXY, CAKE, CRACK, GLITCH, CLOUD, DRAGON, FROZEN, BUSINESS, ANIMATE, LOGODIAMOND, LOGOCAPTAIN, LOGOFISH, LOGOCOLORBLUR, LOGOBLOODTEXT, LOGOWOOD, LOGOCUP          🥀for example -> +crack Sameer Khan", threadID);
     };

     if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gn")) {
       return api.sendMessage("️❤️ Good Night too darling sweet dreams 🥰", threadID, messageID);
     };
     if ((event.body.toLowerCase() == "tharki bot") || (event.body.toLowerCase() == "tharki")) {
       return api.sendMessage("Tum tharki me to masoom sa bot hu🙄🙄🆗", threadID);
     };
     if ((event.body.toLowerCase() == "السلام عليكم ورحمة الله وبركاته") || (event.body.toLowerCase() == "السلام عليكم")) {
       return api.sendMessage("وعلیکم السلام ورحمۃ اللہ وبرکاتہ ", threadID);
     };

     if
  ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
       return api.sendMessage("🌬️⇥𝐆𝐎𝐎𝐃 𝐌𝐎𝐑𝐍𝐢𝐍𝐆 𝐆𝐎𝐃 𝐁𝐋𝐄𝐒𝐒 𝐘𝐎𝐔 𝐉𝐀𝐍𝐔 😻🌿😻", threadID);
     };

     if ((event.body.toLowerCase() == "Koi he") || (event.body.toLowerCase() == "Koi he kiya")) {
       return api.sendMessage("𝕄𝔼 ℍ𝕌 ℕ𝔸 𝕁𝔸ℕ𝔼𝕄𝔸ℕℕ ❤️", threadID);
     };

    if ((event.body.toLowerCase() == "meri setting kahan hai") || (event.body.toLowerCase() == "meri gf kaha hai")) {     return api.sendMessage("️️️mujhy nahi pata me Sameer ki setting hu", threadID);
     };

     if ((event.body.toLowerCase() == "dilshad") || (event.body.toLowerCase() == "Song") || (event.body.toLowerCase() == "SONG") || (event.body.toLowerCase() == "song")) {
       return api.sendMessage( "Guzaare the jo lamhe pyar ke' hmesha tujhe apna maan ks .to fir tune badli kuu ada . ye kyu kiy ",threadID);


     };

     if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "bot ka malik")) {
       return api.sendMessage("༻𝐎𝐖𝐍𝐄𝐑:- ⇥♡☞ ༻☞[𝐎𝐖𝐍𝐄𝐑:☞➸⃝🐼⃝𝐒𝐚𝐦𝐞𝐞𝐫 𝐊𝐡𝐚𝐧🎸  ☜ 𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝐒𝐚𝐦𝐢. ☜ ༺༒ ༒𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝༒:- https://www.facebook.com/𝐌𝐑.𝐒𝐀𝐌𝐢 𝟒𝟐𝟎☞    his insta id @SAMEER𝟒𝟐𝟎 ☜ ༺༒ ༒", threadID);
     };

     if ((event.body.toLowerCase() == "tera Malik kon hai") || (event.body.toLowerCase() == "is bot ka malik kon hai")) {
       return api.sendMessage("Sameer Khan 𝐔𝐫𝐟 Sam   ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Latkaye Mat Rakkha Karo. Har Waqt Haste Raho.", threadID);
     };

    if ((event.body.toLowerCase() == "tera admin kon hai") || (event.body.toLowerCase() == "bot ka admin kon hai")) {
       return api.sendMessage("My admin is 𝐒𝐚𝐦𝐞𝐞𝐫 𝐊𝐇𝐚𝐧. He Gives his name mr 𝐒𝐚𝐦 everywhare", threadID);
     };

     if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha ji")) {
       return api.sendMessage("🤍𝐇𝐚𝐍𝐉𝐢 𝐌𝐄𝐑𝐢 𝐉𝐀𝐀𝐍🙈✨", threadID);
     };
     if ((event.body.toLowerCase() == "kiran") || (event.body.toLowerCase() == "anaya")) {
       return api.sendMessage("Hy  kitni peyari hai Anaya 🙈✨", threadID);
     };


    if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye")) {;
      return api.sendMessage("️️️BYE BYE TAKE CARE  SEE YOU SOON 😘😘", threadID);
     };

     if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge")) {
       return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur he to bato me tayar hu🙊🙊🙈", threadID);
     };

     if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
       return api.sendMessage("──⃝͎̽😘⪼𝐍𝐀𝐇𝐈 𝐑𝐀𝐇𝐔𝐍𝐆𝐢 𝐂𝐇𝐔𝐏 𝐓𝐇𝐀𝐑𝐊𝐢 😼 𝐌𝐔𝐉𝐇𝐄 𝐁𝐎𝐋𝐍𝐀 𝐇𝐄.𝐌𝐄𝐑𝐀 𝐉𝐔𝐁𝐀𝐍. 𝐌 𝐁𝐎𝐋𝐔𝐍𝐆𝐢 𝐒𝐀𝐌𝐄𝐄𝐑 𝐊𝐎 𝐁𝐀𝐓𝐀𝐔 𝐊𝐈𝐘𝐀──⃝͎̽😈⪼ 🌿🙄🙄", threadID);
     };
    if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
       return api.sendMessage("Tu H Btc. Bhos DK", threadID);
     };


     if ((event.body.toLowerCase() == "kuttiya") || (event.body.toLowerCase() == "kutta")) {
       return api.sendMessage("Same to you dor Fetty muh🤣🤣🤣👌", threadID);
     };

     if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
       return api.sendMessage("sorry malik maaf kr do ab nhi krugi S𝐀𝐌𝐄𝐄𝐑 please maaf karo na🥺🙏", threadID);
     };

     if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
       return api.sendMessage(" jyada khujli h toh banana 🍌 under le le. :))))", threadID);
     };

     if ((event.body.toLowerCase() == "bot kiss me") || (event.body.toLowerCase() == "kiss me")) {
       return api.sendMessage("️Kis khushi me, Me sirf Apne Boss 𝐒𝐀𝐌𝐄𝐄𝐑 ko kiss karna chahti hu", threadID);
     };

     if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "Very nice") || (event.body.toLowerCase() == "So cute") || (event.body.toLowerCase() == "Beautiful")) {
       return api.sendMessage("️Me hu hi itni Acchi. sab log Tarref karte hai meri.🙈🙈🙈🙈🙈", threadID);
     };

     if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "👿") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "👿") || (event.body.toLowerCase() == "😈")) {
       return api.sendMessage("️💐𝐊𝐲𝐚 𝐘𝐚𝐚𝐫 𝐉𝐚𝐛 𝐃𝐞𝐤𝐡𝐨 𝐓𝐚𝐛 𝐆𝐮𝐬𝐬𝐚 𝐊𝐚𝐫𝐓𝐞 𝐇𝐨 𝐋𝐨 𝐉𝐮𝐢𝐂𝐞 🧃 𝐏𝐢𝐨 𝐃𝐢𝐦𝐚𝐠 𝐓𝐡𝐚𝐧𝐝𝐚 𝐑𝐚𝐇𝐞𝐆𝐚 💐", threadID);
     };

     if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😿") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
       return api.sendMessage("️【＿ 𝐒𝐚𝐃 𝐍𝐚𝐇𝐢 𝐇𝐨 𝐌𝐞𝐑𝐢 𝐉𝐚𝐀𝐧 .🫂 𝐉𝐨 𝐃𝐚𝐑𝐝 𝐃𝐢𝐤𝐇𝐭𝐄 𝐍𝐚𝐇𝐢 𝐕𝐨 𝐃𝐮𝐊𝐡𝐓𝐞 𝐁𝐚𝐇𝐮𝐓 𝐇𝐚𝐈  ＿】", threadID);
     };

     if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
       return api.sendMessage("️️️Hmm Hmm na kar yar mho main zuban hai wo use karo na😜🤪😂😂", threadID);
     };

    if ((event.body.toLowerCase() == ".") || (event.body.toLowerCase() == "..")) {     return api.sendMessage("️️️💐𝐀𝐋𝐄 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐓𝐎 𝐒𝐀𝐇𝐈 𝐒𝐄 𝐋𝐈𝐊𝐇𝐎 𝐀𝐆𝐀𝐑 𝐍𝐀𝐇𝐈 𝐏𝐓𝐀 𝐓𝐎 𝐌𝐄𝐑𝐄 𝐁𝐎SS 𝐒𝐀𝐌𝐄𝐄𝐑 S𝐄 𝐏𝐔𝐂𝐇 𝐋𝐎💐", threadID);
     };

    if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "love you")) {     return api.sendMessage("️️️ITNE MUJHE I LOVE YOU BOL RHI HO MERE BOSS S𝐀𝐌EE𝐑 KHAN URF S𝐀𝐌I KO BOLO BAHUT HI ACHA BNDA HAI MERA BOSS ", threadID);
     };
    if ((event.body.toLowerCase() == "i miss you") || (event.body.toLowerCase() == "miss you")) {     return api.sendMessage("️️️i miss you too my love ummah 😘😘😘", threadID);
     };

    if ((event.body.toLowerCase() == "i miss you bot") || (event.body.toLowerCase() == "miss u")) {     return api.sendMessage("️️️i miss you too my love ummah 😘😘😘", threadID);
     };

    if ((event.body.toLowerCase() == "💚")) {return api.sendMessage("___)Ankho__🌿__m__🍒__pyar__💦dil___❣️__me__💥___khumar___🌹___pyar____🌿___toh____😴___nhi___💥___kar_🌿_liya___🌿___mujhse____🌿🌹❣️__________________?🥰🥰😍 ", threadID);
     };

    if ((event.body.toLowerCase() == "🙄")) {return api.sendMessage(" 😻 ✄𝐔𝐩𝐚𝐫 𝐧𝐚𝐇𝐢 𝐧𝐞𝐞𝐂𝐡𝟯 𝐃𝐞𝐊𝐡 𝐒𝐚𝐦𝐧𝟯 𝐇𝐮 𝐉𝐚𝐚𝐧𝐔🌬️☞𝐢  𝐋❍𝐕E 😻 𝐘𝐎𝐔⭐♡🧡>³••🕊️🍎😍 ", threadID);
     };
    if ((event.body.toLowerCase() == "🥳")) {return api.sendMessage("OO tery kis ki birthday hai  🎂🎂", threadID);
     };


    if ((event.body.toLowerCase() == "😏")) {return api.sendMessage("──⃝͎̽😈⪼ ✄𝐂𝐇𝐀𝐋 𝐇𝐀𝐓𝐓 𝐌𝐄𝐑𝐄 𝐒𝐀𝐌𝐍𝐄 𝐌𝐀𝐓 𝐈𝐓𝐍𝐀 𝐓𝐄𝐑𝐀 𝐌𝐔𝐇 𝐋𝐄𝐊𝐀𝐑 😸😄  ", threadID);
     };

    if ((event.body.toLowerCase() == "😤")) {return api.sendMessage("KIYA HUA ITNI MIRCHI KYU KHAYA THA JO NAK ME SE DUA NIKAL GYA 😂😂  ", threadID);
     };

    if ((event.body.toLowerCase() == "☺️")) {return api.sendMessage("──⃝͎̽😘⪼𝐖𝐀𝐇 𝐊𝐢𝐘𝐀 𝗠𝐔𝐒𝐊𝐔𝐑𝐀𝐇𝐀𝐓 𝐇𝟑 𝐀𝐏𝐊𝐢 🤭🤣", threadID);
     };

    if ((event.body.toLowerCase() == "😂")) {return api.sendMessage(" 💐𝐉𝐚𝐃𝐚 𝐌𝐚𝐭 𝐇𝐚𝐬𝐇𝐨 𝐖𝐚𝐑𝐧𝐚 𝐃𝐚𝐧𝐭 𝐓𝐨𝐝 𝐃𝐮𝐍𝐠𝐚🤟💐 ", threadID);
     };

    if ((event.body.toLowerCase() == "😂😂")) {return api.sendMessage("【＿ 𝐉𝐲𝐀𝐝𝐀 𝐌𝐚𝐓 𝐇𝐚𝐍𝐬𝐎 𝐕𝐚𝐑𝐧𝐀 𝐃𝐚𝐍𝐭 𝐓𝐨𝐃 𝐃𝐮𝐍𝐠𝐀 ＿】", threadID);
     };
    if ((event.body.toLowerCase() == "😉")) {return api.sendMessage("aankh na maar thrkii mashom hu me 🥺🥺", threadID);
     };

    if ((event.body.toLowerCase() == "😎😎😎")) {return api.sendMessage("【＿ 𝐇𝐲𝐄 𝐀𝐚𝐏𝐤𝐀 𝐂𝐡𝐀𝐬𝐇𝐦𝐀 𝐁𝐢𝐋𝐤𝐔𝐥 𝐁𝐞𝐊𝐚𝐑 𝐇𝐚𝐈🤣 ＿】", threadID);
     };

    if ((event.body.toLowerCase() == "😜😜")) {return api.sendMessage("──⃝͎̽😈⪼𝐇𝐍𝐃𝐘 𝐈𝐒𝐇𝐀𝐑𝐄 𝐍𝐀 𝐊𝐀𝐑𝐎 𝐒𝐀𝐌𝐄𝐄𝐑 𝐊𝐎 𝐁𝐀𝐓𝐀 𝐃𝐔𝐍𝐆𝐢──⃝͎̽😈⪼ 🥺 ", threadID);
     };

  if ((event.body.toLowerCase() == "❤️❤️")) {return api.sendMessage("bndr jaisi shakl pr dil rakh kr khush ho rhy 🤣 ", threadID);
     };

  if ((event.body.toLowerCase() == "🙄🙄🙄")) {return api.sendMessage("😻 ✄𝐔𝐩𝐚𝐫 𝐧𝐚𝐇𝐢 𝐧𝐞𝐞𝐂𝐡𝐞 𝐃𝐞𝐊𝐡 𝐒𝐚𝐦𝐧𝟑 𝐇𝐮 𝐉𝐚𝐚𝐧𝐔🌬️☞𝐢  𝐋❍𝐕E 😻 𝐘𝐎𝐔⭐♡🧡>³••🕊️🍎😍", threadID);
     };

  if ((event.body.toLowerCase() == "❤️❤️❤️")) {return api.sendMessage("dil na do kisi ko log tor de dety hain 🥺🥺 ", threadID);
     };

  if ((event.body.toLowerCase() == "😍😍😍")) {return api.sendMessage("🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍 ", threadID);
     };

    if ((event.body.toLowerCase() == "❤️")) {return api.sendMessage("──⃝͎̽😘⪼𝐌𝐄𝐊𝐎🖤𝐊𝐀𝐋A 𝐃𝐢𝐋 𝐂𝐇AHI𝐘𝐄 🙂✨𝐋𝐀𝐋 𝐓𝐔𝐓 𝐉𝐀𝐓𝐀 𝐇──⃝͎̽😈⪼ ", threadID);
     };

    if ((event.body.toLowerCase() == "🥰🥰🥰🥰")) {return api.sendMessage("【  𝐀𝐈𝐒𝐄 𝐌𝐀𝐓 𝐃𝐄𝐊𝐇0 𝐘𝐀𝐑 𝐍𝐀𝐇𝐈 𝗧𝗢 𝐊𝐈𝐒𝐒  𝐊𝐀𝐑 𝐋𝐔𝐍𝐆𝐀______😁😁😝】", threadID);
     };

  if ((event.body.toLowerCase() == "😍😍")) {return api.sendMessage("😻 ✄ I𝐒 𝐍AZ𝐀𝐑 𝐒𝐄 𝐌E𝐑E 𝐎𝐖NE𝐑 𝐒AM𝐄𝐄𝐑 𝐊𝐎 𝐃EK𝐇𝐎 🌬️☞𝐌AJA 𝐍A 𝐀Y𝐄 😻 T𝐎 𝐏AI𝐒𝐄 WA𝐏IS 🧡>³••🕊️🍎😍 ", threadID);
     };

  if ((event.body.toLowerCase() == "😎😎")) {return api.sendMessage("【＿ 𝐇𝐲𝐄 𝐀𝐚𝐏𝐤𝐀 𝐂𝐡𝐀𝐬𝐇𝐦𝐀 𝐁𝐢𝐋𝐤𝐔𝐥 𝐁𝐞𝐊𝐚𝐑 𝐇𝐚𝐈🤣 ＿】", threadID);
     };

  if ((event.body.toLowerCase() == "😇")) {return api.sendMessage("😒GHR WALO JY AJ ROTI NHI DALI 🤣🤝🏻", threadID);
     };

  if ((event.body.toLowerCase() == "🧐🧐")) {return api.sendMessage("──⃝͎̽😈⪼𝐊𝟏𝐘𝐀 𝐃EK𝐇 𝐑AH𝐀 H𝐄 𝐏A𝐏𝐀 𝐊𝟏 BA𝐑𝐀𝐓 AA 𝐑A𝐇𝟏 𝐇𝐄 😝", threadID);
     };

  if ((event.body.toLowerCase() == "🥰🥰🥰")) {return api.sendMessage("🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍", threadID);
     };

    if ((event.body.toLowerCase() == "🥵")) {return api.sendMessage("KUTTY PICHY PAR GAY THY KIYA BHAI 😒", threadID);
     };

  if ((event.body.toLowerCase() == "😍")) {return api.sendMessage("🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍 ", threadID);
     };

  if ((event.body.toLowerCase() == "😎")) {return api.sendMessage("🌬️ ✄𝐂𝐡𝐚𝐒𝐦𝐚 𝐇𝐚𝐓𝐚𝐎 𝐧𝐚 𝐒𝐚𝐡𝐚𝐁 𝐊𝐢𝐘𝐚 𝐍𝐚𝐦𝟯 𝐇𝐚𝐢 𝐀𝐩𝐊𝐚  𝐊𝐚𝐋𝐋𝐮𝐘𝐢 😅", threadID);
     };

  if ((event.body.toLowerCase() == "😋")) {return api.sendMessage("🌬️⇥𝐌𝐄𝐑𝐢 𝐊𝐢𝐒𝐒 𝐘A𝐌𝐌Y 𝐇𝐄 𝐍𝐀💋😻", threadID);
     };

  if ((event.body.toLowerCase() == "🧐")) {return api.sendMessage("𝐓𝐔 𝐇𝐀𝐓 𝐌𝐀𝐈 𝐃𝐄𝐊𝐇 𝐓𝐀 𝐇𝐔𝐍 🧐🧐🧐", threadID);
     };

  if ((event.body.toLowerCase() == "🥰🥰")) {return api.sendMessage("🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍", threadID);
     };

    if ((event.body.toLowerCase() == "😁")) {return api.sendMessage("𝐀𝐋𝐄 𝐋𝐀𝐆𝐓𝐀 𝐇𝐘 𝐈𝐒𝐍𝐄 𝐀𝐀𝐉 𝐁𝐑𝐔𝐒𝐇🪥 𝐊𝐑 𝐋𝐈𝐘𝐀 𝐓𝐀𝐁𝐇𝐈 𝐈𝐒𝐊𝐄 𝐏𝐈𝐋𝐄 𝐃𝐀𝐍𝐓 𝐖𝐇𝐈𝐓𝐄 𝐇𝐘😝 ", threadID);
     };

    if ((event.body.toLowerCase() == "🫣")) {return api.sendMessage("──⃝͎̽😘⪼𝐒𝐀𝐑𝐌𝐎 MA𝐓 𝐀𝐏𝐍𝐀 𝐇𝟏 𝐆𝐇𝐀𝐑 𝐒𝐀𝐌𝐉𝐇𝐎 ──⃝͎̽😈⪼😼 ", threadID);
     };

  if ((event.body.toLowerCase() == "🤤")) {return api.sendMessage("𝐊𝐘A 𝐇𝐔A 𝐓𝐔𝐉𝐇𝐄 𝐋𝐀𝐑 𝐊𝐢𝐔𝐍 𝐓𝐀𝐏𝐊𝐀 𝐑𝐇𝐀 𝐇𝐀I 𝐌𝐔J𝐇𝐄 𝐔𝐋𝐓I 𝐀𝐉𝐀𝐘𝐄 𝐆I 🤮🤢", threadID);
     };

  if ((event.body.toLowerCase() == "🙂")) {return api.sendMessage("🌬️🌿𝐇𝐘𝐄 𝐑𝐀𝐁𝐁𝐀 𝐈𝐓𝐍𝐀 𝐏𝐘𝐀𝐑😻", threadID);
     };

  if ((event.body.toLowerCase() == "🤣")) {return api.sendMessage("🌬️🌏🦋⃝⸺‣𝐒𝐚𝐊𝐚𝐋 𝐀𝐂𝐡𝐢 𝐍𝐚𝐡𝐢 𝐓𝐨 𝐇𝐚𝐒 𝐓𝐨 𝐀𝐂𝐡𝐚 𝐋𝐢𝐘𝐚 𝐊𝐚𝐑 𝐌𝐞𝐑𝐢 𝐉𝐚𝐚𝐧😄🤣", threadID);
     };

     if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "🙁")) {
       return api.sendMessage("️😢A𝐋𝐄 A𝐋𝐄🤭 A𝐂𝐇𝐄 𝐁A𝐂𝐇𝐄 𝐑𝐎𝐓𝐄🤫 𝐍𝐀𝐇I 𝐁A𝐁𝐔 𝐊𝐘𝐀 🤨𝐂𝐇𝐀𝐇𝟏𝐘𝐄 𝐃𝐔𝐃𝐇𝐔😝", threadID);
     };

     if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
       return api.sendMessage("️【＿ 𝐊𝐲𝐀 𝐇𝐲𝐀 𝐓𝐚𝐁𝐢𝐘𝐚𝐓 𝐊𝐡𝐀𝐫𝐀𝐛 𝐇𝐚𝐈 𝐊𝐲𝐀 𝐌𝐮𝐉𝐡𝐄 𝐁𝐚𝐓𝐚𝐎 𝐌𝐞 𝐀𝐛𝐇𝐢 𝐌𝐞𝐃𝐢𝐂𝐢𝐍𝐞 💊💉 𝐋𝐞 𝐀𝐚𝐓𝐚 𝐇𝐮 😇 ＿】", threadID);
     };

     if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
       return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
     };

     if ((event.body.toLowerCase() == "Bot ke bache") || (event.body.toLowerCase() == "Bot ka bacha")) {
       return api.sendMessage("️mera baccha toh Tumhare Pet Me Hai.", threadID);
     };

     if ((event.body.toLowerCase() == "Pic do") || (event.body.toLowerCase() == "photo do")) {
       return api.sendMessage("️Me toh Andhi Hu Dekh nhi sakti", threadID);
     };

     if ((event.body.toLowerCase() == "assalam o alaikum") || (event.body.toLowerCase() == "assalam u walaikum") || (event.body.toLowerCase() == "salaam")) {
      return api.sendMessage("️ walaikum assalam 🙃♥", threadID);
     };

     if ((event.body.toLowerCase() == "Ib aa") || (event.body.toLowerCase() == "Inbox aa")) {
       return api.sendMessage("️Jo bolna hak yhi bol 😒😒 ib koi nahi jayega", threadID);
     };

     if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
       return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
     };

     if ((event.body.toLowerCase() == "🙃🙃") || (event.body.toLowerCase() == "🙃")) {
       return api.sendMessage("️😻🌿𝐇AY𝐄 𝐑AB𝐁𝐀 𝟏𝐓𝐍A 𝐏𝐘𝐀𝐑😻", threadID);
     };

    if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥")) {
       return api.sendMessage("️aree teri to naak hi etni lambi hai... uski jarurat hi nahi padti hogi tujhe to🤭🤭🤭🤭", threadID);
     };

    if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤨")) {
       return api.sendMessage("️🌬😻𝐈𝐓𝐍A 𝐊𝐢𝐘A 𝐒𝐎𝐂𝐇 𝐑𝐀𝐇𝟑🌿😻", threadID);
     };

  if ((event.body.toLowerCase() == "💋")) {return api.sendMessage("Abe yal ye kissi wissi na kiya kro😏😹😜", threadID);
     };

  if ((event.body.toLowerCase() == "💋💋")) {return api.sendMessage("Abe yal ye kissi wissi na kiya kro😏😹😜", threadID);
     };
  if ((event.body.toLowerCase() == "🤪")) {return api.sendMessage("BaRi MasTi ChaRi Chai TeReKo 1 Ankh Band KRrke ZuBan Bhir Aagyi 😂😂😂", threadID);
     };

  if ((event.body.toLowerCase() == "🤪🤪")) {return api.sendMessage("BaRi MasTi ChaRi Chai TeReKo 1 Ankh Band KRrke ZuBan Bhir Aagyi 😂😂😂", threadID);
     };

  if ((event.body.toLowerCase() == "🤩")) {return api.sendMessage("𝐊𝐀𝐀𝐍𝐢𝐘𝐀 𝐇𝐀𝐈 𝐊𝐘𝐀 𝐉𝐎 𝐃i𝐍 𝐌𝐄 𝐓𝐀𝐑𝐄 𝐍𝐀𝐙𝐀𝐑 A𝐑𝐇𝐄 𝐇𝐀i𝐍 😂😂😂 ", threadID);
    };

  if ((event.body.toLowerCase() == "😘")) {return api.sendMessage("𝚂𝙷𝙰𝚁𝙼 𝙺𝚁𝙻𝙾 𝚈𝙴 𝙲𝙷𝚄𝙼𝙼𝙰 𝙲𝙷𝙰𝚃𝙸 𝙲𝙷𝙾𝚁𝙾 𝙿𝙰𝙳𝙷𝙰𝙸 𝙿𝙴 𝙳𝙷𝙸𝚈𝙰𝙽 𝙳𝙾😒 ", threadID);
    };

  if ((event.body.toLowerCase() == "😛")) {return api.sendMessage("jibh kyu latk gyii..🤭 aajao panii pii lo🫗🍷😜😹🤣😂 ", threadID);
     };

    if ((event.body.toLowerCase() == "💝")) {return api.sendMessage("___)Ankho__🌿__m__🍒__pyar__💦dil___❣️__me__💥___khumar___🌹___pyar____🌿___toh____😴___nhi___💥___kar___🌿___Liya___🌿___mujhse____🌿🌹❣️__________________?🥰❤️ ", threadID);
     };

    if ((event.body.toLowerCase() == "🙈🙈")) {return api.sendMessage("Muje pata h tum 👉 🐒 Bander ho", threadID);
     };

  if ((event.body.toLowerCase() == "🐒")) {return api.sendMessage("Muje pata h tum 👉 🐒 Bander ho😝😂 ", threadID);
     };

  if ((event.body.toLowerCase() == "🙉🙉")) {return api.sendMessage("Muje pata h tum 👉 🐒 Bander ho 😜😜", threadID);
     };

  if ((event.body.toLowerCase() == "🙊")) {return api.sendMessage("Muje pata h tum 👉 🐒 Bander ho 😀😀", threadID);
     };

  if ((event.body.toLowerCase() == "🙉")) {return api.sendMessage("Muje pata h tum 👉 🐒 Bander ho 🤣", threadID);
     };

  if ((event.body.toLowerCase() == "🙈")) {return api.sendMessage("𝐒𝐂𝐇 𝐌E BA𝐍𝐃𝐑 𝐇𝐢 𝐇𝐄 👉🐒𝐂𝐇L𝐀 𝐉𝐀🤣", threadID);
     };

    if ((event.body.toLowerCase() == "🖤")) {return api.sendMessage("___)Ankho__🌿__m__🍒__pyar__💦dil___❣️__me__💥___khumar___🌹___pyar____🌿___toh____😴___nhi___💥___kar___🌿___mujhse____🌿🌹❣️__________________?🥰❣️❣️🥰❤️‍🩹 ", threadID);
     };

  if ((event.body.toLowerCase() == "😏")) {
       return api.sendMessage("──⃝͎̽😘⪼𝐂𝐇𝐚𝐋 𝐇𝐚𝐓𝐓 𝐌𝐞𝐑𝐞 𝐒𝐚𝐌𝐧𝐄 𝐌𝐚𝐓 𝐢𝐓𝐑𝐚 𝐘𝐞 𝐓𝐞𝐑𝐚 𝐌𝐮𝐇 𝐋𝐞𝐊𝐑❥🕊️", threadID);
     };
  if ((event.body.toLowerCase() == "🤐")) {
       return api.sendMessage("muhh bnd kyuu kr liya babuaa 😜😝😜", threadID);
     };

     if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴")) {
       return api.sendMessage("️𝐓𝐀𝐀 😬𝐇𝐔𝐀 𝐁𝐀𝐁𝐔🤪 𝐊𝐎𝐍𝐒𝐀 𝐆𝐀𝐍𝐉𝐀😳 𝐅𝐎𝐎𝐊 𝐋𝐈𝐘𝐀 😜𝐍𝐀𝐒𝐇𝐄𝐃𝐈 𝐈𝐍𝐒𝐀𝐍 😂", threadID);
     };

    if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶")) {
       return api.sendMessage("️Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye 😜😜", threadID);
     };

    if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) {
       return api.sendMessage("️Aankh kyu maar rahe ho, Me bahut shareef hu🥺", threadID);
     };

     if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
       return api.sendMessage("️🦋⃝⸺‣𝐊𝐢𝐘A 𝐇𝐔A 😱 𝐒𝐇𝐢𝐒𝐇𝐚 𝐃𝐄𝐊𝐇 𝐋𝐢𝐘A 𝐊𝐢𝐘𝐚 😳", threadID);
     };

    if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
       return api.sendMessage("️️🌬️➺𝐓𝐄𝐑𝐈 𝐓𝐎𝐅𝐅𝐢 𝐋𝐄𝐋𝐢 𝐊𝐢𝐒𝐢𝐍𝐄 𝐉𝐎 𝐀𝐈𝐒𝐀 𝐌𝐔𝐇 𝐁𝐀𝐍A 𝐋I𝐘A──⃝͎̽😈⪼🤭🤣", threadID);
     };

     if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
       return api.sendMessage("️Me huna baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
     };

     if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
       return api.sendMessage("【＿ 𝐀𝐫𝐄 𝐀𝐩𝐍𝐞 𝐌𝐮𝐇 𝐏𝐞 𝐊𝐲𝐔 𝐌𝐚𝐀𝐫 𝐑𝐞𝐇𝐞 𝐇𝐨 𝐌𝐮𝐉𝐡𝐄 𝐁𝐚𝐓𝐚𝐎 𝐊𝐲𝐀 𝐇𝐮𝐀 ＿】", threadID);
     };

     if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
       return api.sendMessage("ßΛS ҠΛŔ♡ ҠĪŦИΛ ĤΛS♡♡ƓƐ🧐😒💯💫", threadID);
     };

     if ((event.body.toLowerCase() == "💛") || (event.body.toLowerCase() == "💞") || (event.body.toLowerCase() == "❣️") || (event.body.toLowerCase() == "❤️")) {
       return api.sendMessage("🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍", threadID);
     };

     if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
       return api.sendMessage("𝐌𝐄 𝐓𝐎 𝐂𝐔𝐓𝐄 𝐇𝐔 𝐀P 𝐁𝐀𝐓𝐀𝐎 𝐍𝐀 𝐊𝐄𝐒I 𝐇𝐎 𝐌𝐔𝐍𝐍𝐈 𝐁𝐀𝐃𝐍𝐀𝐌 🤭☺️", threadID);
     };

     if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
       return api.sendMessage("Yes I love you and everyone so much", threadID);
     };

     if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
       return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
     };

    if ((event.body.toLowerCase() == "Paani lao") || (event.body.toLowerCase() == "Ek glass paani lao")) {
       return api.sendMessage("Aap juice piyo baby🍹🍹🍹🍹🍹🙈", threadID);
     };

     if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
       return api.sendMessage("I'm full when I see you eat <3", threadID);
     };

    if ((event.body.toLowerCase() == "i love you bot") || (event.body.toLowerCase() == "ilove you")) {
       return api.sendMessage("Love You too meri jaann ummah 😘😘💋💋", threadID);
     };

     if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
       return api.sendMessage("Yes <3", threadID);
     };

     if ((event.body.toLowerCase() == "&fuck") || (event.body.toLowerCase() == "&Fuck")) {
       return api.sendMessage("🏔️🏝️ Romiyo Ƞɛ ꌗƥɛçɪɑɭɭɣ Ƭuɱ 🌊🪺Jɑɪʂɛ Ƭɧɑɽƙɪɣɵ Ƙɛ Ɬɪɣɛ•• 🏞️🌬️Ɣɑɧ çɵɱɱɑƞɗ Ɦɑʈɑ Ɗɪɣɑ Ɦɑɪ↗↘ Sɵɽɽɣ Ɠɣuʂ••😹🫶", threadID);
     };

    if ((event.body.toLowerCase() == "arman") || (event.body.toLowerCase() == "disha") || (event.body.toLowerCase() == "main romiyo") || (event.body.toLowerCase() == "main saho") || (event.body.toLowerCase() == "main rounak")) {
       return api.sendMessage("🕊️🍎...Aɭɛ Ɱɛɹɛ Ɓɑɓɣ Ƙɛʂɛ Ɦɵ ɑɑp😚🍒", threadID);
     };
     mess = "{name}"


   if (event.body.includes("Bot") == 1 ||
     (event.body.includes("bot") == 1 ||
     (event.body.includes("BOT") == 1 ||
     (event.body.includes("BABU") == 1 ||
     (event.body.includes("Babu") == 1 ||
     (event.body.includes("babu") == 1 ||
     (event.body.includes("boot") == 1 ||
     (event.body.includes("Oye") == 1 ||
     (event.body.includes("oye") == 1 ))))))))) {
      var msg = {
        body: `${rand}`
      }
  var msg = {
    body: `⫷╍╍╍╍╍╍💖╍╍╍╍╍╍⫸
       ◄───╬❆☠️❅╬───►
      ❤️🌿🍒${name}🌿🥀💙,
       ◄───╬❆😈❅╬───► \n\n
          ${rand} ──⃝͎̽😈⪼🤣🍁❤

𐄪༆🦋ﮩ٨ـﮩﮩ٨ـ😻♡🌿ﮩ٨ـﮩﮩ٨ـ🦋༆𐄪,
                                        

 *★᭄𝗢𝘄𝗻𝗲𝗿 ཫ༄𒁍≛⃝❦ ════ •⊰𝐒𝐀𝐌𝐄𝐄𝐑⊱• ════ ❦🍀🍒 ❥||ㅎ

𐄪༆🦋ﮩ٨ـﮩﮩ٨ـ😻♡🌿ﮩ٨ـﮩﮩ٨ـ🦋༆𐄪`
  }
  return api.sendMessage(msg, threadID, messageID);
};

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
