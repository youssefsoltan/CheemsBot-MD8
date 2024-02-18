const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = true //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['201277272498'] //ur owner number
global.ownernomer = "201277272498" //ur owner number2
global.ownername = "YoUsSeF Al SoLtAn" //ur owner name
global.ytname = "YOUSSEF-AL.SOLTAN" //ur yt chanel name
global.socialm = "whats: 201277272498 //ur github or insta name
global.location = "Egypt, Alex, Alex" //ur location

//new
global.botname = "BOT AL SOLTAN"
global.ownernumber = '201277272498'
global.ownername = 'YOUSSEF AL SOLTAN'
global.ownerNumber = ["201277272498@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@YOUSSEF-ALSOLTN?si=yBGRYrmHBxF_7bqf"
global.websitex = "https://youtube.com/@YOUSSEF-ALSOLTN?si=yBGRYrmHBxF_7bqf"
global.wagc = "https://whatsapp.com/channel/0029VaL2bnW0rGiPZq8B5S2M"
global.themeemoji = '🪀'
global.wm = " Bot AL SOLTAN Inc."
global.botscript = 'https://whatsapp.com/channel/0029VaL2bnW0rGiPZq8B5S2M' //script link
global.packname = "BOT | By: youssef al soltan"
global.author = "bot alsoltan\n\n"
global.creator = "201277272498@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: '*تم ياعزيزي!*', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
