//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUJ5NGJic0pDNmlvZnJVUEU4djhtZ21WeElpbVd0SEg3bVNxckJhaWIyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlZPV1licTRBc2xFZ01ZQ29vMG9ZU21sbEc0S2psM0tnbjl3MVk4N0dFcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTFRrRjNMdi9BdW5kMVN0VnJtOW1pUVo5Z0pKUVhlcHRMcFZ4ZTZRUzFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGME5OUFpBL04zRjdmSVgyY1pQWmRwMVJ4NGFlaEI2NDRaYTRYcjZyZFM0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFKcUVpNGtvOWFhWGxNRHI1WHdFL29VWi9taG80ODV0YUZoK0huQWJma0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhDckYySkMySzNrYkJDSUhqNjVOUFhyYjdva2ZMQmZLK01Sa2tvY1J1Rnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0ZuZStPdm4zdUkzOUJueW1Hc1RuUUIyUUNzdnR3R0xpSjZUYk1oa0ZIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNit2OVhJcTNBZHQyRVNTODBMYlNYSEpoaTVqVVRCdjltcnpoQWxWNit4Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5EQ2xaWlc2Y3pESzlMeTkvZklFNGY1S1hEMTY5T0UyeXhaUFNRRWt5QmRnYXMyR0d5QTBQQ3IvU0ZJRkJNWlpLTEt0Si81cU9ob3lCdlJrYzVkMmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM4LCJhZHZTZWNyZXRLZXkiOiJ2US9jQnFQRnFwZUZUNEZQekpnNG9GbkRJaG05WUswWis2ZWlPY3drTUdZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRY0NEQjI4VFE0NmluUmp0YS1RTFhRIiwicGhvbmVJZCI6ImYzZjYxOTljLTg3MjItNDkwZS04OGZiLWZhZWYwY2U0YmZjOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMcWZ5S09FSnJJTTNrbDZzY3dDNEVrUFZNS0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVVUTVdVTWNxZE15aGJ1R0Z3Q0pIdDQ0bTZFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdCMUhBWkxEIiwibWUiOnsiaWQiOiIyNDM4NDY4NDI5NTI6NTNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi5Ye48J2as/Cdmqog8J2aqfCdmqvwnZq04oCh44CO8J2QkvCdmrjwnZCY44CP5Ye4In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKeTdoRElRN29iK3VRWVlHU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0Tm1zWjlLZHhaTDF6L2hRMGxHL2NaOW1BeGR2RUpUOW9Kd2YvS2hRclNZPSIsImFjY291bnRTaWduYXR1cmUiOiJULzlTL2haQlBpUXRKckVxQ1V5ZlZoYmtYWVdWK1UrT09tUGZLUHNyU09xK2txNjAzMnlPQVVjV3R0Nmx0OWR1QTd4U2N4eFJFNFVrcDgzeW9nQTREdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL2NtSkZIYlZVd2QrYnFhbGIzSUxVRFdqV0JRK0drL1ltMGdxWk0xRjl0b25qUGtUb3VwMllCVUtSWERFWnY1YnBDVm5MSG1EQlMyUEJGRWlGeXlaaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDM4NDY4NDI5NTI6NTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZURackdmU25jV1M5Yy80VU5KUnYzR2ZaZ01YYnhDVS9hQ2NIL3lvVUswbSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjIxNTY3Nn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "€",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
