/*
   • Base By Putz
   • Recode By Farisofc
   • Jual Sc? Neraka Paling Bawah
   • My Contact https://wa.me/6288297877862
    
   乂 𝗟𝗜𝗦𝗧 𝗛𝗔𝗥𝗚𝗔 𝗣𝗔𝗡𝗘𝗟 乂

   • RAM 1GB CPU 30% 2K/BULAN
   • RAM 2GB CPU 50% 3K/BULAN
   • RAM 3GB CPU 75% 4K/BULAN
   • RAM 4GB CPU 100% 5K/BULAN
   • RAM 5GB CPU 130% 6K/BULAN
   • RAM 6GB CPU 150% 7K/BULAN
   • RAM 7GB CPU 175% 8K/BULAN
   • RAM 8GB CPU 200% 9K/BULAN
   • RAM - CPU UNLIMITED 10K/BULAN

   ✴️– TIDAK DELAY
   ✴️– HEMAT MEMORY
   ✴️– HEMAT STORAGE
   ✴️– WEB CLOSE BOT TETAP BERJALAN
   ✴️– EXPIRED 1 MONTH
   ✴️– GARANSI 20 DAYS
   ✴️– ANTI FEK RAM

   📌「 BUY PANEL BOT 」
    •  https://wa.me/6288297877862
*/

require('./settings')
const { modul } = require('./module')
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, PhoneNumber, process, ms, speed, syntaxerror, util, ytdl, openai } = modul
const { exec, spawn, execSync } = child_process
const { Configuration, OpenAIApi } = openai

const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const moment = require('moment-timezone')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const user = JSON.parse(fs.readFileSync('./database/user.json'))

const testimoni = JSON.parse(fs.readFileSync('./database/testimoni.json'))

module.exports = farisofc = async (farisofc, m, msg, chatUpdate, store) => {
try {
const { type, quotedMsg, mentioned, now, fromMe } = m
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
const messagesC = pes.slice(0).trim()
const content = JSON.stringify(m.message)
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await farisofc.decodeJid(farisofc.user.id)
  const isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const XeonTheDeveloper = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')
const isSticker = (type == 'stickerMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isGroup = from.endsWith('@g.us')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const senderNumber = sender.split('@')[0]
const groupMetadata = m.isGroup ? await farisofc.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = user.includes(sender)
const banUser = await farisofc.fetchBlocklist()
const isBanned = banUser ? banUser.includes(m.sender) : false
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
const isEval = body.startsWith('=>')
const userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
 
const { pipeline } = require('stream')  
const { util, promisify } = require("util");  
const yts = require ("yt-search")
const { clockString, parseMention, 
formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, jsonformat, format, reSize, generateProfilePicture, getRandom, fetchBuffer, } = require('./lib/myfunc')
const { sticker5 } = require('./lib/stickerr.js')
const uploadImage = require('./lib/uploadImage')
//TIME
const fs = require("fs")
const fg = require('api-dylux')
const totalFitur = () =>{
            var mytext = fs.readFileSync("./farisofc.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
let autodlgc = JSON.parse(fs.readFileSync('./database/autodlgc.json'))
        //
const prem = JSON.parse(fs.readFileSync("./premium.json"))
  
let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
let tebaklagu = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkabupaten = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []
//database
const isPremium = prem.includes(sender)
        
let member = JSON.parse(fs.readFileSync("./database/user.json"));
    const cek = (satu, dua) => {
      let farisofc = false;
      Object.keys(member).forEach((i) => {
        if (member[i].id == dua) {
          farisofc = i;
        }
      });
      if (farisofc !== false) {
        if (satu == "id") {
          return member[farisofc].id;
        }
        if (satu == "saldo") {
          return member[farisofc].saldo;
        }
        if (satu == "transaksi") {
          return member[farisofc].transaksi;
        }
        if (satu == "idproduk") {
          return member[farisofc].idproduk;
        }
        if (satu == "idtujuan") {
          return member[farisofc].idtujuan;
        }
        if (satu == "nama") {
          return member[farisofc].nama;
        }
        if (satu == "harga") {
          return member[farisofc].harga;
        }
        if (satu == "seri") {
          return member[farisofc].seri;
        }
      }
      if (farisofc == false) {
        return null;
      }
    };
    
     // AutoDl
if (m.isGroup && !m.key.fromMe && (autodlgc) && !isCmd) {
try {
if (budy.match(`instagram.com`)) {
await farisofc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${budy}`)
farisofc.sendMessage(m.chat, { video: { url: anu.result.media}, caption: `Nih ${pushname}`}, {quoted: m})
await farisofc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`tiktok.com`)) {
await farisofc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${budy}`)
farisofc.sendMessage(m.chat, { video: { url: anu.result.Medium.url}, caption: `Nih ${pushname}`}, {quoted: m})
await farisofc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`facebook.com`)) {
await farisofc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${budy}`)
farisofc.sendMessage(m.chat, { video: { url: anu.result.video_sd}, caption: `Nih ${pushname}`}, {quoted: m})
await farisofc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`youtube.com|youtu.be`)) {
await farisofc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${budy}`)
farisofc.sendMessage(m.chat, { video: { url: anu.result.result}, caption: ``}, {quoted: m})
await farisofc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} 
} catch (err) {
//console.log(err);
await farisofc.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
//reply(JSON.stringify(err));
}
}
    

        
const isAutoDlGc = autodlgc.includes(m.chat) ? true : false
    
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
let _uptime = process.uptime() * 1000
let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let jakartaTime     = moment.tz('Asia/Jakarta').format('HH:mm:ss');
let bantenTime = moment.tz('Asia/Jakarta').clone().tz('Asia/Jakarta').format('HH:mm:ss');
let jayapuraTime = moment.tz('Asia/Jakarta').clone().tz('Asia/Jayapura').format('HH:mm:ss');
let makassarTime = moment.tz('Asia/Jakarta').clone().tz('Asia/Makassar').format('HH:mm:ss');
let malaysiaTime = moment.tz('Asia/Kuala_Lumpur').format('HH:mm:ss');
let japanTime = moment.tz('Asia/Tokyo').format('HH:mm:ss');
let thailandTime = moment.tz('Asia/Bangkok').format('HH:mm:ss');
let koreaTime = moment.tz('Asia/Seoul').format('HH:mm:ss');
let americaTime = moment.tz('Asia/Pago Pago').clone().tz('Asia/Pago Pago').format('HH:mm:ss');
let rusiaTime = moment.tz('Asia/Chita').clone().tz('Asia/Chita').format('HH:mm:ss');      
let arabTime = moment.tz('Asia/Riyadh').clone().tz('Asia/Riyadh').format('HH:mm:ss');      
let mekkahTime = moment.tz('Asia/Mekah').clone().tz('Asia/Mekah').format('HH:mm:ss');      
let year = d.getFullYear();
let month = d.getMonth() + 1;
let day = d.getDate();
let hour = d.getHours();
let minute = d.getMinutes();
let second = d.getSeconds();

let getDayTime = (time) => {
  let hour = moment(time, 'HH:mm:ss').format('HH');
  if (hour >= 6 && hour < 12) return 'Pagi';
  else if (hour >= 12 && hour < 18) return 'Siang';
  else if (hour >= 18 && hour < 24) return 'Malam';
  else return 'Dini hari';
};
//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  

const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wibh = moment.tz('Asia/Jakarta').format('HH')
const wibm = moment.tz('Asia/Jakarta').format('mm')
const wibs = moment.tz('Asia/Jakarta').format('ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    
    if(time2 < "23:59:00"){
var xeonytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 } 
async function loading () {
var load = [
"*《▒▒▒▒▒▒▒▒▒▒▒》5%*",
"*《█▒▒▒▒▒▒▒▒▒▒▒》10%*",
"*《 ████▒▒▒▒▒▒▒▒》30%*",
"*《 ███████▒▒▒▒▒》50%*",
"*《 ████████▒▒▒▒》85%*",
"*《 ████████████》100%*",
"Loading Selesai..."
]
let { key } = await farisofc.sendMessage(from, {text: 'Done...'})//Pengalih isu

for (let i = 0; i < farisofc; i++) {
/*await delay(10)*/
await farisofc.sendMessage(from, {text: farisofc[i], edit: key });//PESAN LEPAS
}
}

const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const isContacts = contacts.includes(sender)

if (!farisofc.public) {
if (!m.key.fromMe) return
}
   
    

  //sticker reply
        const farisstickWait = () => {
        let farisstickrep = fs.readFileSync('./farisMedia/sticker_reply/wait.webp')
        farisofc.sendMessage(from, { sticker: farisstickrep }, { quoted: m })
        }
        const farisstickAdmin = () => {
        let farisstickrep = fs.readFileSync('./farisMedia/sticker_reply/admin.webp')
        farisofc.sendMessage(from, { sticker: farisstickrep }, { quoted: m })
        }
        const farisstictag = () => {
        let farisstickrep = fs.readFileSync('./media/owne.webp')
        farisofc.sendMessage(from, { sticker: farisstickrep }, { quoted: m })
        }
        const farisstickowner = () => {
        let farisstickrep = fs.readFileSync('./farisMedia/sticker_reply/own.webp')
        farisofc.sendMessage(from, { sticker: farisstickrep }, { quoted: m })
        }
        const farisstickerEsce = () => {
        let farisstickrep = fs.readFileSync('./farisMedia/sticker_reply/esce.webp')
        farisofc.sendMessage(from, { sticker: farisstickrep }, { quoted: m })
        }
        const farisstickBotAdmin = () => {
        let farisstickrep = fs.readFileSync('./farisMedia/sticker_reply/botadmin.webp')
        farisofc.sendMessage(from, { sticker: farisstickrep }, { quoted: m })
        }
        const farisstickOwner = () => {
        let farisstickrep = fs.readFileSync('./farisMedia/sticker_reply/owner.webp')
        farisofc.sendMessage(from, { sticker: farisstickrep }, { quoted: m })
        }
        const farisstickGroup = () => {
        let farisstickrep = fs.readFileSync('./farisMedia/sticker_reply/group.webp')
        farisofc.sendMessage(from, { sticker: farisstickrep }, { quoted: m })
        }
        const farisstickPrivate = () => {
        let farisstickrep = fs.readFileSync('./farisMedia/sticker_reply/private.webp')
        farisofc.sendMessage(from, { sticker: farisstickrep }, { quoted: m })
        }
    
    //Fake
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2024,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=${ownernomer}:${ownernomer}\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": thumb,"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

const reply = (teks) => {
farisofc.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : fdoc })
}
if (isCmd && isBanned) {
return
}
    const { exec, spawn, execSync } = require("child_process")

let list = []
for (let i of owner) {
list.push({
displayName: await farisofc.getName(i),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await farisofc.getName(i)}\nFN:${await farisofc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
}   

//chat counter (console log)
if (isCmd && m.isGroup) { 
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); 
}

if (isCmd && !m.isGroup) { 
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); 
}

if (isCmd && !isUser) {
user.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(user, null, 2))
}

farisofc.sendPresenceUpdate('unavailable', from)

  
async function sendfarisofcMessage(chatId, message, options = {}){
let generate = await generateWAMessage(chatId, message, options)
let type2 = getContentType(generate.message)
if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
return await farisofc.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

 
    for (let Testimonii of testimoni){
if (budy === Testimonii){
let imagebuffy = fs.readFileSync(`./database/image/${Testimonii}.jpg`)
farisofc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}

try {
ppuser = await farisofc.profilePictureUrl(sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
    
    if (budy.match("@6288297877862")) {
        farisstictag()
    }
   
       //GAME
        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakgambar[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await farisofc.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete kuismath[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakasahotak[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakasahotak[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await farisofc.sendText(m.chat, `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakasahotak[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksiapakahaku[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await farisofc.sendText(m.chat, `🎮 Siapakah Aku 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksusunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await farisofc.sendText(m.chat, `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakbendera[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await farisofc.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakbendera[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera2[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakbendera2[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await farisofc.sendText(m.chat, `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakbendera2[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await farisofc.sendText(m.chat, `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakkimia[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await farisofc.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkimia[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktekateki[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaktekateki[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await farisofc.sendText(m.chat, `🎮 Teka Teki 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaktekateki[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaklagu[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await farisofc.sendText(m.chat, `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await farisofc.sendText(m.chat, `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakkalimat[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await farisofc.sendText(m.chat, `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaklirik[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await farisofc.sendText(m.chat, `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaktebakan[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await farisofc.sendText(m.chat, `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
    
    const { getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./database/register.js')
    
         const isRegistered = checkRegisteredUser(m.sender)
  const isNumber = x => typeof x === 'number' && !isNaN(x)

        async function ssweb(url, device = "desktop") {
      return new Promise((resolve, reject) => {
        const base = "https://www.screenshotmachine.com";
        const param = {
          url: url,
          device: device,
          cacheLimit: 0,
        };
        axios({
          url: base + "/capture.php",
          method: "POST",
          data: new URLSearchParams(Object.entries(param)),
          headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        })
          .then((data) => {
            const cookies = data.headers["set-cookie"];
            if (data.data.status == "success") {
              axios
                .get(base + "/" + data.data.link, {
                  headers: {
                    cookie: cookies.join(""),
                  },
                  responseType: "arraybuffer",
                })
                .then(({ data }) => {
                  result = {
                    status: 200,
                    result: data,
                  };
                  resolve(result);
                });
            } else {
              reject({
                status: 404,
                statuses: `Link Error`,
                message: data.data,
              });
            }
          })
          .catch(reject);
      });
    }
  
// menu thingy
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

switch (command) {

case'play':{
    var os = require("os")
  const streamPipeline = promisify(pipeline);
  if (!text) return reply(`*Example* : ${prefix}${command} Drunk Text`);
   await farisofc.sendMessage(m.chat, {
          react: {
            text: '⏳',
            key: m.key,
          }})
          await farisofc.sendMessage(m.chat, {
          react: {
            text: '3️⃣',
            key: m.key,
          }})
await farisofc.sendMessage(m.chat, {
          react: {
            text: '2️⃣',
            key: m.key,
          }})
await farisofc.sendMessage(m.chat, {
          react: {
            text: '1️⃣',
            key: m.key,
          }})
          await farisofc.sendMessage(m.chat, {
          react: {
            text: '☑️',
            key: m.key,
          }});
  try {
  let search = await yts(text);
  let vid = search.videos[Math.floor(Math.random() * search.videos.length)];
  if (!search) return reply('Video Not Found, Try Another Title')
  let { title, thumbnail, timestamp, views, ago, url } = vid;
  let wm = '2024 © faris';
  
  const audioStream = ytdl(url, {
    filter: 'audioonly',
    quality: 'highestaudio',
  });

  // Get the path to the system's temporary directory
  const tmpDir = os.tmpdir();

  // Create writable stream in the temporary directory
  const writableStream = fs.createWriteStream(`${tmpDir}/${title}.mp3`);

  // Start the download
  await streamPipeline(audioStream, writableStream);

  let doc = {
    audio: {
      url: `${tmpDir}/${title}.mp3`
    },
    mimetype: 'audio/mp4',
    fileName: `${title}`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: url,
        title: title,
        body: '2024 © faris',
        sourceUrl: url,
        thumbnail: await (await farisofc.getFile(thumbnail)).data
      }
    }
  };

  await farisofc.sendMessage(m.chat, doc, { quoted: m });

  // Delete the audio file
  fs.unlink(`${tmpDir}/${title}.mp3`, (err) => {
    if (err) {
      console.error(`Failed to delete audio file: ${err}`);
    } else {
      console.log(`Deleted audio file: ${tmpDir}/${title}.mp3`);
    }
  });
   } catch (e) {
    console.log(e);
    m.reply(`Failed :(`);
  }
};
        break
    
        case 'menu':{
         await loading()
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys").version
const text12 = `*Hi @${sender.split("@")[0]} ${xeonytimewisher}👋*
╒─────⩽ *I N F O* ⩾
│❏ *ᴄʀᴇᴀᴛᴏʀ* : ${namaowner}
│❏ *ʙᴏᴛ* : ${namabot}
│❏ *ᴛʏᴘᴇ* : ᴄᴀꜱᴇ 
╠─────⩽ *U S E R* ⩾
│❏ *ɴᴀᴍᴇ* : ${pushname}
│❏ *ꜱᴛᴀᴛᴜꜱ* : ${isOwner ? 'owner' : 'user'}
│❏ *ᴘʀᴇᴍɪᴜᴍ* : ${isPremium ? '✅' : `❌`}
╠─────⩽ *D A T E* ⩾
│❏ *ᴛɪᴍᴇ* : ${wib}
│❏ *ᴅᴀᴛᴇ* : ${date}
Thun Hijriah : ${dateIslamic}
│❏ *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
╘───────────────┈ ⳹

ɴ ᴏ ᴛ ᴇ :
ʜɪ sɪs, ʙᴇғᴏʀᴇ ɢᴏɪɴɢ ᴛᴏ ᴛʜᴇ ғᴇᴀᴛᴜʀᴇs ᴍᴇɴᴜ, ᴘʟᴇᴀsᴇ ʀᴇᴀᴅ ᴛʜᴇ ʀᴜʟᴇs ғᴏʀ ᴜsɪɴɢ ᴛʜᴇ ʙᴏᴛ 

𝟷. sᴘᴀᴍ ʙᴏᴛs ᴀʀᴇ ᴘʀᴏʜɪʙɪᴛᴇᴅ
𝟸. ᴄᴀʟʟɪɴɢ ʙᴏᴛs ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ
𝟹. ᴄᴀʟʟɪɴɢ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ
𝟺. sᴘᴀᴍ ᴛᴏ ɴᴏ ᴏᴡɴᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ
 . ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ッ

╔───⩽ *MENU* ⩾
│◦ ${prefix}Ownermenu
│ ◦ ${prefix}Groupmenu
│ ◦ ${prefix}Mainpublic
│ ◦ ${prefix}Menuopenai
│ ◦ ${prefix}Othermenu
│ ◦ ${prefix}Menupushkontak
│ ◦ ${prefix}Menujb
│ ◦ ${prefix}Menucmd
│ ◦ ${prefix}Menudownload
│ ◦ ${prefix}Mainmenu
│ ◦ ${prefix}Menusearch
│ ◦ ${prefix}Menuislami
│ ◦ ${prefix}Menuquotes
│ ◦ ${prefix}Menugame
│ ◦ ${prefix}Menureseller
│ ◦ ${prefix}Menustore
╘࿐ 
ᬊ────────────────┈࿐ 
.credits
[ Powered By *@${owned.split("@")[0]}* ]
`
await farisofc.sendMessage(m.chat, {
          react: {
            text: '⏳',
            key: m.key,
          }})
          await farisofc.sendMessage(m.chat, {
          react: {
            text: '3️⃣',
            key: m.key,
          }})
await farisofc.sendMessage(m.chat, {
          react: {
            text: '2️⃣',
            key: m.key,
          }})
await farisofc.sendMessage(m.chat, {
          react: {
            text: '1️⃣',
            key: m.key,
          }})
          await farisofc.sendMessage(m.chat, {
          react: {
            text: '☑️',
            key: m.key,
          }});
farisofc.sendMessage(m.chat, {
      video: fs.readFileSync('./menu.mp4'),
      gifPlayback: true,
    
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/56e6a48866e14bbde57ba.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: ftroli
                    })
                    } freya = fs.readFileSync('./audio.mp3')
farisofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:ftroli})
break
case 'mode':
                if (!isOwner) return farisstickOwner()
                if (args.length < 1) return reply(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    farisofc.public = true
                    reply(mess.done)
                } else if (q == 'self') {
                    farisofc.public = false
                    reply(mess.done)
                }
            break
        case 'randomanime':{
            const dir = [
'https://telegra.ph/file/0d4fb93951c620aacb229.mp4',
'https://g.top4top.io/m_2391c90iu1.mp4',
'https://h.top4top.io/m_2391mfvy22.mp4',
'https://i.top4top.io/m_2391iwmee3.mp4',
'https://j.top4top.io/m_23915x5204.mp4',
'https://l.top4top.io/m_2391e795x5.mp4',
'https://a.top4top.io/m_2391jcee66.mp4',
'https://b.top4top.io/m_2391ho0bz7.mp4',
'https://c.top4top.io/m_23910hulw8.mp4',
'https://d.top4top.io/m_2391dj01a9.mp4',
'https://e.top4top.io/m_23912fdr210.mp4',
'https://a.top4top.io/m_23911dhqx1.mp4',
'https://b.top4top.io/m_2391wwr402.mp4',
'https://c.top4top.io/m_2391vfkp63.mp4',
'https://d.top4top.io/m_2391b7cey4.mp4',
'https://e.top4top.io/m_2391fxdc85.mp4',
'https://telegra.ph/file/c3deeb5b0b7f7738a95ad.mp4',
'https://telegra.ph/file/7ca9eef850f5edc53f7f2.mp4',
'https://telegra.ph/file/44f73812ae0c19f097264.mp4',
'https://telegra.ph/file/10399f910bb90de8a6c53.mp4',
'https://telegra.ph/file/f7b440b02e742d1d4bed6.mp4',
'https://telegra.ph/file/3571f86c9c8843f48ce03.mp4',
'https://telegra.ph/file/c0b4e700e2d696f6ae448.mp4',
'https://telegra.ph/file/c0b4e700e2d696f6ae448.mp4',
'https://telegra.ph/file/fbfa5ac6baca454de22ad.mp4',
'https://telegra.ph/file/899cb30e29de1f0692ea1.mp4',
'https://telegra.ph/file/30e226e2d30e51bda678f.mp4',
'https://telegra.ph/file/4b20016e2f4ff96280fea.mp4',
'https://telegra.ph/file/d48fde63f91f9aa585716.mp4',
'https://telegra.ph/file/3a1f2afb1172b4606cd50.mp4',
'https://telegra.ph/file/fe7de67cadcddf80e4f23.mp4',
'https://telegra.ph/file/f4eabe96d994b28b7020d.mp4',
'https://telegra.ph/file/f8adc8f3af8ce6f80254b.mp4',
'https://telegra.ph/file/909a4beb3be92dae9e8ef.mp4',
'https://telegra.ph/file/57dff983fe52d49cf9e11.mp4',
'https://telegra.ph/file/70ed984ecf1382e0e74ce.mp4',
'https://telegra.ph/file/a922d3d0214e7b95dfb89.mp4',
'https://telegra.ph/file/ff7a0e8598bfd47898932.mp4',
'https://telegra.ph/file/c992c64d4bb59df46f06e.mp4',
'https://telegra.ph/file/137346459c02371cf5de9.mp4',
'https://telegra.ph/file/2ae60a3fc1509f779cba0.mp4',
'https://telegra.ph/file/223ac432cbca27313c59c.mp4',
'https://telegra.ph/file/6411bbcedc5da320b8656.mp4',
'https://telegra.ph/file/33a005837185d86435a26.mp4',
'https://telegra.ph/file/3b5cf36d1fc154ee36345.mp4',
'https://telegra.ph/file/c5606fb628f4c8268f1bb.mp4',
'https://telegra.ph/file/a91ba184bd2faedf2ca93.mp4',
'https://telegra.ph/file/aebad466be77f72498981.mp4',
'https://telegra.ph/file/a38ff1a80c53fb374af90.mp4',
'https://telegra.ph/file/607217019e1e5952920c1.mp4',
'https://telegra.ph/file/8a98532caa714b28acce1.mp4',
'https://telegra.ph/file/9eb4be5e79b7e71bfecc5.mp4',
'https://telegra.ph/file/10bbd3972f7b75a8b2ef6.mp4',
'https://telegra.ph/file/3fae1c6aacaba812ea651.mp4',
'https://telegra.ph/file/68378ab14e55b8a4113c2.mp4',
'https://telegra.ph/file/9cb140f6f74012cce30c7.mp4',
'https://telegra.ph/file/17a3d58921c2754cf86ef.mp4',
'https://telegra.ph/file/3ac2c8447b8915a879e7a.mp4',
'https://telegra.ph/file/269cd09dcf42f8bd3a6f9.mp4',
'https://telegra.ph/file/d2e59e56cfdaac79ca7f8.mp4',
'https://telegra.ph/file/504ac80844f99a8e3fc54.mp4',
'https://telegra.ph/file/dd2b8fba0010f539085d1.mp4',
'https://telegra.ph/file/af9726aad0dce10dc4529.mp4',
'https://telegra.ph/file/c693724dba3bb96bb6c70.mp4',
'https://telegra.ph/file/5b91438135d01c11e7c92.mp4',
'https://telegra.ph/file/d2a468ff7cd4c29dcdb4a.mp4',
'https://telegra.ph/file/9cc245954979317b3484c.mp4',
'https://telegra.ph/file/cde12f0fd2c73ab8eb933.mp4',
'https://telegra.ph/file/ab58119a87c7f2c2367dc.mp4',
'https://telegra.ph/file/9146e2d5490c1b01c6e87.mp4',
'https://telegra.ph/file/09c9e72d3e0d44175c304.mp4',
'https://telegra.ph/file/2f01ddd037c40477ed07f.mp4',
'https://telegra.ph/file/be72f95d92490f0a1db3b.mp4',
'https://telegra.ph/file/d1464f070543fb3aaeaee.mp4',
'https://telegra.ph/file/99f02aa82825f1bf61e9a.mp4',
'https://telegra.ph/file/d540762b1d4f9e767357d.mp4',
'https://telegra.ph/file/98d09d227e8552d4e2bea.mp4',
'https://telegra.ph/file/4a9dc4ba09484791dfa9a.mp4',
'https://telegra.ph/file/91d8701c2783775637125.mp4',
]
            await farisofc.sendMessage(m.chat, { video: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: `_Random Story Anime_` }, { quoted: m })
	}
        break
        case  'cai': case 'luffy':{
        
if (!q) return reply(`mau nanya apa`)
//if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
const luffybeban = await fetchJson(`https://api-charaai.vercel.app/charaai?chara=Luffy&text=${q}`)
farisofc.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `Faris , Milkita`,body:`⌜ Bot MD ⌟`,previewType:"PHOTO",thumbnailUrl: thumb,sourceUrl: `${sgc}`,}
}, text: luffybeban}, { quoted: m })
}

break

        
        case 'emojimix': {

let [emoji1, emoji2] = text.split`+`
if (!emoji1) return reply(`Example : ${prefix + command} 😅+💩`)
if (!emoji2) return reply(`Example : ${prefix + command} 😅+💩`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await farisofc.sendStickerFromUrl(m.chat, res.url, m, { packname: `Created By ${namabot}` , author: `Owner ${namaowner}`, categories: res.tags })
}
}
break
case 'get':{

let fetch = require('node-fetch')
let util = require('util')
  if (!/^https?:\/\//.test(text)) throw 'Awali *URL* dengan http:// atau https://'
    let _url = new URL(text)
      let res = await fetch(text)
        if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
            delete res
                throw `Content-Length: ${res.headers.get('content-length')}`
                  }
                    if (!/text|json/.test(res.headers.get('content-type'))) return farisofc.sendFile(m.chat, url, null, text, m)
                      let txt = await res.buffer()
                        try {
                            txt = util.format(JSON.parse(txt+''))
                              } catch (e) {
                                  txt = txt + ''
                                    } finally {
                                        m.reply(txt.slice(0, 65536) + '')
                                          }
                                          }
                                          break
        case '@6288297877862': {
        reply('Ngapain Nge Tag² Ownerku');
        }
        break
              case 'pushcontact': {
    if (!isOwner) return farisstickOwner()
      if (!m.isGroup) return reply(`The feature works only in grup`)
    if (!text) return reply(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    reply(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    farisofc.sendMessage(pler, { text: q})
     }  
     reply(`Done`)
      }
      break
        case 'toanime': case 'jadianime': {
            const { TelegraPH } = require("./lib/TelegraPH")

if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
await farisofc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
const media = await farisofc.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
farisofc.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/toanime?url=${anu}&apikey=s4nbot` }, caption: 'Nih ☑️'}, { quoted: m})
}
break
case 'gimage':{

if (!q) return m.reply(`Usage: ${prefix}gimage sby garuk biji`);
farisofc.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let ini = await fetchJson(`https://aemt.me/googleimage?query=${q}`);
try{
for (let bing of ini.result) {
await sleep(500)
await farisofc.sendMessage(m.chat, { image: { url: bing }, caption: ``}, {quoted: m})
farisofc.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}
} catch (e) {
farisofc.sendMessage(m.chat, { react: { text: `✖️`, key: m.key }})
}
}
break
case 'removebg': case 'nobg':{
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Send Media Nya Kak'
let media = await q.download()
let url = await uploadImage(media)
reply(`_Process_`)
let anu = await fetch(`https://aemt.me/removebg?url=${url}`)
let data = await anu.json()
await farisofc.sendFile(m.chat, data.url.result, 'anu.jpg', '_Succes Removing Background_', m)
}

break
        case 'tobrut2':
const { lolkey, vinkey } = require('./apikey.json')
await loading()
axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=https://vt.tiktok.com/ZSFFxWBJU/`).then(({ data }) => {
farisofc.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`tokyo aku mau  🤤` })
})
        break

        case 'vin': case 'simi':
if (!q) reply('Iya Kak?')
let simi = await fetchJson(`https://aemt.me/simi?text=${q}`)
const simi2 = simi.result
farisofc.sendMessage(m.chat, {text: simi2}, {quoted: m})
break
        case'ppcp':{

let anu = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json")
farisofc.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let random = anu[Math.floor(Math.random() * anu.length)]
farisofc.sendMessage(m.chat,{image: {url: random.male,},caption: `Couple Cowo`,},{quoted: m,})
farisofc.sendMessage(m.chat,{image: {url: random.female,},caption: `Couple Cewe`,},{quoted: m,})
}
break
    case 'save': {
if (!isOwner) return reply(mess.only.owner)
let t = text.split('|');
if (t.length < 2) return reply(`Format salah!

Penggunaan:
${prefix + command} |nama pake garus lurus sebelum nama yah bang Nama | yang kaya gitu`);
let nama = t[0];
let nominal = t[1];
        reply(mess.save)
reply(`𝕊𝕐𝕊𝕋𝔼𝕄 𝕊𝔸𝕍𝔼 𝕆𝕋𝕆𝕄𝔸𝕋𝕀𝕊 𝔻𝕆ℕ𝔼✅

𝕂𝕆ℕ𝕋𝔸𝕂 : ${nominal}

𝕁𝔸ℕ𝔾𝔸ℕ 𝕃𝕌ℙ𝔸 𝕊𝔸𝕍𝔼 𝔹𝔸ℂ𝕂 ${namaStore} 𝕐𝕆𝕆`)
}
        break        
        case 'getbio':{
            try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await farisofc.fetchStatus(who)
    m.reply(bio.status)
  } catch {
    if (text) throw `Bio Is Private!`
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await farisofc.fetchStatus(who)
      m.reply(bio.status)
    } catch {
      throw `Bio Is Private!`
    }
  }
}
        break
        
    case "cekidgc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
let getGroups = await farisofc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ LIST GROUP BY faris\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await farisofc.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break

case 'enable': case 'disable':{
let db = `
┌「 _*⩽ GROUP ONLY ⩾*_
⩽⩾ autodlgc ${isAutoDlGc ? '☑️' : '✖️'}
╰──  

*NOTE*
☑️ Status On
✖️ Status Off
`
reply(`${db}`)
}
break
case 'autodlgc':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins && ! isOwner) return reply('Fitur Khusus admin!')
if (args[0] === "on") {
if (isAutoDlGc) return reply(`Udah aktif`)
autodlgc.push(m.chat)
fs.writeFileSync('./database/autodlgc.json', JSON.stringify(autodlgc, null, 2))
reply('Sukses Mengaktifkan Auto Download Nya')
} else if (args[0] === "off") {
if (!isAutoDlGc) return reply(`Udah Mati`)
let anu = autodlgc.indexOf(m.chat)
autodlgc.splice(anu, 1)
fs.writeFileSync('./database/autodlgc.json', JSON.stringify(autodlgc, null, 2))
reply('Sukses Mematikan Auto Download')
} else {
reply(`${prefix+command} *on*\n${prefix+command} *off*`)
}}
break
case 'menugame':{
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys").version
const text12 = `*Hi @${sender.split("@")[0]} ${xeonytimewisher}👋*
╒─────⩽ *I N F O* ⩾
│❏ *ᴄʀᴇᴀᴛᴏʀ* : ${namaowner}
│❏ *ʙᴏᴛ* : ${namabot}
│❏ *ᴛʏᴘᴇ* : ᴄᴀꜱᴇ 
╠─────⩽ *U S E R* ⩾
│❏ *ɴᴀᴍᴇ* : ${pushname}
│❏ *ꜱᴛᴀᴛᴜꜱ* : ${isOwner ? 'owner' : 'user'}
│❏ *ᴘʀᴇᴍɪᴜᴍ* : ${isPremium ? '✅' : `❌`}
╠─────⩽ *D A T E* ⩾
│❏ *ᴛɪᴍᴇ* : ${wib}
│❏ *ᴅᴀᴛᴇ* : ${date}
│❏ *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
╘───────────────┈ ⳹

ɴ ᴏ ᴛ ᴇ :
◦ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ッ

┌ ◦ ${prefix}tebak gambar
│ ◦ ${prefix}tebak lirik
│ ◦ ${prefix}tebak lagu
│ ◦ ${prefix}tebak kalimat
│ ◦ ${prefix}tebak kata
│ ◦ ${prefix}tebak Bendera
│ ◦ ${prefix}tebak Bendera2
│ ◦ ${prefix}tebak Kabupaten
│ ◦ ${prefix}tebak Kimia
│ ◦ ${prefix}tebak Siapakahaku
│ ◦ ${prefix}tebak Susunkata
│ ◦ ${prefix}tebak Tekateki
└ ◦ ${prefix}math

[ Powered By *@${owned.split("@")[0]}* ]
`
await farisofc.sendMessage(m.chat, {
          react: {
            text: '⏳',
            key: m.key,
          }})
          await farisofc.sendMessage(m.chat, {
          react: {
            text: '3️⃣',
            key: m.key,
          }})
await farisofc.sendMessage(m.chat, {
          react: {
            text: '2️⃣',
            key: m.key,
          }})
await farisofc.sendMessage(m.chat, {
          react: {
            text: '1️⃣',
            key: m.key,
          }})
          await farisofc.sendMessage(m.chat, {
          react: {
            text: '☑️',
            key: m.key,
          }});
farisofc.sendMessage(m.chat, {
      video: fs.readFileSync('./menu.mp4'),
      gifPlayback: true,
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/56e6a48866e14bbde57ba.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } freya = fs.readFileSync('./audio.mp3')
farisofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
        case 'simi':{
            let chat = global.db.data.chats[m.chat]
        
if (chat.simi && !chat.isBanned ) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(m.text), lc: "id" }, ''))
        if (!res.ok) throw eror
        let json = await res.json()
        if (json.success == 'gapaham banh:v') return m.reply('lu ngetik apaaan sih')
        await m.reply(`${json.success}`)
        return !0
    }
    return true
}
    break
        case 'assalamualaikum':{
            let caption = `*Waalaikummussalam warahmatullahi wabarokatuh*


_📚 Baca yang dibawah ya!_
"Orang yang mengucapkan salam seperti ini maka ia mendapatkan 30 pahala, kemudian, orang yang dihadapan atau mendengarnya membalas dengan kalimat yang sama yaitu “Wa'alaikum salam warahmatullahi wabarakatuh” atau ditambah dengan yang lain. Artinya selain daripada do'a selamat juga meminta pada Allah SWT"
`

farisofc.reply(m.chat, caption, m)
}
        break
        
        
           case 'antilink': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroup && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[0] === "on") {
if (db.data.chats[m?.chat].antilink) return m?.reply(`Sudah Aktif Sebelumnya 🕊️`)
db.data.chats[m?.chat].antilink = true
m?.reply(`Antilink Group WhatsApp Aktif 🕊️`)
} else if (args[0] === "off") {
if (!db.data.chats[m?.chat].antilink) return m?.reply(`Sudah Nonaktif Sebelumnya 🕊`)
db.data.chats[m?.chat].antilink = false
m?.reply(`Antilink Group WhatsApp Nonaktif 🕊️`)
} else {
m?.reply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
}
}
break
case 'kuismath':
            case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let {
                    genMath,
                    modes
                } = require('./database/math')
                if (!text) return reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                farisofc.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'tebak': {
                if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    farisofc.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`
                    }, {
                        quoted: m
                    }).then(() => {
                        tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        farisofc.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`, m)
                        delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    farisofc.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        farisofc.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}`, m)
                        delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    farisofc.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        farisofc.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}`, m)
                        delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    farisofc.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                        tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        farisofc.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}`, m)
                        delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tebakan') {
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    farisofc.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                        tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        farisofc.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktebakan[m.sender.split('@')[0]]}`, m)
                        delete tebaktebakan[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera') {
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    farisofc.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s`
                    }, {
                        quoted: m
                    }).then(() => {
                        tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.name)
                        farisofc.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}`, m)
                        delete tebakbendera[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera2') {
                    if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    farisofc.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`
                    }, {
                        quoted: m
                    }).then(() => {
                        tebakbendera2[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.name)
                        farisofc.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera2[m.sender.split('@')[0]]}`, m)
                        delete tebakbendera2[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kabupaten') {
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    farisofc.sendImage(m.chat, result.url, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`, m).then(() => {
                        tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.title)
                        farisofc.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkabupaten[m.sender.split('@')[0]]}`, m)
                        delete tebakkabupaten[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kimia') {
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    farisofc.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s`, m).then(() => {
                        tebakkimia[m.sender.split('@')[0]] = result.lambang.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.lambang)
                        farisofc.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split('@')[0]]}`, m)
                        delete tebakkimia[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'asahotak') {
                    if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    farisofc.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakasahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        farisofc.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakasahotak[m.sender.split('@')[0]]}`, m)
                        delete tebakasahotak[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'siapakahaku') {
                    if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    farisofc.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebaksiapakahaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        farisofc.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksiapakahaku[m.sender.split('@')[0]]}`, m)
                        delete tebaksiapakahaku[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'susunkata') {
                    if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    farisofc.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s`, m).then(() => {
                        tebaksusunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        farisofc.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksusunkata[m.sender.split('@')[0]]}`, m)
                        delete tebaksusunkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tekateki') {
                    if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    farisofc.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebaktekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        farisofc.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktekateki[m.sender.split('@')[0]]}`, m)
                        delete tebaktekateki[m.sender.split('@')[0]]
                    }
                }
            }
            break
case 'menustore':{
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys").version
const text12 = `*Hi @${sender.split("@")[0]} ${xeonytimewisher}👋*
╒─────⩽ *I N F O* ⩾
│❏ *ᴄʀᴇᴀᴛᴏʀ* : ${namaowner}
│❏ *ʙᴏᴛ* : ${namabot}
│❏ *ᴛʏᴘᴇ* : ᴄᴀꜱᴇ 
╠─────⩽ *U S E R* ⩾
│❏ *ɴᴀᴍᴇ* : ${pushname}
│❏ *ꜱᴛᴀᴛᴜꜱ* : ${isOwner ? 'owner' : 'user'}
│❏ *ᴘʀᴇᴍɪᴜᴍ* : ${isPremium ? '✅' : `❌`}
╠─────⩽ *D A T E* ⩾
│❏ *ᴛɪᴍᴇ* : ${time2}
│❏ *ᴅᴀᴛᴇ* : ${date}
│❏ *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
╘───────────────┈ ⳹

ɴ ᴏ ᴛ ᴇ :
◦ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ッ
┌ ◦ ${prefix}proses
│ ◦ ${prefix}done
│ ◦ ${prefix}tunda
│ ◦ ${prefix}batal
│ ◦ ${prefix}kalkulator
└ ◦ ${prefix}testimoni
`
reply(text12)
}
break
case 'menureseller':{
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys").version
const text12 = `*Hi @${sender.split("@")[0]} ${xeonytimewisher}👋*
╒─────⩽ *I N F O* ⩾
│❏ *ᴄʀᴇᴀᴛᴏʀ* : ${namaowner}
│❏ *ʙᴏᴛ* : ${namabot}
│❏ *ᴛʏᴘᴇ* : ᴄᴀꜱᴇ 
╠─────⩽ *U S E R* ⩾
│❏ *ɴᴀᴍᴇ* : ${pushname}
│❏ *ꜱᴛᴀᴛᴜꜱ* : ${isOwner ? 'owner' : 'user'}
│❏ *ᴘʀᴇᴍɪᴜᴍ* : ${isPremium ? '✅' : `❌`}
╠─────⩽ *D A T E* ⩾
│❏ *ᴛɪᴍᴇ* : ${time2}
│❏ *ᴅᴀᴛᴇ* : ${date}
│❏ *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
╘───────────────┈ ⳹

ɴ ᴏ ᴛ ᴇ :
◦ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ッ
┌ ◦ ${prefix}chadmin
│ ◦ ${prefix}1gb
│ ◦ ${prefix}2gb
│ ◦ ${prefix}3gb
│ ◦ ${prefix}4gb
│ ◦ ${prefix}5gb
│ ◦ ${prefix}Sampe 25gb
└ ◦ ${prefix}unli
`
reply(text12)
}
break
case 'menuquotes':{
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys").version
const text12 = `*Hi @${sender.split("@")[0]} ${xeonytimewisher}👋*
╒─────⩽ *I N F O* ⩾
│❏ *ᴄʀᴇᴀᴛᴏʀ* : ${namaowner}
│❏ *ʙᴏᴛ* : ${namabot}
│❏ *ᴛʏᴘᴇ* : ᴄᴀꜱᴇ 
╠─────⩽ *U S E R* ⩾
│❏ *ɴᴀᴍᴇ* : ${pushname}
│❏ *ꜱᴛᴀᴛᴜꜱ* : ${isOwner ? 'owner' : 'user'}
│❏ *ᴘʀᴇᴍɪᴜᴍ* : ${isPremium ? '✅' : `❌`}
╠─────⩽ *D A T E* ⩾
│❏ *ᴛɪᴍᴇ* : ${time2}
│❏ *ᴅᴀᴛᴇ* : ${date}
│❏ *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
╘───────────────┈ ⳹

ɴ ᴏ ᴛ ᴇ :
◦ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ッ
┌ ◦ ${prefix}quotesanime
│ ◦ ${prefix}quotesbacot
│ ◦ ${prefix}quotesfakta
└ ◦ ${prefix}quotesislami
`
reply(text12)
}
break
case 'menuislami':{
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys").version
const text12 = `*Hi @${sender.split("@")[0]} ${xeonytimewisher}👋*
╒─────⩽ *I N F O* ⩾
│❏ *ᴄʀᴇᴀᴛᴏʀ* : ${namaowner}
│❏ *ʙᴏᴛ* : ${namabot}
│❏ *ᴛʏᴘᴇ* : ᴄᴀꜱᴇ 
╠─────⩽ *U S E R* ⩾
│❏ *ɴᴀᴍᴇ* : ${pushname}
│❏ *ꜱᴛᴀᴛᴜꜱ* : ${isOwner ? 'owner' : 'user'}
│❏ *ᴘʀᴇᴍɪᴜᴍ* : ${isPremium ? '✅' : `❌`}
╠─────⩽ *D A T E* ⩾
│❏ *ᴛɪᴍᴇ* : ${time2}
│❏ *ᴅᴀᴛᴇ* : ${date}
│❏ *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
╘───────────────┈ ⳹

ɴ ᴏ ᴛ ᴇ :
◦ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ッ
┌ ◦ ${prefix}jadwalsholat
│ ◦ ${prefix}nabiadam
│ ◦ ${prefix}nabiibrahim
│ ◦ ${prefix}nabiisa
│ ◦ ${prefix}nabiismail
│ ◦ ${prefix}nabiharun
│ ◦ ${prefix}nabimuhammad
│ ◦ ${prefix}nabiayub
│ ◦ ${prefix}nabidaud
│ ◦ ${prefix}nabimusa
└ ◦ ${prefix}nabinuh
`
reply(text12)
}
break
case 'menusearch':{
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys").version
const text12 = `*Hi @${sender.split("@")[0]} ${xeonytimewisher}👋*
╒─────⩽ *I N F O* ⩾
│❏ *ᴄʀᴇᴀᴛᴏʀ* : ${namaowner}
│❏ *ʙᴏᴛ* : ${namabot}
│❏ *ᴛʏᴘᴇ* : ᴄᴀꜱᴇ 
╠─────⩽ *U S E R* ⩾
│❏ *ɴᴀᴍᴇ* : ${pushname}
│❏ *ꜱᴛᴀᴛᴜꜱ* : ${isOwner ? 'owner' : 'user'}
│❏ *ᴘʀᴇᴍɪᴜᴍ* : ${isPremium ? '✅' : `❌`}
╠─────⩽ *D A T E* ⩾
│❏ *ᴛɪᴍᴇ* : ${time2}
│❏ *ᴅᴀᴛᴇ* : ${date}
│❏ *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
╘───────────────┈ ⳹

ɴ ᴏ ᴛ ᴇ :
◦ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ッ
┌ ◦ ${prefix}play
│ ◦ ${prefix}tiktoksearch
│ ◦ ${prefix}google
└ ◦ ${prefix}pinterest
`
reply(text12)
}
break
case 'setprefix':
                if (!isOwner) return farisstickOwner()
                if (!text) return reply(`Example : ${prefix + command} packname|author`)
                global.prefa = text
                reply(`Prefix successfully changed to ${text}`)
                break
case 'mainmenu':{
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys").version
const text12 = `*Hi @${sender.split("@")[0]} ${xeonytimewisher}👋*
╒─────⩽ *I N F O* ⩾
│❏ *ᴄʀᴇᴀᴛᴏʀ* : ${namaowner}
│❏ *ʙᴏᴛ* : ${namabot}
│❏ *ᴛʏᴘᴇ* : ᴄᴀꜱᴇ 
╠─────⩽ *U S E R* ⩾
│❏ *ɴᴀᴍᴇ* : ${pushname}
│❏ *ꜱᴛᴀᴛᴜꜱ* : ${isOwner ? 'owner' : 'user'}
│❏ *ᴘʀᴇᴍɪᴜᴍ* : ${isPremium ? '✅' : `❌`}
╠─────⩽ *D A T E* ⩾
│❏ *ᴛɪᴍᴇ* : ${time2}
│❏ *ᴅᴀᴛᴇ* : ${date}
│❏ *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
╘───────────────┈ ⳹

ɴ ᴏ ᴛ ᴇ :
◦ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ッ
┌ ◦ ${prefix}ping
│ ◦ ${prefix}os
└ ◦ ${prefix}disk
`
reply(text12)
}
break
case 'menudownload':{
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys").version
const text12 = `*Hi @${sender.split("@")[0]} ${xeonytimewisher}👋*
╒─────⩽ *I N F O* ⩾
│❏ *ᴄʀᴇᴀᴛᴏʀ* : ${namaowner}
│❏ *ʙᴏᴛ* : ${namabot}
│❏ *ᴛʏᴘᴇ* : ᴄᴀꜱᴇ 
╠─────⩽ *U S E R* ⩾
│❏ *ɴᴀᴍᴇ* : ${pushname}
│❏ *ꜱᴛᴀᴛᴜꜱ* : ${isOwner ? 'owner' : 'user'}
│❏ *ᴘʀᴇᴍɪᴜᴍ* : ${isPremium ? '✅' : `❌`}
╠─────⩽ *D A T E* ⩾
│❏ *ᴛɪᴍᴇ* : ${time2}
│❏ *ᴅᴀᴛᴇ* : ${date}
│❏ *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
╘───────────────┈ ⳹

ɴ ᴏ ᴛ ᴇ :
◦ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ッ
┌ ◦ ${prefix}tiktok
│ ◦ ${prefix}ytmp4
│ ◦ ${prefix}ig
│ ◦ ${prefix}fb
└ ◦ ${prefix}tiktokaudio
`
reply(text12)
}
break
case'menucmd':{
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys").version
const text12 = `*Hi @${sender.split("@")[0]} ${xeonytimewisher}👋*
╒─────⩽ *I N F O* ⩾
│❏ *ᴄʀᴇᴀᴛᴏʀ* : ${namaowner}
│❏ *ʙᴏᴛ* : ${namabot}
│❏ *ᴛʏᴘᴇ* : ᴄᴀꜱᴇ 
╠─────⩽ *U S E R* ⩾
│❏ *ɴᴀᴍᴇ* : ${pushname}
│❏ *ꜱᴛᴀᴛᴜꜱ* : ${isOwner ? 'owner' : 'user'}
│❏ *ᴘʀᴇᴍɪᴜᴍ* : ${isPremium ? '✅' : `❌`}
╠─────⩽ *D A T E* ⩾
│❏ *ᴛɪᴍᴇ* : ${time2}
│❏ *ᴅᴀᴛᴇ* : ${date}
│❏ *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
╘───────────────┈ ⳹

ɴ ᴏ ᴛ ᴇ :
◦ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ッ
┌ ◦ ${prefix}cmdpanel
└ ◦ ${prefix}cmdthema
`
reply(text12)
}
break
case 'menujb':{
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys").version
const text12 = `*Hi @${sender.split("@")[0]} ${xeonytimewisher}👋*
╒─────⩽ *I N F O* ⩾
│❏ *ᴄʀᴇᴀᴛᴏʀ* : ${namaowner}
│❏ *ʙᴏᴛ* : ${namabot}
│❏ *ᴛʏᴘᴇ* : ᴄᴀꜱᴇ 
╠─────⩽ *U S E R* ⩾
│❏ *ɴᴀᴍᴇ* : ${pushname}
│❏ *ꜱᴛᴀᴛᴜꜱ* : ${isOwner ? 'owner' : 'user'}
│❏ *ᴘʀᴇᴍɪᴜᴍ* : ${isPremium ? '✅' : `❌`}
╠─────⩽ *D A T E* ⩾
│❏ *ᴛɪᴍᴇ* : ${time2}
│❏ *ᴅᴀᴛᴇ* : ${date}
│❏ *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
╘───────────────┈ ⳹

ɴ ᴏ ᴛ ᴇ :
◦ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ッ
┌ ◦ ${prefix}formatpost
│ ◦ ${prefix}formatneed
│ ◦ ${prefix}feerekber
│ ◦ ${prefix}formatpencairan
│ ◦ ${prefix}danamasuk
└ ◦ ${prefix}donerekber
`
reply(text12)
}
break

case 'menupushkontak':{
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys").version
const text12 = `*Hi @${sender.split("@")[0]} ${xeonytimewisher}👋*
╒─────⩽ *I N F O* ⩾
│❏ *ᴄʀᴇᴀᴛᴏʀ* : ${namaowner}
│❏ *ʙᴏᴛ* : ${namabot}
│❏ *ᴛʏᴘᴇ* : ᴄᴀꜱᴇ 
╠─────⩽ *U S E R* ⩾
│❏ *ɴᴀᴍᴇ* : ${pushname}
│❏ *ꜱᴛᴀᴛᴜꜱ* : ${isOwner ? 'owner' : 'user'}
│❏ *ᴘʀᴇᴍɪᴜᴍ* : ${isPremium ? '✅' : `❌`}
╠─────⩽ *D A T E* ⩾
│❏ *ᴛɪᴍᴇ* : ${time2}
│❏ *ᴅᴀᴛᴇ* : ${date}
│❏ *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
╘───────────────┈ ⳹

ɴ ᴏ ᴛ ᴇ :
◦ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ッ
┌ ◦ ${prefix}cekidgc
│ ◦ ${prefix}listgroup
│ ◦ ${prefix}pushkontakv1
│ ◦ ${prefix}pushkontakv2
│ ◦ ${prefix}pushkontakv3
│ ◦ ${prefix}pushjeda
│ ◦ ${prefix}pushkontakv5
│ ◦ ${prefix}savecontactv1
│ ◦ ${prefix}savecontactv2
│ ◦ ${prefix}getcontact
│ ◦ ${prefix}save
└ ◦ ${prefix}sendkontak
`
reply(text12)
}
break

            case 'addbadword': case 'addbd':
               if (args.length < 1) return reply( `Send command ${prefix}addbadword [harsh word]. Example ${prefix}addbadword asshole`)
               bad.push(q)
               fs.writeFileSync('./badword.json', JSON.stringify(bad))
               reply('Successfully Added Bad Word!')
            break

case 'othermenu':{
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys").version
const text12 = `*Hi @${sender.split("@")[0]} ${xeonytimewisher}👋*
╒─────⩽ *I N F O* ⩾
│❏ *ᴄʀᴇᴀᴛᴏʀ* : ${namaowner}
│❏ *ʙᴏᴛ* : ${namabot}
│❏ *ᴛʏᴘᴇ* : ᴄᴀꜱᴇ 
╠─────⩽ *U S E R* ⩾
│❏ *ɴᴀᴍᴇ* : ${pushname}
│❏ *ꜱᴛᴀᴛᴜꜱ* : ${isOwner ? 'owner' : 'user'}
│❏ *ᴘʀᴇᴍɪᴜᴍ* : ${isPremium ? '✅' : `❌`}
╠─────⩽ *D A T E* ⩾
│❏ *ᴛɪᴍᴇ* : ${time2}
│❏ *ᴅᴀᴛᴇ* : ${date}
│❏ *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
╘───────────────┈ ⳹

ɴ ᴏ ᴛ ᴇ :
◦ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ッ
┌ ◦ ${prefix}bass
│ ◦ ${prefix}blown
│ ◦ ${prefix}deep
│ ◦ ${prefix}earrape
│ ◦ ${prefix}fast
│ ◦ ${prefix}fat
│ ◦ ${prefix}robot
│ ◦ ${prefix}nightcore
│ ◦ ${prefix}reverse
│ ◦ ${prefix}slow
└ ◦ ${prefix}sound1-sound161
`
reply(text12)
}
break

case 'menuopenai':{
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys").version
const text12 = `*Hi @${sender.split("@")[0]} ${xeonytimewisher}👋*
╒─────⩽ *I N F O* ⩾
│❏ *ᴄʀᴇᴀᴛᴏʀ* : ${namaowner}
│❏ *ʙᴏᴛ* : ${namabot}
│❏ *ᴛʏᴘᴇ* : ᴄᴀꜱᴇ 
╠─────⩽ *U S E R* ⩾
│❏ *ɴᴀᴍᴇ* : ${pushname}
│❏ *ꜱᴛᴀᴛᴜꜱ* : ${isOwner ? 'owner' : 'user'}
│❏ *ᴘʀᴇᴍɪᴜᴍ* : ${isPremium ? '✅' : `❌`}
╠─────⩽ *D A T E* ⩾
│❏ *ᴛɪᴍᴇ* : ${time2}
│❏ *ᴅᴀᴛᴇ* : ${date}
│❏ *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
╘───────────────┈ ⳹

ɴ ᴏ ᴛ ᴇ :
◦ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ッ
┌ ◦ ${prefix}sindy
│ ◦ ${prefix}aibot
└ ◦ ${prefix}ai/openai
`
reply(text12)
}
break
case 'mainmenu':{
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys").version
const text12 = `*Hi @${sender.split("@")[0]} ${xeonytimewisher}👋*
╒─────⩽ *I N F O* ⩾
│❏ *ᴄʀᴇᴀᴛᴏʀ* : ${namaowner}
│❏ *ʙᴏᴛ* : ${namabot}
│❏ *ᴛʏᴘᴇ* : ᴄᴀꜱᴇ 
╠─────⩽ *U S E R* ⩾
│❏ *ɴᴀᴍᴇ* : ${pushname}
│❏ *ꜱᴛᴀᴛᴜꜱ* : ${isOwner ? 'owner' : 'user'}
│❏ *ᴘʀᴇᴍɪᴜᴍ* : ${isPremium ? '✅' : `❌`}
╠─────⩽ *D A T E* ⩾
│❏ *ᴛɪᴍᴇ* : ${time2}
│❏ *ᴅᴀᴛᴇ* : ${date}
│❏ *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
╘───────────────┈ ⳹

ɴ ᴏ ᴛ ᴇ :
◦ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ッ
┌ ◦ ${prefix}tiktokstalk
│ ◦ ${prefix}igstalk
│ ◦ ${prefix}smeme
│ ◦ ${prefix}removebg
│ ◦ ${prefix}sticker/s/stiker
│ ◦ ${prefix}tourl
│ ◦ ${prefix}wm
│ ◦ ${prefix}qc
│ ◦ ${prefix}meme
│ ◦ ${prefix}joke
│ ◦ ${prefix}owner
│ ◦ ${prefix}remini
└ ◦ ${prefix}toimg
`
reply(text12)
 }
 break
case "groupmenu":{
       const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys").version
const text12 = `*Hi @${sender.split("@")[0]} ${xeonytimewisher}👋*
╒─────⩽ *I N F O* ⩾
│❏ *ᴄʀᴇᴀᴛᴏʀ* : ${namaowner}
│❏ *ʙᴏᴛ* : ${namabot}
│❏ *ᴛʏᴘᴇ* : ᴄᴀꜱᴇ 
╠─────⩽ *U S E R* ⩾
│❏ *ɴᴀᴍᴇ* : ${pushname}
│❏ *ꜱᴛᴀᴛᴜꜱ* : ${isOwner ? 'owner' : 'user'}
│❏ *ᴘʀᴇᴍɪᴜᴍ* : ${isPremium ? '✅' : `❌`}
╠─────⩽ *D A T E* ⩾
│❏ *ᴛɪᴍᴇ* : ${time2}
│❏ *ᴅᴀᴛᴇ* : ${date}
│❏ *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
╘───────────────┈ ⳹

ɴ ᴏ ᴛ ᴇ :
◦ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ッ
┌ ◦ ${prefix}linkgc/linkgroup
│ ◦ ${prefix}hidetag
│ ◦ ${prefix}add
│ ◦ ${prefix}kick
│ ◦ ${prefix}promote
└ ◦ ${prefix}demote
`
reply(text12)
}
break
        case 'ownermenu':{
        const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys").version
const text12 = `*Hi @${sender.split("@")[0]} ${xeonytimewisher}👋*
╒─────⩽ *I N F O* ⩾
│❏ *ᴄʀᴇᴀᴛᴏʀ* : ${namaowner}
│❏ *ʙᴏᴛ* : ${namabot}
│❏ *ᴛʏᴘᴇ* : ᴄᴀꜱᴇ 
╠─────⩽ *U S E R* ⩾
│❏ *ɴᴀᴍᴇ* : ${pushname}
│❏ *ꜱᴛᴀᴛᴜꜱ* : ${isOwner ? 'owner' : 'user'}
│❏ *ᴘʀᴇᴍɪᴜᴍ* : ${isPremium ? '✅' : `❌`}
╠─────⩽ *D A T E* ⩾
│❏ *ᴛɪᴍᴇ* : ${time2}
│❏ *ᴅᴀᴛᴇ* : ${date}
│❏ *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
╘───────────────┈ ⳹

ɴ ᴏ ᴛ ᴇ :
◦ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ッ
┌ ◦ ${prefix}self
│ ◦ ${prefix}publik
│ ◦ ${prefix}seppbot
│ ◦ ${prefix}kickall
│ ◦ ${prefix}addtesti
│ ◦ ${prefix}deltesti
└ ◦ ${prefix}getpp
`
reply(text12)
}
break
  
        case "addprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await farisofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
        case 'ss': case 'ssweb': {
        const scp1 = require('./lib/scraper1')     
if (!q) return reply(`Example ${prefix+command} link`)
await farisofc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
let krt = await scp1.ssweb(q)
farisofc.sendMessage(from,{image:krt.result,caption:`_SUCCES_`}, {quoted:m})
}
break
       case'igstalk':{

if (!q) return reply(`Example: ${prefix+command} username`)
farisofc.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://api.junn4.my.id/tools/igstalk?username=${q}`)
const nick = anu.result.username
const nama = anu.result.fullname
const post = anu.result.post
const foll = anu.result.followers
const foli = anu.result.following
const bio = anu.result.bio
farisofc.sendMessage(m.chat, { image: { url: anu.result.profile}, caption: `Nickname : ${nick}\nFullname : ${nama}\nPostingan : ${post}\nFollowers : ${foll}\nFollowing : ${foli}\nBio : ${bio}`}, {quoted: m})
}catch (error) {
reply(`Error!\nPastikan username sama persis dan akun tidak di privat.`);
}
}

break
        case'meme':{

farisofc.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let meme = await fetchJson(`https://api.junn4.my.id/search/meme`)
try{
const hasil = meme.result.url
const capt = meme.result.caption
await farisofc.sendFile(m.chat, hasil, null, `${capt}`, m)
await farisofc.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
} catch (err){
reply(`Error.`);
}
}

break
        
        case'tiktokstalk':{

if (!q) return reply(`Example: ${prefix+command} username`)
farisofc.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://api.junn4.my.id/tools/tiktokstalk?username=${q}`)
const nick = anu.result.name
const username = anu.result.username
const foll = anu.result.followers
const foli = anu.result.following
const desk = anu.result.description
await farisofc.sendMessage(m.chat, { image: { url: anu.result.pp_user}, caption: `Name : ${nick}\nUsername : ${username}\nFollowers : ${foll}\nFollowing : ${foli}\nDescription : ${desk}`}, {quoted: m})
await farisofc.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}catch (error) {
reply(`Error!\nPastikan username sama persis dan akun tidak di privat.`);
}
}

break

case "listgroup":{
if (!isOwner) return (`Ngapain ? Khusus faris GANTENG Aja !!`)
let getGroups = await farisofc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ LIST GROUP BY faris\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await farisofc.groupMetadata(x)
teks += `❏ Group Ke ${hituet+=1}\n│⭔ NAMA : ${metadata2.subject}\n│⭔ ID : ${metadata2.id}\n│⭔ MEMBER : ${metadata2.participants.length}\n╰────|\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontakv1 id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu ID Group Nya Di Atas`)
}
break
     case 'ram':{
const os = require('os');
let total = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(0)
let free = (os.freemem() / (1024 * 1024 * 1024)).toFixed(0)
let used = total-free
let persen = ((used / total) * 100).toFixed(0)
reply(`RAM yang digunakan: ${persen} %`)
}
break         
        
case 'sampah2':

let fl = await fs.readdirSync('./')
var teks = `JUMLAH SAMPAH SYSTEM\n\n`
teks += `Total : ${all.filter(v => v.endsWith("mp3")).map(v=>v).length} Sampah\n\n`
teks += fl.filter(v => v.endsWith("mp3")).map(o=>`${o}\n`).join("");
reply(teks)
break
    case 'lirik':{
if(!text) return reply('*Nyari Lagu Apa*')
let anu = await fetchJson(`https://api.zenext.xyz/searching/liriklagu?query=${text}&apikey=zenzkey_3902eee9616b`)
const potone = anu.result.thumb
const lagune = anu.result.lirik
farisofc.sendMessage(m.chat, { image: { url: potone}, caption: lagune}, {quoted: m})
let search = await yts(`${text}`)
let data = await search.all.filter((v) => v.type == 'video')
try {
var res12 = data[0]
} catch {
var res12 = data[1]
}
let ply = search.videos[0].url
const ytdl = require('ytdl-core')
let mp3file = `./${m.chat}.mp3`
  let nana = ytdl(ply, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
farisofc.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {title: `${search.all[0].title}`, body: `Views : ${search.all[0].views}`, thumbnailUrl: res12?.thumbnail, mediaType: 2, mediaUrl: `${search.videos[0].url}`, sourceUrl: `${search.videos[0].url}`, renderLargerThumbnail: true }}},)
   })
await farisofc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})      
}

break    
        case 'removebg': case 'nobg':{
const uploadImage = require('./lib/uploadImage') 
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Send Media Nya Kak'
let media = await q.download()
let url = await uploadImage(media)
vinReply(`_Process_`)
let anu = await fetch(`https://aemt.me/removebg?url=${url}`)
let data = await anu.json()
await farisofc.sendFile(m.chat, data.url.result, 'anu.jpg', '_Succes Removing Background_', m)
}
break
        
case 'quotesfakta':{
await fetch(`https://raw.githubusercontent.com/HasamiAini/Bot_Takagisan/main/faktanya.txt`)
            .then(res => res.text())
            .then(body => {
                let splitnix = body.split('\n')
                let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                farisofc.sendButton(m.chat, randomnix, wm,[['NEXT', `/${command}`]], m)
  })
} 
break


case 'quotesanime':{
  let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result[0]) throw json
  let { indo, character, anime } = json.result[0]
  farisofc.reply(m.chat, `${indo}\n\nBy: ~ _${character}_ ~\nAnime:\n${anime}`, m)
}
break
        case "linkgc": case "linkgroup":{
if (!isOwner) return reply(`Khusus Faris Offcial Aja`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
const url = await farisofc.groupInviteCode(m.chat)
const asu = "https://chat.whatsapp.com/" + url
reply(asu)
}
break
case "mediafire": {
if (!args[0]) throw 'Input URL' 
	if (!/https?:\/\/(www\.)?mediafire\.com/.test(args[0])) throw 'Invalid URL' 
	let res = await mediafiredl(args[0])
	let mimetype = await lookup(res.url)
	delete res.url2
	m.reply(Object.keys(res).map(v => `*• ${v.capitalize()}:* ${res[v]}`).join('\n') + '\n\n_Sending file..._')
	farisofc.sendMessage(m.chat, { document: { url: res.url }, fileName: res.filename, mimetype }, { quoted: m })
	await apivisit
}
break
case "hidetag": {
if (!isOwner) return reply(`Khusus Faris Offcial Aja`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!q) return reply(`Teks?`)
global.hit = q
farisofc.sendMessage(from, { text : global.hit ? global.hit : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break

case "add": {

if (!isOwner) return reply(`Khusus Faris Offcial Aja`)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await farisofc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "kick": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await farisofc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case 'promote': {
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await farisofc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply('*_Sukses Promote Yatim Piatu_*✅')).catch((err) => reply('*_❌ Terjadi Kesalahan_*'))
	}
	break
case 'demote': {
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await farisofc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply('*_Sukses Demote Yatim Piatu✅_*')).catch((err) => reply('*_❌ Terjadi Kesalahan_*'))
	}
	break
        case "cmdpanel": {
const owned = `${owner}@s.whatsapp.net`
const textbi = `*Hi @${sender.split("@")[0]} 👋*

CMD INSTALL CONTROL PANEL

bash <(curl -s https://raw.githubusercontent.com/Ferks-FK/ControlPanel-Installer/development/install.sh)

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
await farisofc.sendMessage(m.chat, {
          react: {
            text: '⏳',
            key: m.key,
          }})
          await farisofc.sendMessage(m.chat, {
          react: {
            text: '3️⃣',
            key: m.key,
          }})
await farisofc.sendMessage(m.chat, {
          react: {
            text: '2️⃣',
            key: m.key,
          }})
await farisofc.sendMessage(m.chat, {
          react: {
            text: '1️⃣',
            key: m.key,
          }})
          await farisofc.sendMessage(m.chat, {
          react: {
            text: '☑️',
            key: m.key,
          }});
farisofc.sendMessage(m.chat, {
      video: fs.readFileSync('./menu.mp4'),
      gifPlayback: true,
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/56e6a48866e14bbde57ba.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } freya = fs.readFileSync('./audio.mp3')
farisofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
        
case "cmdthema": {
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const textbi = `*Hi @${sender.split("@")[0]} 👋*

CMD THEMA STELLAR

1. curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash - 

2. apt install -y nodejs 

3. npm i -g yarn 

4. cd /var/www/pterodactyl 

5. yarn add react-feather  

6. php artisan migrate 

7. yarn build:production
 
8. php artisan view:clear

*NOTE :* MASUKIN CMD NYA 1 1
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
await farisofc.sendMessage(m.chat, {
          react: {
            text: '⏳',
            key: m.key,
          }})
          await farisofc.sendMessage(m.chat, {
          react: {
            text: '3️⃣',
            key: m.key,
          }})
await farisofc.sendMessage(m.chat, {
          react: {
            text: '2️⃣',
            key: m.key,
          }})
await farisofc.sendMessage(m.chat, {
          react: {
            text: '1️⃣',
            key: m.key,
          }})
          await farisofc.sendMessage(m.chat, {
          react: {
            text: '☑️',
            key: m.key,
          }});
farisofc.sendMessage(m.chat, {
      video: fs.readFileSync('./menu.mp4'),
      gifPlayback: true,
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://telegra.ph/file/56e6a48866e14bbde57ba.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } freya = fs.readFileSync('./audio.mp3')
farisofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
        case 'ai': case 'openai': {
                if (!q) return reply(`*Mau Nanya Naon Sia..?*`)
                reply('*Process*')
                  var vinz = await fetchJson(`https://aemt.me/openai?text=${q}`)
                  var vinaz = vinz.result
                 await reply(vinaz)
               }
               break
      case 'aibot':{
    if (!text) return m.reply(`*•Example:\n${prefix + command} hai`)
    try {
            let res = await fetch(`https://acez.vercel.app/api/others/chatgpt?q=${text}`)
let json = await res.json()
            if (!json.status) return m.reply('error')
            m.reply(json.gpt) 
    } catch (e) {
        console.log(e)
        return m.reply('error')
    }
}
break
      case "infosc":
owned = `${namaCreator}@s.whatsapp.net`
if (!q) return reply(`*[ SCRIPT BY FARIS OFFC ]*\n\n*> MAU BELI SC NYA?*\n*>SC NYA GAK DI JUAL 😁*\n*TAPI KALO DI TAKE GANJA GAS*\n\n*- KEUNTUNGAN :*\n*> BISA PUSH KONTAK*\n*> BISA JPM + GAMBAR*\n*> JPM TANPA CAPE CUMA LEWAT BOT*\n*> BISA SAVE KONTAK LEWAT ID*\n*> BISA CREATE PANEL OTOMATIS*\n*> CREATE NOKOS*\n\n*WEBSITE FARIS :*\nhttps://farisstore.com\n*TIKTOK :*\n*_https://tiktok.com/@farishayya*\n*TELEGRAM :*\n*_https://t.me/faris_ofc*\n*MINAT? CHAT WA DI BAWAH*\n*_wa.me/6288297877862*`)
break
case 'setmenu':{
               if (!isOwner) return farisstickOwner()
               if (!text) return reply(`There are 8 menu(v1,v2,v3,v4,v5,v6,v7,v8)\nPlease select one\nExample ${prefix + command} v1`)
               if (text.startsWith('v')) {
                  typemenu = text
                  reply(mess.done)
               } else {
                  reply(`There are 8 menu(v1,v2,v3,v4,v5,v6,v7,v8)\nPlease select one\nExample ${prefix + command} v1`)
               }
            }
            break
            case 'setreply':{
               if (!isOwner) return farisstickOwner()
               if (!text) return reply(`There are 3 reply(v1,v2,v3)\nPlease select 1\nExample ${prefix+command} v1`)
               if (text.startsWith('v')) {
                  typereply = text
                  reply(mess.done)
               } else {
                  reply(`There are 3 reply(v1,v2,v3)\nPlease select 1\nExample ${prefix+command} v1`)
               }
            }
            break
        case 'ram':{
        var os = require("os")
           let totalStorage = Math.floor(os.totalmem() / 1024 / 1024) + 'MB'
  let freeStorage = Math.floor(os.freemem() / 1024 / 1024) + 'MB'
  let cpuModel = os.cpus()[0].model
  let cpuSpeed = os.cpus()[0].speed / 1000
  let cpuCount = os.cpus().length

  let message = `
*Your Bot Specifications*:

• *Total Storage*: ${totalStorage}
• *Free Storage*: ${freeStorage}
• *CPU Model*: ${cpuModel}
• *CPU Speed*: ${cpuSpeed} GHz
• *Number of CPU Cores*: ${cpuCount}
`

  m.reply(message)
}
break
break
case 'mediafire': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
	if (args.length == 0) return reply(`Link Nya Tuan?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
	const { mediafireDl } = require('./freya/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 100) return reply('Oops, the file is too big...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
reply(`${result4}`)
farisofc.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
        case 'joke':{
  
  let res = await fetch('https://official-joke-api.appspot.com/random_joke');
  if (!res.ok) throw 'Tidak Ditemukan';
  let json = await res.json();
  let setup = json.setup;
  let punchline = json.punchline;
m.reply(m.chat, `Pertanyaan: ${setup}\n\nJawaban: ${punchline}`, m);
}
        break
        case 'vidowner':{
let tekssss = `*Hallo Tuan*👋🏻
Video Diatas Adalah Cewe Idaman 
*${namaStore}*
`
farisofc.sendMessage(from, { video: fs.readFileSync(`./p.mp4`),
 caption: tekssss,
 viewOnce:true,
footer: `MILIK *${ownerStore}*`},
{quoted: fkontak})
}
break
case 'quotesbacot':{
let bacot = [
'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
'Statusnya rohani, kelakuannya rohalus.',
'Kegagalan bukan suatu keberhasilan.',
'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
'Aku juga pernah kaya, waktu gajian.',
'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
'Jangan terlalu berharap! nanti jatuhnya sakit!',
'Ingat! Anda itu jomblo',
'Gak tau mau ngetik apa',
 ]
  let randombacot = bacot[Math.floor(Math.random() * bacot.length)]
  let caption = `Quotes bacot:\n${randombacot}` 
  m.reply(caption)
}
break
    
case 'quotesislami':{
 let quotes = [
    'Segala sesuatu telah Allah takdirkan. - QS. Al Qamar : 49',
    'Dan sesungguhnya DIA lah yang menjadikan orang tertawa dan menangis. - QS. An Najm: 43',
    'Janganlah kamu berduka cita, sesungguhnya Allah selalu bersama kita.- QS At-Taubah: 40', 'Segala sesuatu telah Allah takdirkan. - QS. Al Qamar : 49',
'Dan sesungguhnya DIA lah yang menjadikan orang tertawa dan menangis. - QS. An Najm: 43',
'Janganlah kamu berduka cita, sesungguhnya Allah selalu bersama kita.- QS At-Taubah: 40',
'Maka sesungguhnya bersama kesulitan itu ada kemudahan.QS Al Insyirah: 5',
'Sesungguhnya Allah tidak akan mengubah keadaan suatu kaum hingga mereka merubah keadaan yang ada pada diri mereka sendiri. - Q.S. Ar Rad: 11',
'Sesungguhnya Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya. - QS At- Tin: 4',
'Dan Kami jadikan kamu berpasang-pasangan. - QS. An-Naba: 8',
'Maka jangan sekali-kali membiarkan kehidupan dunia ini memperdayakan kamu. - QS. Fatir: 5',
'Dan bersabarlah kamu, sesungguhnya janji Allah adalah benar. - QS. Ar-Rum: 60',
'Dan barang siapa yang bertakwa kepada Allah, niscaya Allah menjadikan baginya kemudahan dalam urusannya. - Q.S At-Talaq: 4',
'Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. - QS. Al-Baqarah: 286',
'Tidakkah dia menyadari bahwa sesungguhnya Allah melihat segala perbuatannya?. - QS. Al-Alaq: 14',
'Bersabarlah wahai hati kelak akan ada seseorang yang datang dan siap menemani sisa hidupmu dalam ketaatan',
'Diri kita sendiri yang bisa menentukan apakah cinta kita berbuah dosa ataukah berbuah pahala',
'Dirimu yang sebenarnya adalah apa yang kamu lakukan di saat di ada orang yang melihatmu',
'Janji Allah tak pernah mengecewakan, dan bila kamu masih meras kecewa mungkin ada yang salah dengan imanmu',
'Rasa syukur tidak akan datang kepada orang yang tidak beriman dan tidak pernah kenyang',
'Maafkan aku andai apa yang aku tulis dan aku share tentang ilmu agama tidak sesuai dengan coberku dan kehidupanku yang asli',
'Kebanyakan manusia lebih senang menyalahkan orang lain daripada menyalahkan diri sendiri',
'Biarlah orang melihat penampilah kita biasa, tetapi luar biasa di mata Allah',
'Bersyukurlah bila dalam penantianmu, kau tetap gigih dalam kesendirian, sebab artinya kau telah memuliakan jalan Allah',
'Malu akan sebuah masalah itu boleh tapi jangan berlebihan sebab jika kita Yakin Pertolongan Allah itu sangatlah nyata',
'Yakinlah bahwa ada do’a yang terus dipanjatkan kepada Allah yang tidak putus-putus dari orang tua kita agar kita senantiasa menjadi anak yang sholeh dan sholehah',
'Setiap hari aku berusaha semaksimal mungkin mencari rizki yang halal demi bisa menghalalkanmu',
'Jatuh cinta bisa jadi sangat menyakitkan jika kita tidak mampu untuk mengendalikannya',
    // tambahkan quotes selanjutnya di sini
  ]
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  let caption = `Quotes Islam:\n${randomQuote}` 
  m.reply(caption)
}
break
case 'nabiismail':{
        let res = JSON.parse(fs.readFileSync(`./lib/database/islam/${command}.json`))
let kisah = res[Math.floor(Math.random() * res.length)]
let hasil = `
🕌 Nabi : ${kisah.name}
📅 Tanggal Lahir : ${kisah.thn_kelahiran}
📍 Tempat Lahir : ${kisah.tmp}
🕰 Usia : ${kisah.usia}

📜 Kisah : ${kisah.description}`;

     farisofc.sendMessage(m.chat, { image: { url: kisah.image_url }, caption: hasil }, { quoted: m})
     }
     break
     
     case 'nabimusa':{
        let res = JSON.parse(fs.readFileSync(`./lib/database/islam/${command}.json`))
let kisah = res[Math.floor(Math.random() * res.length)]
let hasil = `
🕌 Nabi : ${kisah.name}
📅 Tanggal Lahir : ${kisah.thn_kelahiran}
📍 Tempat Lahir : ${kisah.tmp}
🕰 Usia : ${kisah.usia}

📜 Kisah : ${kisah.description}`;

     farisofc.sendMessage(m.chat, { image: { url: kisah.image_url }, caption: hasil }, { quoted: m})
     }
     break
     
     case 'nabinuh':{
        let res = JSON.parse(fs.readFileSync(`./lib/database/islam/${command}.json`))
let kisah = res[Math.floor(Math.random() * res.length)]
let hasil = `
🕌 Nabi : ${kisah.name}
📅 Tanggal Lahir : ${kisah.thn_kelahiran}
📍 Tempat Lahir : ${kisah.tmp}
🕰 Usia : ${kisah.usia}

📜 Kisah : ${kisah.description}`;

    farisofc.sendMessage(m.chat, { image: { url: kisah.image_url }, caption: hasil }, { quoted: m})
     }
     break
case 'nabiharun':{
        let res = JSON.parse(fs.readFileSync(`./lib/database/islam/${command}.json`))
let kisah = res[Math.floor(Math.random() * res.length)]
let hasil = `
🕌 Nabi : ${kisah.name}
📅 Tanggal Lahir : ${kisah.thn_kelahiran}
📍 Tempat Lahir : ${kisah.tmp}
🕰 Usia : ${kisah.usia}

📜 Kisah : ${kisah.description}`;

     farisofc.sendMessage(m.chat, { image: { url: kisah.image_url }, caption: hasil }, { quoted: m})
     }
     break
     case 'nabiisa':{
        let res = JSON.parse(fs.readFileSync(`./lib/database/islam/${command}.json`))
let kisah = res[Math.floor(Math.random() * res.length)]
let hasil = `
🕌 Nabi : ${kisah.name}
📅 Tanggal Lahir : ${kisah.thn_kelahiran}
📍 Tempat Lahir : ${kisah.tmp}
🕰 Usia : ${kisah.usia}

📜 Kisah : ${kisah.description}`;

     farisofc.sendMessage(m.chat, { image: { url: kisah.image_url }, caption: hasil }, { quoted: m})
     }
     break
     case 'nabiibrahim':{
        let res = JSON.parse(fs.readFileSync(`./lib/database/islam/${command}.json`))
let kisah = res[Math.floor(Math.random() * res.length)]
let hasil = `
🕌 Nabi : ${kisah.name}
📅 Tanggal Lahir : ${kisah.thn_kelahiran}
📍 Tempat Lahir : ${kisah.tmp}
🕰 Usia : ${kisah.usia}

📜 Kisah : ${kisah.description}`;

     farisofc.sendMessage(m.chat, { image: { url: kisah.image_url }, caption: hasil }, { quoted: m})
     }
     break
        case 'jadwalsholat':{
            const { jadwalsholat } = require('@bochilteam/scraper')
            if (!text) throw `Use example ${prefix + command} semarang`
    const res = await jadwalsholat(text)
    m.reply(`
Jadwal Sholat *${text}*
${Object.entries(res.today).map(([name, data]) => `*Sholat ${name}:* ${data}`).join('\n').trim()}
`.trim())
}
        break
        case 'ayatkursi':{
        let caption = `
*「 Ayat Kursi 」*

اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ

“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”


Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`
  m.reply(caption)
}
break
        case 'nabidaud':{
        let res = JSON.parse(fs.readFileSync(`./lib/database/islam/${command}.json`))
let kisah = res[Math.floor(Math.random() * res.length)]
let hasil = `
🕌 Nabi : ${kisah.name}
📅 Tanggal Lahir : ${kisah.thn_kelahiran}
📍 Tempat Lahir : ${kisah.tmp}
🕰 Usia : ${kisah.usia}

📜 Kisah : ${kisah.description}`;

     farisofc.sendMessage(m.chat, { image: { url: kisah.image_url }, caption: hasil }, { quoted: m})
     }
     break
        case 'nabiadam':{
        let res = JSON.parse(fs.readFileSync(`./lib/database/islam/${command}.json`))
let kisah = res[Math.floor(Math.random() * res.length)]
let hasil = `
🕌 Nabi : ${kisah.name}
📅 Tanggal Lahir : ${kisah.thn_kelahiran}
📍 Tempat Lahir : ${kisah.tmp}
🕰 Usia : ${kisah.usia}

📜 Kisah : ${kisah.description}`;

     farisofc.sendMessage(m.chat, { image: { url: kisah.image_url }, caption: hasil }, { quoted: m})
     }
     break
        case 'nabiayub':{
        let res = JSON.parse(fs.readFileSync(`./lib/database/islam/${command}.json`))
let kisah = res[Math.floor(Math.random() * res.length)]
let hasil = `
🕌 Nabi : ${kisah.name}
📅 Tanggal Lahir : ${kisah.thn_kelahiran}
📍 Tempat Lahir : ${kisah.tmp}
🕰 Usia : ${kisah.usia}

📜 Kisah : ${kisah.description}`;

     farisofc.sendMessage(m.chat, { image: { url: kisah.image_url }, caption: hasil }, { quoted: m})
     }
     break
     
     case 'nabimuhammad':{
        let res = JSON.parse(fs.readFileSync(`./lib/database/islam/${command}.json`))
let kisah = res[Math.floor(Math.random() * res.length)]
let hasil = `
🕌 Nabi : ${kisah.name}
📅 Tanggal Lahir : ${kisah.thn_kelahiran}
📍 Tempat Lahir : ${kisah.tmp}
🕰 Usia : ${kisah.usia}

📜 Kisah : ${kisah.description}`;

     farisofc.sendMessage(m.chat, { image: { url: kisah.image_url }, caption: hasil }, { quoted: m})
     }
     break
        
        
        case 'os':{
            var os = require("os")


            let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr, json) => {
          let child = stdout.toString("utf-8");
          let ssd =
 child.replace(/Memory:/, "Ram:");
          m.reply(`*CPU*: ${ssd}\n*Speed*: *${latensi.toFixed(4)} MS*\n*Memory:* *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*\n*OS:* *${os.version()}*\n*Platform:* *${os.platform()}*\n*Hostname:* *${os.hostname()}*`);
            });
}
        break
        
    
        
    case 'wm':{
        const { sticker } = require('./lib/sticker')
const uploadFile = require('./lib/uploadFile')
const uploadImage = require('./lib/uploadImage')
let { webp2png } = require('./lib/webp2mp4')
let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
try {
      let img = await q.download()
   
if(!img) throw `balas gambar/video/stiker dengan perintah .stiker` 
farisofc.sendImageAsSticker(m.chat , img, m, {packname: text, author: ''})
    } catch { throw 'Gagal!, Balas Gambar/video dengan caption *.stiker*'}
}
    break
        
case 'rvo': case 'readviewonce': {
    const { downloadContentFromMessage } = require('@whiskeysockets/baileys')
  if (!m.quoted) throw 'Reply gambar/video yang ingin Anda lihat'
  if (m.quoted.mtype !== 'viewOnceMessageV2') throw 'Ini bukan pesan viewonce.'
  let msg = m.quoted.message
  let type = Object.keys(msg)[0]
  let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
  let buffer = Buffer.from([])
  for await (const chunk of media) {
    buffer = Buffer.concat([buffer, chunk])
  }
  if (/video/.test(type)) {
    return farisofc.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
  } else if (/image/.test(type)) {
    return farisofc.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
  }
}
        break
    case 'owner': {
        farisstickowner()
farisofc.sendMessage(from, {
   
                    contacts: {
                 displayName: `${list.length} Contact`,
                        contacts: list
                      
                    }
                }, {
                    quoted: m
                })
            } freya = fs.readFileSync('./nj.mp3')
farisofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
               case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
    await farisofc.removeProfilePicture(from)
    }
    break
case 'apakah': 

if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
 if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya ganteng`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
farisofc.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted:m })
        break
        case 'bagaimanakah':

if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya cantik`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
farisofc.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted:m })
break
case "formatpost": {

if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `🥀FORMAT JASPOST BY ${namaCreator}🥀
(BUKAN AKUN MILIK ADMIN)
                   
JUAL AKUN :
SPEK :
HARGA:
MC :
NOMER : wa.me/


NOTE‼️: WAJIB MENGGUNAKAN JASA ADMIN ${namaCreator} AGAR TERHINDAR DARI PENIPUAN


🥀BEE SMART BUYER🥀`
reply(text12)
}
break
case "formatneed": {

if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `*FORMAT JASA NEED AKUN BY ${namaCreator}*
*( BUKAN AKUN ADMIN )*

NAMA PEMILIK : 
AKUN : 
LOGIN : 
HARGA : 
SPEK AKUN : 
MC : 
  
*#TIDAK MENERIMA KIRKON*

📝𝐍𝐎𝐓𝐄 : 
*WAJIB MENGGUNAKAN JASA ADMIN ${namaCreator} UNTUK MENGHINDARI PENIPUAN*

*PERINGATAN ⚠️*
*MOHON NAMA PEMILIK AKUNNYA HARUS DI ISI DENGAN BENAR AGAR SELLER GAMPANG DI CARI*`
reply(text12)
}
break
case "mc":{
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!text) return reply("salah contoh .mc 250k by BAGUS X7 OFFICIAL")
let cret = await farisofc.groupCreate(text, [])
let response = await farisofc.groupInviteCode(cret.id)
let teks = `「 *Create Group Mc By ${namaCreator}* 」

GRUP MC SUDAH DI BUAT ATAS NAMA *${text}* SILAHKAN MASUK MELALUI LINK YANG ADA DI BAWAH YAH GENGS

*⥁* Name : ${cret.subject}
*⥁* MC BY : ${namaCreator}
*⥁* Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
*⥁* Link : https://chat.whatsapp.com/${response}
`
setTimeout(() => {
reply(teks) 
}, 7000)
setTimeout(() => {
farisofc.groupParticipantsUpdate(cret.id, [m.sender], "promote")
}, 5000)
setTimeout(() => {
farisofc.groupParticipantsUpdate(cret.id, [m.sender], "add")
}, 1000)
}
break
case 'donemc':{
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} item,nominal`);
let item = t[0];
let nominal = t[1];
reply(`*ALHAMDULILAH ALL TRX DONE ✅*
*TERIMA KASIH ATAS KEPERCAYAANYA*
*TELAH MENGGUNAKAN JASA ADMIN *${namaCreator}*

*ITEM : ${item}*
*TANGGAL : ${tanggal}*
*NOMINAL : ${nominal}*
*WAKTU : ${time2}*
*SISTEM : MC*
*BUYYER : DONE✅*
*SELLER : DONE✅*

*JIKA KEDUANYA TELAH DONE,MAKA JIKA ADA SESUATU YANG TERJADI DI LAIN HARI BUKAN TANGGUBG JAWAB ADMIN LAGI !!!*

*TERIMA KASIH TELAH MENGGUNAKAN JASA ADMIN ${namaCreator}*`)
}
        break
case "feerekber": {
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `FEE BER² ${namaCreator}

•0 - 99K ≠ 5K
•99K - 150K ≠ 10K
•151K - 200K ≠ 15K
•201K - 324K ≠ 20K
•325K - 400K ≠ 25K
•401K - 500K ≠ 30K
•501K - 599K ≠ 35K
•600K - 699K ≠ 40K
•700K - 799K ≠ 45K
•800K - 1JT ≠ 50K
•1,1JT - 1,7JT ≠ 70K
•1,8JT - 2,5JT ≠ 100K
•BTBER ≠ 50K 
•TTBEB ≠ 50K`
reply(text12)
}
break
case "formatpencairan": {
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `FORMAT PENCAIRAN ${namaCreator}

Pencarian : 
No pay    : 
Atas nama :

KESALAHAN PADA NOMOR PENCAIRAN BUKAN JADI TANGGUNG JAWAB KAMI TOLONG DI CEK DENGAN DETAIL DAN SEBENAR-BENARNYA AGAR TIDAK TERJADI KESALAHAN YANG TIDAK DI INGINKAN KESALAHAN PADA NOMOR PENCAIRAN KAMI TIDAK AKAN BERTANGGUNG JAWAB`
reply(text12)
}
        break
        
case "allrect": {

if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `REKAM LAYAR!

> HAPUS SEMUA PESAN GMAIL
> KOSONGKAN SEMUA SAMPAH GMAIL
> HAPUS AKUN FB DARI PERANGKAT
> LOGOUT FF

*BY* ${namaCreator}`
reply(text12)
}
break
case "danamasuk": {
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `DANA MASUK!

SILAHKAN SEND DATA SECARA PRIBADI KALO SUDAH DONE DAN DATA SUDAH DI AMANKAN SILAHKAN KETIK DONE KE GRUP BESERTA BUKTI SS LOGIN AKUN AGAR DANA BISA DI CAIRKAN KE PENJUAL UNTUK PENJUAL SILAHKAN KETIK .formatpencairan LALU ISI DENGAN BENAR AGAR KAMI TIDAK SALAH MENCAIRKAN DANA KESALAHAN DI TANGGUNG PENJUAL

X TRX BATAL FEE TETEP KEPOTONG X
BE SMART BUYER AND SELLER`
reply(text12)
}
break
case "donerekber": {
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `ALL TRX DONE ✅
 

   BUUYER : ✅
   SELLEER : ✅


NOTE ⛔ : JIKA ADA KENDALA DI LAIN WAKTU ADMIN SUDAH TIDAK BERTANGGUNG JAWAB ❗❗


TERIMA KASIH SUDAH BERBELANJA DI ${namaCreator}`
reply(text12)
}
break
            
            case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
case 'sound162':
audioo = await Buffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await farisofc.sendMessage(m.chat, { audio: audioo, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
        
        case 'rvoo':{
            const { downloadContentFromMessage } = require('@whiskeysockets/baileys')

  if (!m.quoted) throw 'where\'s message?'
  let msg = m.quoted.message
  let type = Object.keys(msg)[0]
  let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
  let buffer = Buffer.from([])
  for await (const chunk of media) {
    buffer = Buffer.concat([buffer, chunk])
  }
  if (/video/.test(type)) {
    return farisofc.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
  } else if (/image/.test(type)) {
    return farisofc.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
  }
}
break
case 'tagme':{
      let tag = `@${sender.split('@')[0]}`
 reply(tag)
    } 
        break
  
        
  case 'spotify':{
	if (!text) throw `*MASUKAN NAMA LAGU*`

try {

let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)

let json = await res.json()

let { link } = json.result[0]

let res2 = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkeysapi}&url=${link}`)

let json2 = await res2.json()

let { thumbnail, title, artists } = json2.result

let spotifyi = `❒═════❬ 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 ❭═════╾❒\n┬\n├‣✨ *TITLE:* ${title}\n┴\n┬\n├‣🗣️ *ARTIST:* ${artists}\n┴\n┬\n├‣🌐 *𝚄𝚁𝙻*: ${link}\n┴\n┬\n├‣💚 *SEARCH URL:* ${json2.result.link}\n┴`

farisofc.sendFile(m.chat, thumbnail, 'error.jpg', spotifyi, m)

let aa = await farisofc.sendMessage(m.chat, { audio: { url: json2.result.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m }) 

if (!aa) return farisofc.sendFile(m.chat, json2.result.link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' }) 

} catch {

throw '* 𝙴𝚁𝚁𝙾𝚁*'

}}
        
case 'ss': case 'ssweb':{
if (!/^https?:\/\//.test(text)) return m?.reply('Awali *URL* dengan http:// atau https://')
let krt = await ssweb(text)
ptz.sendMessage(m.chat,{image: krt.result, caption: "Done"},{quoted:m})
}
break
             case 'google': {
if (!text) return reply(`Contoh : ${prefix + command} pisang`)

let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `• *Title* : ${g.title}\n`
teks += `• *Description* : ${g.snippet}\n`
teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
     
          case "p": case "bot": {
        let njay = `Ya Kak Ada apa?`
        reply(njay)
              }
        break
    case "ffid":
      case "cekff":
        {
          if (!q)
            return reply(
              `🔍『 *CEK NICKNAME EPEP* 』\n\nFORMAT : ${command}ID`
            );
          reply(mess.wait);
          var { data } = await axios.get(
            `https://api.lolhuman.xyz/api/freefire/${q}?apikey=a5cd76e1d1a6d26588783bcd`
          );
          reply(`🔍『 *CEK NICKNAME EPEP*』
ID: ${q}
Nickname: ${data.result}`);
        }
        break
case 'report':{
           let ripotbug = args[0]
           if (!ripotbug) return reply('Teksnya?')
reply('Oke Kak Reportmu Sudah Terkirim Ke Owner')
farisofc.sendMessage('6288297877862@s.whatsapp.net', { text: `*===[ REPORT ]===*\n*TEXT : ${jumlah} DARI : @${sender.split('@')[0]}*\n*Ketik ${prefix}accreport Jika Ingin Menerima Laporan*\n*${prefix}acc Jika Ingin Menolak Report Biarin Ajah 🗿*`, mentions: [sender]}, { quoted: m })
        }
        break
        case 'accreport': {
                    let messageText = `_Terima Kasih Atas Laporan Anda Dan Laporan Anda Diterima Tunggu 1 - 2 Hari Agar Owner Bisa Memperbaikinya`
  let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

  farisofc.sendMessage(targetNumber, {
    text: `*${messageText}*`,
    mentions: [sender]
  }, {
    quoted: m
  }).then(() => {
    m.reply('Acc berhasil!');
  }).catch(() => {
    m.reply('Gagal mengirim pesan!');
  });
}
break
case "chadmin": {
if (!isOwner) return reply(`*Lu Siape? Fitur Ini Khusus Owner Gw!*`)
if (!isOwner) return reply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let pw = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer,pw`)
if (!username)  return reply(`Ex : ${prefix+command} Username,@tag/nomor,pw\n\nContoh :\n${prefix+command} example,@user,pw`)
if (!nomor)  return reply(`Ex : ${prefix+command} Username,@tag/nomor,pw\n\nContoh :\n${prefix+command} example,@user,pw`)
if (!pw) return reply(`Ex : ${prefix+command} Username,@tag/nomor,pw\n\nContoh :\n${prefix+command} example,@user,pw`)
let password = pw
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
PASSWORD: ${password.toString()}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}
JAM:${time2}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await farisofc.sendMessage(m.chat, listMessage)

    await farisofc.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

USERNAME :  ${username}
PASSWORD: ${password.toString()}
LOGIN: ${domain}
JAM:${time2}

*Rules :*
- Dilarang menghapus account Admin lain!
- Dilarang mencuri Script dari Panel pembeli!
- Dilarang membuat Panel yg terlalu besar!
- Dilarang membuat account Admin Panel lain!
- Dilarang mengutak-atik Panel!
- Melanggar salah satu Rules diatas langsung dihapus Admin Panelnya! Mohon untuk mengikuti Rulesnya!


`,

    })

} 
        break


     //━━━━━━━━━━━━━━━[ PANEL ]━━━━━━━━━━━━━━━━━//
   case "1gb": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer,pw`)
let username = t[0];
let pw = t[2];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "10"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = pw
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`DONE BY  FarisOffcial⚡

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password.toString()}
 *🌐LOGIN* : ${domain}
 *😎PEMILIK SERVER* : *${namaCreator}*
 
*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
𝐃𝐎𝐍𝐄 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐄𝐊 𝐃𝐀𝐓𝐀 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓 ☑️
© Cs  FarisOffcial
`)

}

break
case "2gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "3gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "300"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "4gb": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "200"
let disk = "4000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "unli": {
    if (!isOwner) return reply(` Khusus Faris Offcial Aja`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "5gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "500"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "6gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "6000"
let cpu = "450"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "7gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "7000"
let cpu = "400"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "8gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "450"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "9gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "9000"
let cpu = "500"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*web OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break

case "10gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "1048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break

case "11gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "11048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break

case "12gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "12048"
let cpu = "800"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break

case "2gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "13048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break

case "14gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "14048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break

case "15gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "15048"
let cpu = "900"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break

case "16gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "16048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break

case "17gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "17048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break

case "18gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "18048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break

case "19gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "19048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break

case "20gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "20048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break

case "21gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "21048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break

case "22gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "22048"
let cpu = "1000"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break

case "23gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "23048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break

case "24gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "24048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break

case "25gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "25048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ca931fe4bb5c04442a8b6.jpg" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://farisstore.me

*GRUP OWNER :*
https://chat.whatsapp.com/EY6wKRMhQYq6YHEtD0KQ1I

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "getpp":
        {
          if (Input) {
            try {
              var ppWong = await farisofc.profilePictureUrl(Input, "image");
            } catch {
              var ppWong =
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
            }
            farisofc.sendMessage(
              m.chat,
              { image: { url: ppWong } },
              { quoted: m }
            );
          } else {
            try {
              var ppWong = await farisofc.profilePictureUrl(m.sender, "image");
            } catch {
              var ppWong =
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
            }
            farisofc.sendMessage(
              m.chat,
              { image: { url: ppWong } },
              { quoted: m }
            );
          }
        }
        break
        case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} *Has Gone AFK*${text ? ': ' + text : ''}`)
            }
            break	
            
        case 'time':{
        const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys").version
const text12 = `*Hi @${sender.split("@")[0]} ${xeonytimewisher}👋*
*╔┈┈⳹『 Jam Dunia 」*
*╎❒ Jakarta*: *${jakartaTime}*
*╎❒ Banten*: *${bantenTime}*
*╎❒ Jayapura*: *${jayapuraTime}*
*╎❒ Makassar*: *${makassarTime}*
*╎❒ Malaysia*: *${malaysiaTime}*
*╎❒ Jepang*: *${japanTime}*
*╎❒ Thaildand*: *${thailandTime}*
*╎❒ Korea*: *${koreaTime}*
*╎❒ America*: *${americaTime}*
*╎❒ Rusia*: *${rusiaTime}*
*╎❒ Arab*: *${arabTime}*
*╎❒ Mekkah*: *${mekkahTime}*
*╚┈┈┈┈┈┈┈┈┈┈┈┈⳹*`
farisofc.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: 'Faris 乂 Freya',
body: 'Faris 乂 Freya',
thumbnailUrl: 'https://telegra.ph/file/ccbcad695e4c251bd028f.jpg',

mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})    

} freya = fs.readFileSync('./audio.mp3')
farisofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break   
  case 'qrish': case 'qr': case 'qris' :
farisofc.sendMessage(from, { image: {url : "https://telegra.ph/file/f4e17072d2dfa489783d5.jpg"}, caption: "Silahkan Scan Code Qr Diatas Jangan Lupa Kirim Bukti Transaksinya Ya" }, { quoted: m })
break
        
    case 'daftar':
case 'registrasi':
case 'register':
case 'registered':
case 'regis':{
let mm = args.join(' ')
let m1 = mm.split("|")[0];
let m2 = mm.split("|")[1];
let m3 = mm.split("|")[2];
if (isGroup) {
reply(`🇮🇩 _Bot telah mengirimkan pendaftaran ke private chat, silahkan selesaikan agar dapat menggunakan fitur bot ${global.namebot}._`)
if (!m2) return farisofc.sendMessage(sender, { text: `🇮🇩 _Hi @${sender.split('@')[0]} silahkan ketik umur mu .daftar nama|usia\n\ncontoh .daftar nama|18`, mentions: [ `${sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: m })
}
if (!m1) return reply(`Ex : ${prefix+command} Nama|usia|kelamin`)
if (m1 && !m2 && !m3) {
user.push({id: sender, name: m1})
fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
}
if (m1 && m2 && !m3) {
user.push({id: sender, name: m1, umur: m2})
fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
}
if (!m3) return farisofc.sendMessage(sender, { text: `🇮🇩 _Hi @${sender.split('@')[0]} silahkan pilih jenis kelamin kamu dengan cara ketik nama|usia|jeniskelamin\n\ncontoh .daftar Nama|18|pria`, mentions: [ `${sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: m })

if (m1 && m2 && m3) {
user.push({id: sender, name: m1, umur: m2, gender: m3})
fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
}
try {
ppuser = await farisofc.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://tinyurl.com/yx93l6da'
}
const nomor_resi = require("crypto").randomBytes(5).toString("hex").toUpperCase()
let resiNya = `${nomor_resi}`
let registerOnNya = `${date}`
let teks_daftar =`*──────❲ VERIFIKASI SUKSES ❳──────*
*Nama :* ${m1}
*Umur :* ${m2} Tahun
*Gender :* ${m3}
*Resi :* ${resiNya}
*freecode :* A820bdoqP
*Register On :* ${registerOnNya}
*Nomor :* ${sender.split('@')[0]}
*Status :* ${isOwner? 'Owner':'User'} ${global.namabot}
*User Ke :* ${user.length}
*Hit Cmd :* 1

Silahkan ketik *#rules* sebelum memulai bot.`
if (m1 && m2 && m3) {
user.push({id: sender, name: m1, umur: m2, gender: m3, resi: resiNya, registerOn: registerOnNya})
fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
farisofc.sendMessage(sender, { text: `*Memuat Data* › @${sender.split('@')[0]}`, mentions: [ `${sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: m })
farisofc.sendMessage(sender, { image: { url: ppuser }, caption: teks_daftar }, { quoted: m }) 
}
}
break
        case "sindy":
        {
          if (!text) return reply(`*• Example:* ${prefix + command} halo`);
          m.reply(`Wait Bang`);
          try {
            let gpt = await (
              await fetch(
                `https://itzpire.site/ai/botika?q=${text}&user=${m.sender}&model=sindy`,
              )
            ).json();
            m.reply("*[ SINDY - AI ]* " + "\n" + gpt.result);
          } catch (e) {
            return reply("`*Gpt Not Responded*`");
          }
        }
        break;            
       
        
        case 'enc':{
            const JavaScriptObfuscator = require('javascript-obfuscator')
            if (!text) throw `Masukin Code-nya`
let res = JavaScriptObfuscator.obfuscate(text)
farisofc.reply(m.chat, res.getObfuscatedCode(), m)
}
        break
        
            case "jadianime":
        {
          if (cek("id", m.sender) == null) return reply(mess.user);
          if (!isPremium) return reply(mess.premium);
          const q = m.quoted ? m.quoted : m;
          const mime = (q.msg || q).mimetype || "";
          if (!/image\/(jpe?g|png)/.test(mime))
            return reply(`Kirim gambar dengan caption atau reply`);
          const img = await farisofc.downloadAndSaveMediaMessage(q);
          if (!img)
            return reply(
              `Kirim gambar dengan caption atau reply ${prefix + command}`
            );
          reply(mess.wait);
          const { uptotelegra } = require("./scraper/upload");
          const IMAGE_URL = await uptotelegra(img);
          const APIKEY = "1e07801237d5a7d8a1decc43";
          const API_URL = `https://api.itsrose.site/image/differentMe?url=${IMAGE_URL}&apikey=${APIKEY}`;
          farisofc.sendMessage(
            from,
            {
              image: {
                url: API_URL,
              },
              caption: `Nih Ngap, Dah Bisa Masuk Issekai Nih🗿`,
            },
            { quoted: m }
          );
        }
        break

        case 'totalfitur':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
reply(`Total Bot Features Are ${totalFitur()}`)
        break
        case 'google': {
if (!quoted) return reply(`Example : ${prefix + command} ${global.botname}`)
return reply("tunggu sebentar")
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
        case 'sss': case 'sswebite': {
const scp1 = require('./lib/scraper') 
if (!q) return reply(`Example ${prefix+command} link`)
farisstickWait()
let krt = await scp1.ssweb(q)
farisofc.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:fkontak})
}
break
        case 'ffstalk':{
const ffstalk = require('./lib/ffstalk')
if (!q) return reply(`Example ${prefix+command} 946716486`)
eeh = await ffstalk.ffstalk(`${q}`)
reply(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
        case 'getcase':

const getCase = (cases) => {

            return "case  "+`'${cases}'`+fs.readFileSync("./farisofc.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"

        }
            try{

             

                if (!q) return reply(`contoh : ${prefix + command} antilink`)

                let nana = await getCase(q)

                reply(nana)

            } catch(err){

            console.log(err)

            reply(`Case ${q} tidak di temukan`)

        }

        break
        case 'smeme': case 'stickermeme': case 'stickmeme': {
 let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
  if (!/image/.test(mime)) throw respond
  if (!text) throw respond
  reply(`Proses Tuan...`)
  let atas = text.split('|')[0] ? text.split('|')[0] : '-'
  let bawah = text.split('|')[1] ? text.split('|')[1] : '-'
  let { TelegraPh } = require('./lib/uploader')
  try {
  let mee = await farisofc.downloadAndSaveMediaMessage(quoted)
  let mem = await TelegraPh(mee)
  let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
  let awikwok = await farisofc.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(awikwok)
  } catch (e) {
  reply(`Sedang Maintenance Tuan`)
  }
  }
  break 
        case 'delete': case 'del': {
                
                if (!m.quoted) return false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return reply('Pesan tersebut bukan dikirim oleh bot!')
                farisofc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
case 'tiktok': {
if (!quoted)throw 'Masukkan Query Link!'
reply('`Tunggu Sebentar`')
let anu = await fetchJson(`https://aemt.me/download/ttdl?url=${text}`)
farisofc.sendMessage(m.chat,{video:{url: anu.result.video[0] },caption: 'Done!!!'},{quoted:m})
  require('./lib/tiktok').Tiktok(q).then( data => {
farisofc.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'tiktokaudio':{
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
require('./lib/tiktok').Tiktok(q).then( data => {
farisofc.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
  case 'tiktoksearch': {
                     if (!text) throw `🚩 *Example:* ${prefix+command} LisaameliaA`
                     let res = await fetch(`https://new-api-lorenzo.cyclic.app/api/search/tiktoksearchv2?apikey=YT:LORENZOBOTMD&query=${text}`)
    let spas = "              "
    let data = await res.json()
    let json = data.result
	let cap = `${spas}*「 T I K T O K S E A R C H 」*

*📛Author:* ${json.title}

${global.footer}`
farisofc.sendMessage(m.chat, { video: { url: json.no_watermark }, caption: cap }, { quoted: m})
const faristikmp3 = {url:data.audio}
farisofc.sendMessage(m.chat, { audio: faristikmp3, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
} 
                break
        
        case 'fb':
           case 'facebook': {
           if (!args[0]) {
    return reply(`Please send the link of a Facebook video\n\nEXAMPLE :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`)
  }
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    return reply('Url invalid')
  }
  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
        [ FACEBOOK DL ]
${global.themeemoji} Title: ${result.title}`;
    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)
    farisofc.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
  } catch (error) {
    reply('Maybe private video!')
  }
  }
  break
case 'tiktokstalk': {
	  if (!text) return reply(`Username? `)
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *TIKTOK STALK* 
──「 *TIKTOK STALK* 
▢ *🔖Number:* ${res.name}
▢ *🔖Username:* ${res.username}
▢ *👥followers:* ${res.followers}
▢ *🫂following:* ${res.following}
▢ *📌Desc:* ${res.desc}

▢ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`
  await farisofc.sendMessage(m.chat, {image: { url: res.profile}, caption: txt}, {quoted: m})
}
break
        case 'rules':{
            let teks = `➯ *Tɪᴅᴀᴋ Sᴘᴀᴍ Bᴏᴛ*
 _Kebijakan privasi atau Private without being in public_

• *Kebijakan Privasi:*
1. ${global.namebot} tidak akan merekam data riwayat chat user.
2. ${global.namebot} tidak akan menyebarkan nomor users.
3. ${global.namebot} tidak akan menyimpan media yang dikirimkan oleh users.
4. ${global.namebot} tidak akan menyalah gunakan data data users.
5. Owner ${global.namebot} berhak melihat data riwayat chat users.
6. Owner ${global.namebot} berhak melihat status users.
7. Owner ${global.namebot} dapat melihat riwayat chat, dan media yang dikirimkan users.

• Jika ada bug/eror di website kami saya mohon untuk Report nya, tanpa biaya dan aman

_Cara penggunaan ${global.namebot} Agar terhindar dari Suspand_

• *Peraturan ${global.namebot}:*
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi Owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.

• *Note:*
1. Jika ada yang menjual/beli/sewa bot atas nomor ini, harap segera hubungi owner!
2. Jika ingin donasi bisa langsung aja ya social payment Dana 
3. jika ingin membeli scrip bot Whatsapp bisa langsung Hubungi ke no Whatsapp: wa.me/6288297877862
3. Jika Ingin SewaBot Chat Owner

•Agar terhindar dari Suspand/Ban kalian bisa membaca juga di Peraturan kami.

•Perlu kalian tahu bahwa kami menjaga Privasi dari data-data anda!

• *Syarat Ketentuan ${global.namebot}:*

1. ${global.namebot} akan keluar dari group jika ada salah satu member melanggar peraturan.
2. ${global.namebot} dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. ${global.namebot} tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.
4. ${global.namebot} akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. ${global.namebot} bertanggung jawab atas kesalahan fatal dalam programing maupun owner.

buat sejak: 2024`
farisofc.sendMessage(m.chat, {
text: teks,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: 'Faris 乂 Freya',
body: 'Faris 乂 Freya',
thumbnailUrl: 'https://telegra.ph/file/ccbcad695e4c251bd028f.jpg',

mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})    

} freya = fs.readFileSync('./audio.mp3')
farisofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break   
        case 'removebg':{
            let fetch = require('node-fetch')
let uploadImage = require('./lib/uploadImage.js')
            let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? farisofc.user.jid : m.sender
let name = await farisofc.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .removebg'
reply('Tunggu Sebentar...')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://skizo.tech/api/removebg?url=${url}&apikey=seika`)).buffer()
await farisofc.sendFile(m.chat, hasil, '', '📮Nih Hasilnya', m)
	
}
        break
        case 'ping': case 'botstatus': case 'statusbot': case 'p': {
	const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
	farisofc.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 999999999,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: respon,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    }
	
	break
case 'igstalk': {
if (!args[0]) return reply(`Enter Instagram Username\n\nExample: ${prefix + command} unucorn_faris13`)
const fg = require('api-dylux')
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await farisofc.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
      } catch {
        reply(`Make sure the username comes from *Instagram*`)
      }
}
break
case 'pinterest': {
if (!text) return reply(`Enter Query`)
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
farisofc.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
        
        case 'credits':{
            const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys").version
const text12 = `*Hi @${sender.split("@")[0]} ${xeonytimewisher}👋*
 
─┉┈◈ * BIG THANKS TO *◈┈┉

 Sricpt Base Ori From Putz 
» SiPutz (Yang Punya Base)
» Farisofc (Pengembang)
» Nabi besar kita nabi muhammad
» Allah Swt
» Dan teman"
» Kyuuu (Ppek)
Berikut Yang Ikut Perkembangan Script Ini
`
farisofc.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: 'Faris 乂 Freya',
body: 'Faris 乂 Freya',
thumbnailUrl: 'https://telegra.ph/file/ccbcad695e4c251bd028f.jpg',

mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fdoc})    

} freya = fs.readFileSync('./audio.mp3')
farisofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break   
       
case 'remini': {
if (!quoted) return reply(`Where is the picture?`)
if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
reply(mess.wait)
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance")
farisofc.sendMessage(m.chat, { image: proses, caption: mess.selesai}, { quoted: m})
}
break
case "disk":{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return m?.reply(`${err}`)
if (stdout) return m?.reply(stdout)
})
}
break
        
case 'songg':
if (!text) return reply(`Where is the link?`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) return reply(`The link you provided is not spotify link`)
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `${themeemoji} *Title:* ${name || ''}\n${themeemoji} *Artists:* ${(artists || []).join(
            ','
        )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Release Date:* ${release_date || ''}`
       const response = await farisofc.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await farisofc.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await farisofc.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                farisofc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break

case 'public': {
if (!isOwner) return farisstickOwner()
farisofc.public = true
reply('*Successful in Changing To Public Usage*')
}
break
case 'self': {
if (!isOwner) return mess.owner
farisofc.public = false
reply('*Successful in Changing To Self Usage*')
}
break
case 'toaud': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await farisofc.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
farisofc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tovid':{
  if (!m.quoted) throw `Balas stiker/audio yang ingin diubah menjadi video dengan perintah ${prefix + command}`
    let mime = m.quoted.mimetype || ''
    if (!/webp|audio/.test(mime)) throw `Balas stiker/audio yang ingin diubah menjadi video dengan perintah ${prefix + command}`
    let media = await m.quoted.download()
    let out = Buffer.alloc(0)
    if (/webp/.test(mime)) {
        out = await webp2mp4(media)
    } else if (/audio/.test(mime)) {
        out = await ffmpeg(media, [
            '-filter_complex', 'color',
            '-pix_fmt', 'yuv420p',
            '-crf', '51',
            '-c:a', 'copy',
            '-shortest'
        ], 'mp3', 'mp4')
    }
    await farisofc.sendFile(m.chat, out, 'out.mp4', '*DONE*', m, 0, { thumbnail: out })
}
break
case 'tovn': {
await loading()
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
reply('*Sabar Cuy Loading*')
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
farisofc.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://instagram/faris_tf48',
title: `Faris offcial`,
sourceUrl: `https://instagram/faris_tf48`, 
thumbnail: thumb
}
}})
}
break
case 'toimage': case 'toimg': {
await loading()
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await farisofc.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
farisofc.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break

case 'tourl': {
let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()

  if (mime === 'application/zip') {
    const zip = new AdmZip(media);
    const zipEntries = zip.getEntries();
    const links = []; // Untuk menyimpan semua link yang dihasilkan

    for (let i = 0; i < zipEntries.length; i++) {
      const zipEntry = zipEntries[i];
      const entryMedia = zipEntry.getData();
      
      const link = await uploadImage(entryMedia); // Mengunggah sebagai gambar

      // Menyimpan link dalam array
      links.push(link);
    }

    // Menggabungkan semua link menjadi satu pesan
    const combinedLinks = links.join('\n');
    m.reply(`Links for all files in ZIP:\n${combinedLinks}`);
  } else {
    let link = await uploadImage(media);
    m.reply(`
*Link:* ${link}
*Size:* ${media.length} Byte
*Expired:* No Expiry Date`);
  }
}
break
case 'done':{
let t = text.split('|');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang|jumlah|nominal
Exampel ${prefix + command} panel|1|10000`);
let barang = t[0];
let jumlah = t[1];
let nominal = t[2];
reply(`
*━─━[All Trx Done]━─━*

 _• *Barang:* ${barang}_
 _• *Jumlah Pesanan:* Rp${jumlah}_
 _• *Nominal:* Rp${nominal}_
 _• *Tanggal:* ${date}_

Tᴇʀɪᴍᴀ Kᴀꜱɪʜ Yᴀ @${userss.split("@")[0]} Tᴇʟᴀʜ 
Oʀᴅᴇʀ Dᴀɴ Mᴇᴍᴘᴇʀᴄᴀʏᴀɪ 
Jᴀɴɢᴀɴ Lᴜᴘᴀ Oʀᴅᴇʀ Lᴀɢɪ Yᴀ !!
━───━━───━━───━━───━━───━`)
}
break
if (!isOwner) return mess.owner
case "tunda": {
const owned = `${owned}@s.whatsapp.net`
const text12 = `
*━───━[ 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗣𝗲𝗻𝗱𝗶𝗻𝗴 ]━───━*

Hᴀʟᴏ Kᴀᴋ @${userss.split("@")[0]}
Tʀᴀɴꜱᴀᴋꜱɪ Kᴀᴍᴜ Mᴀꜱɪʜ Dɪᴘᴇɴᴅɪɴɢ Nɪʜ 😓,
Tᴜɴɢɢᴜ Kᴏɴꜰɪʀᴍᴀꜱɪ Sᴇʟᴀɴᴊᴜᴛɴʏᴀ Yᴀ 😇

━───━━───━━───━━───━━───━`
reply(text12)
}
break
if (!isOwner) return mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
case "proses": {

const text12 = `
*━─━[ 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗣𝗿𝗼𝘀𝗲𝘀 ]━─━*

Hᴀʟᴏ Kᴀᴋ @${userss.split("@")[0]}
Sᴇᴋᴀʀᴀɴɢ Tʀᴀɴꜱᴀᴋꜱɪ Kᴀᴍᴜ Sᴇᴅᴀɴɢ 
Dɪ Pʀᴏꜱᴇꜱ Mᴏʜᴏɴ Tᴜɴɢɢᴜ 
Sᴇʙᴇɴᴛᴀʀ Yᴀ 😅

─━─━─━─━─━─━─━─━─━─━─`
reply(text12)
}
break
if (!isOwner) return mess.owner
case "batal": {
const owned = `${ownernomer}@s.whatsapp.net`
const text12 = `
*━─━[ 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹 ]━─━*

Hᴀʟᴏ Kᴀᴋ @${userss.split("@")[0]}

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${date}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${xtime}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

Yᴀʜ Tʀᴀɴꜱᴀᴋꜱɪ Kᴀᴍᴜ Dɪ Bᴀᴛᴀʟᴋᴀɴ 😭
Sᴇᴍᴏɢᴀ Lᴀɪɴ Kᴀʟɪ Bᴇʀʜᴀꜱɪʟ 😊

─━─━─━─━─━─━─━─━─━─`
reply(text12)
}
break
case 's': case 'sticker': case 'stiker': {
if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await farisofc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await farisofc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else {
reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'setppbot': case 'setbotpp': {
if (!isOwner) return reply(mess.owner)
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
var medis = await farisofc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
var { img } = await generateProfilePicture(medis)
await farisofc.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Success`)
}
break
case "qc": {
if (!quoted){
const getname = await farisofc.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
farisofc.sendImageAsSticker(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
farisofc.sendImageAsSticker(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${command} text atau reply pesan dengan perintah ${command}`)
}
}
break

case 'listgc':{
let txt = ''
    for (let [jid, chat] of Object.entries(farisofc.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `${await farisofc.getName(jid)}\n•> ${jid} [${chat?.metadata?.read_only ? 'Left' : 'Joined'}]\n\n`
    await m.reply(`*List Groups :*

${txt}
`.trim())
}
break
            
case "kalkulator":
 if (!text) return reply(`Lah Mana`)
let val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
  let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
  try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
reply(`*${format}* = _${result}_`)
  } catch (e) {
if (e == undefined) throw 'Isinya?'
throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport'
  }
  break
case "idgroup": {
if (!isOwner) return khususOwner()
let getGroups = await farisofc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP ANDA*\n\nTotal Group : ${anu.length} GROUP\n\n`
for (let x of anu) {
let metadata2 = await farisofc.groupMetadata(x)
teks += `❏ *INFO GROUP*\n│┆❐  *NAMA :* ${metadata2.subject}\n│┆❐  *ID :* ${metadata2.id}\n│┆❐  *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik\nCommand ${prefix}pushkontak id|teks\n\nPOWER BY *© VinnnX-MD⚡*`)
}
break
case "pushkontakv1":{
if (!isOwner) return reply(mess.owner)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
reply(mess.wait)
const groupMetadataa = !isGroup? await farisofc.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await farisofc.downloadAndSaveMediaMessage(quoted)
memk = await TelegraPh(media)
await farisofc.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(1000)
} else {
await farisofc.sendMessage(mem, { text: global.tekspushkon })
await sleep(1000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await farisofc.sendMessage(from, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakv2":{
if (!isOwner) return reply(mess.owner)
if (!isGroup) return reply(mess.only.group)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
reply(mess.wait)
const groupMetadata = isGroup? await farisofc.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await farisofc.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await farisofc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(1000)
} else {
await farisofc.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(1000)
}
}
reply("File Kontak Sudah Di Kirim Lewat Chat Pribadi")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await farisofc.sendMessage(sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakv3":
if (!isOwner) return reply(mess.owner)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|jeda|teks\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
await reply("Otw Boskuuu")
const groupMetadataa = !isGroup? await farisofc.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await farisofc.downloadAndSaveMediaMessage(quoted)
memk = await TelegraPh(media)
await farisofc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
await sleep(q.split("|")[1])
} else {
await farisofc.sendMessage(mem, { text: global.tekspushkonv3 })
await sleep(q.split("|")[1])
}
}
reply("Succes Boss!")
break
case "pushjeda":
if (!isOwner) return reply(`Khusus Bang faris`)
if (!isGroup) return reply(mess.only.group)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
await reply("Laksanakan Bang faris")
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await farisofc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await farisofc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
await sleep(text.split("|")[0])
} else {
await farisofc.sendMessage(men, { text: global.tekspushkonv4 })
await sleep(text.split("|")[0])
}
}
reply("Succes Bang faris!")
break
case 'pushkontakv5': {
    if (!isOwner) return khususOwner() 
if (!msg.isGroup) return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group`)
    if (!q) return reply(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    reply(`Succes Get Member`)
    for (let pler of mem) {
    farisofc.sendMessage(pler, { text: q})
     }
    
     reply(`Succes Push Kontak`)
      }
      break
case "savecontactv1": {
if (!isOwner) return reply(mess.owner)
if (!text) return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadata = isGroup? await farisofc.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}
reply("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await farisofc.sendMessage(sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'getcontact': case 'getkontak':
if (!isOwner) return reply(mess.owner)
if (!isGroup) return m.reply(`Khusus Group Kontol`)
huhuhs = await farisofc.sendMessage(m.chat, {
    text: `Grup; *${groupMetadata.subject}*\nTotal peserta; *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
farisofc.sendContact(m.chat, participants.map(a => a.id), huhuhs)
break
case 'savekontak': case 'svkontak':
if (!isOwner) return reply(mess.owner)
if (!isGroup) return m.reply(`Khusus Group Kontol`)
let cmiggc = await farisofc.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} // (?); mengimpor kontak seluruh member - save
let nmfilect = './contacts.vcf'
reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
farisofc.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break
case 'sendkontak': case 'kontak':
if (!isOwner) return reply(mess.owner)
if (!isGroup) return m.reply(mess.group)
if (!m.mentionedJid[0]) return reply('Ex; .kontak @tag|nama')
let snTak = dtext.split(' ')[1] ? dtext.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak
farisofc.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break
case "savecontactv2": {
if (!isOwner) return reply(mess.owner)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadataa = !isGroup? await farisofc.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await farisofc.sendMessage(from, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
case "jpm": case "post": {
if (!isOwner) return reply(mess.owner)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
let getGroups = await farisofc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await farisofc.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await farisofc.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await farisofc.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await farisofc.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL ✅*")
}
break
case 'addtesti':{
if (!isOwner) return reply(mess.owner)
if (args.length < 1) return reply('Apa nama testinya?')
if (testimoni.includes(q)) return reply("Nama tersebut sudah digunakan")
let delb = await farisofc.downloadAndSaveMediaMessage(quoted)
testimoni.push(q)
await fsx.copy(delb, `./database/image/${q}.jpg`)
fs.writeFileSync('./database/testimoni.json', JSON.stringify(testimoni))
fs.unlinkSync(delb)
reply(`Sukses Menambakan Testimoni\nCek Dengan Mengetik ${prefix}testimoni`)
}
break
case 'deltesti':{
if (!isOwner) return reply(mess.owner)
if (args.length < 1) return reply('Masukkan nama gambar')
if (!testimoni.includes(q)) return reply("Namanya tidak ada di database")
let wanu = testimoni.indexOf(q)
testimoni.splice(wanu, 1)
fs.writeFileSync('./database/testimoni.json', JSON.stringify(testimoni))
fs.unlinkSync(`./database/image/${q}.jpg`)
reply(`Sukses Delete Testi ${q}`)
}
break
case 'testimoni':{
let teks = '┌──⭓「 *testi List* 」\n│\n'
for (let x of testimoni) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${testimoni.length}*`
reply(teks)
}
break
default:
if (budy.startsWith('=>')) {
if (!isOwner) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m?.reply(bang)
}
try {
m?.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m?.reply(String(e))
}
}

if (budy.startsWith('v')) {
if (!isOwner) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m?.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m?.reply(`${err}`)
if (stdout) return m?.reply(stdout)
})
}

if (!m?.fromMe & !m?.isGroup) {
let user = global.db.data.users[m?.sender];
const cooldown = 21600000;
if (new Date() - user.pc < cooldown) return; 
let caption = `Hᴀʟᴏ @${m?.sender.split('@')[0]} ${xeonytimewisher}, ᴀᴅᴀ ᴀᴘᴀ ᴄʜᴀᴛ *Sɪᴘᴜᴛᴢx*, Jɪᴋᴀ ᴘᴇɴᴛɪɴɢ ᴛɪɴɢɢᴀʟᴋᴀɴ ᴄʜᴀᴛ ᴅᴀɴ *Sɪᴘᴜᴛᴢx* ᴀᴋᴀɴ ᴍᴇᴍʙᴀʟᴀꜱ ꜱᴇᴄᴇᴘᴀᴛ ᴍᴜɴɢᴋɪɴ.`.trim();

farisofc.sendMessage(m?.chat, { 
text: caption, 
contextInfo: { 
forwardingScore: 10, 
isForwarded: true, 
mentionedJid: [m?.sender],
businessMessageForwardInfo: { 
businessOwnerJid: botNumber 
},
forwardedNewsletterMessageInfo: {
newsletterJid: 'bjir@newsletter',
serverMessageId: null,
newsletterName: "Faris Assistant"
}
}
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "_Faris Production Terverifikasi WhatsApp_"}}})
user.pc = new Date() * 1;
}
}
} catch (err) {
farisofc.sendMessage('6288297877862@s.whatsapp.net', { text: util.format(err) })
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(color(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

        