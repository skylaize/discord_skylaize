var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Tropical Heberg la qualité à bas prix !",
assets : {
large_image : "Image",
large_text : "Playing" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Tropical Heberg" , url : "https:/discord.gg/kv874HzHMD"},{label : "Tropical Leaks",url : "https:/discord.gg/EVbYRNPRcW"}]
}
})
})
client.login({ clientId : "825797090982494259" }).catch(console.error);