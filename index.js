const {GatewayIntentBits , Client} = require('discord.js')
const client = new Client({
    ws:{
        properties: {
            browser: "Discord Client",//Discord Web | Discord Android | Discord Ios
            os: "Windows" //Other | Android | iOS | TempleOS | Linux | Mac OS X
        },
    },
    intents: [GatewayIntentBits.Guilds],
})

client.on('ready', async ()=> {
    console.log(`${client.user.tag} Is Now Online!`)
    client.user.setStatus('online')//idle | online | dnd
})
//Source Code by ! Mohammad Mahdi#4614
client.login(require('./config.json').token)
//npm i discord.js@14.1.1