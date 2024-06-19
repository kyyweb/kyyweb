const chalk = require("chalk")
const fs = require("fs")

//owmner v card
global.owner = ['6288297877862'] 
global.namaowner = "FARIS"
global.namebot = "Nurdanabotz"
global.namabot = "NurdanaBotz"
global.footer = "FARIS OFFC"
//ur owner number
global.ownernomer = "6288297877862" //ur owner number2
global.ownerStore = "FarisOffc"
global.ownername = "Farisofc" //ur owner name
global.botname = 'Saskeh Bot' //ur bot name
global.namaCreator = "Faris Official"//ur Creator name
global.ownernumber = '6288297877862' //ur owner number
global.ownername = 'farisofc' //ur owner name
//Sosmed 1
global.ytname = "YT: faris official" //ur yt chanel name
global.socialm = "GitHub: Farisofc" //ur github or insta name
global.location = "Indonesia" //ur location
global.websitex = 'wa.me/6288297877862'
global.botname = "Freya Botz"
//new
global.namebot = "Saskeh v3"
global.ownergc = "-"
global.botname = "Created By Farisofc"
global.ownerNumber = ["6288297877862@s.whatsapp.net"]
global.ownerweb = "https://farisstore.me"
// STICKER
global.themeemoji = '🪀'
global.xzn = 'pepek';
global.wm = "Faris.com"
global.packname = "Sticker By Faris"
global.author = "Faris\n\n"
//PREFIX
global.prefa = ['','!','.','#','&']
// Session
global.sessionName = 'session'//JANGAN DI UBAH
//TEKSPUSH
global.tekspushkon = ''
//API 
global.keyopenai ='iigf'
//SOSMED 2
global.myig = "https://github.com/farisofc/farisofc";
global.mytt = "https://tiktok.com/@farishayya";
global.mytw = "-";
global.mywa = "-";
global.myyt = "-";
global.website = "-l";
// => PTERODACTYL
global.domain = 'https://a.farisfreya.tech' // Isi Domain Lu
global.apikey = 'ptla_0FIMbiEGmNupFbUXkoEol6uDmXRrWxkT1BxIzwDMwPo' // Isi Apikey Plta Lu
global.capikey = 'ptlc_xqMABXqAGMI6dPLxDpIGn4omtTY0m2EX0mwVeVjnjcN' // Isi Apikey Pltc Lu
global.eggsnya = '5' // id eggs yang dipakai
global.location = '15' // id location
//
global.limitawal = {
    premium: "Infinity",
    free: 5
}

//media target
global.thumb = { url: 'https://telegra.ph/file/c2e84a4776ee6c47aa3a5.jpg' }//ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//messages
global.mess = {
    selesai: 'Done !!', 
    owner: 'Khusus Owner',
    private: 'Khusus Private',
    group: 'Khusus Group',
    wait: 'Sebentar..',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
