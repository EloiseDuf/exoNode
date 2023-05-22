const userInfo = require('./information.js');

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Je m'appelle ${userInfo.name} et je suis dans le campus ${userInfo.camp}`,
    e : "oO",
    T : "U "
}));