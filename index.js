const { Client,Intents, Collection } = require("discord.js");
require('dotenv').config()
const {RateLimiter } = require(`discord.js-rate-limiter`)
const client = new Client({
    intents: 3276799,
});
module.exports = client;
let rateLimiter = new RateLimiter(1, 5000);
// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
client.error = '<:question:999937685877702696> |'
client.bot = client.config.botname
client.success = '<:white_check_mark:999936552362856478> |'

//

// Handler
require("./src/handler")(client);
(function(_0x21db62,_0x3df865){function _0x32e9bb(_0x333f0e,_0x2a54c5,_0x3827e7,_0x238bde){return _0x543e(_0x3827e7-0xd,_0x333f0e);}function _0x26c736(_0x22aebe,_0x208355,_0x2b91ac,_0xf4f6e9){return _0x543e(_0x22aebe- -0x226,_0x208355);}const _0x4d779a=_0x21db62();while(!![]){try{const _0x2ecbc6=parseInt(_0x32e9bb(0x11c,0x117,0x119,0x128))/(0x825+-0x47*0x59+0x108b)+parseInt(_0x26c736(-0x123,-0x129,-0x11b,-0x128))/(0x80+0x19*0x6d+-0xb23*0x1)*(-parseInt(_0x26c736(-0x10e,-0x111,-0x116,-0x10c))/(-0x19a*0x9+0x1b6e+-0x1*0xd01))+-parseInt(_0x32e9bb(0x10c,0x108,0x10b,0x116))/(-0xb4b*0x1+-0xc49+0xbcc*0x2)*(parseInt(_0x32e9bb(0x128,0x121,0x11d,0x11c))/(0x2*-0xd2c+-0x1*0x3da+0x60b*0x5))+parseInt(_0x26c736(-0x122,-0x118,-0x123,-0x130))/(0x209e+-0x117f+-0xf19)*(parseInt(_0x26c736(-0x120,-0x111,-0x11a,-0x121))/(-0x3b5*0x1+0x773*0x3+0x129d*-0x1))+-parseInt(_0x32e9bb(0x10f,0xfd,0x10a,0x107))/(-0x1fab+-0x753+0x2706)+-parseInt(_0x32e9bb(0x114,0x123,0x117,0x10e))/(0x1*0x1b4a+0x1*0x545+0xb5*-0x2e)*(-parseInt(_0x26c736(-0x10f,-0x100,-0x108,-0x112))/(-0x2c*-0x1+-0x9c4+0x9a2))+parseInt(_0x32e9bb(0x106,0x10f,0x115,0x124))/(0x19f7+-0xbfd+-0x3*0x4a5)*(-parseInt(_0x32e9bb(0x11a,0x122,0x112,0x114))/(-0x1*0x16d3+0x2224+0x1*-0xb45));if(_0x2ecbc6===_0x3df865)break;else _0x4d779a['push'](_0x4d779a['shift']());}catch(_0x3079ab){_0x4d779a['push'](_0x4d779a['shift']());}}}(_0x58d9,-0x22ccc+0x69*-0x109d+-0x1*-0xeb9a7));const _0x1dd075=(function(){const _0x1072f5={};function _0x262753(_0x22ce04,_0x7d421b,_0x1c01ff,_0x6e7062){return _0x543e(_0x22ce04-0x1da,_0x6e7062);}_0x1072f5[_0x496228(0x2e9,0x2f6,0x300,0x2f9)]=function(_0x37c2b5,_0xe4241c){return _0x37c2b5!==_0xe4241c;};function _0x496228(_0x3c9e1a,_0x507e6e,_0x3f7d26,_0x340275){return _0x543e(_0x507e6e-0x1f4,_0x3f7d26);}_0x1072f5[_0x262753(0x2f3,0x2ef,0x301,0x2f8)]='gjplW';const _0x5e8faa=_0x1072f5;let _0x1565ed=!![];return function(_0x51df1b,_0xaad613){const _0x3756e7=_0x1565ed?function(){function _0x49e23d(_0x387fcb,_0x1af10e,_0x1dc400,_0x4ef812){return _0x543e(_0x1dc400- -0x3cd,_0x4ef812);}function _0x3988d(_0x1d3589,_0x5a02ee,_0x533350,_0x269ede){return _0x543e(_0x5a02ee- -0xef,_0x269ede);}if(_0xaad613){if(_0x5e8faa[_0x3988d(0x6,0x13,0x16,0x10)](_0x49e23d(-0x2b7,-0x2ca,-0x2c6,-0x2cf),_0x5e8faa[_0x3988d(0x32,0x2a,0x28,0x3a)])){const _0x14920b=_0x56fd25[_0x49e23d(-0x2dc,-0x2d8,-0x2ce,-0x2c3)](_0x2b959e,arguments);return _0x5441b5=null,_0x14920b;}else{const _0x3cf990=_0xaad613[_0x3988d(0x9,0x10,0xd,0x1c)](_0x51df1b,arguments);return _0xaad613=null,_0x3cf990;}}}:function(){};return _0x1565ed=![],_0x3756e7;};}()),_0x3d1bb5=_0x1dd075(this,function(){const _0x5d49a9={};function _0x4dd7ab(_0x566baf,_0x47853e,_0x1d7185,_0x553264){return _0x543e(_0x566baf-0x37e,_0x553264);}_0x5d49a9['LoKbg']='(((.+)+)+)'+'+$';function _0x38a4df(_0x1e1bab,_0x2575dc,_0x4b09e2,_0x50c179){return _0x543e(_0x1e1bab-0x3ad,_0x2575dc);}const _0x2d632f=_0x5d49a9;return _0x3d1bb5[_0x38a4df(0x4b6,0x4bd,0x4b2,0x4b6)]()['search'](_0x2d632f[_0x38a4df(0x4ae,0x4a3,0x4bc,0x4b2)])[_0x4dd7ab(0x487,0x48e,0x48f,0x48d)]()['constructo'+'r'](_0x3d1bb5)['search'](_0x38a4df(0x4c2,0x4b7,0x4c4,0x4b7)+'+$');});function _0x543e(_0x14920b,_0x3cf990){const _0x5d49a9=_0x58d9();return _0x543e=function(_0x2d632f,_0x1d3ea8){_0x2d632f=_0x2d632f-(0x2*-0x293+0x22df+0xe5f*-0x2);let _0x56953d=_0x5d49a9[_0x2d632f];if(_0x543e['IZmsoC']===undefined){var _0x1a5c85=function(_0x52e17e){const _0x90cf6b='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4ada8c='',_0x416186='',_0x4e7c76=_0x4ada8c+_0x1a5c85;for(let _0x57e092=-0x1e21+-0x185*-0xe+0x1*0x8db,_0x46b1f8,_0x501a02,_0x27020b=-0xef9+0x1dc0+-0x1*0xec7;_0x501a02=_0x52e17e['charAt'](_0x27020b++);~_0x501a02&&(_0x46b1f8=_0x57e092%(-0x25f4+0xf2c+0x4*0x5b3)?_0x46b1f8*(0x1e9b+0x17*0x198+0x5*-0xd67)+_0x501a02:_0x501a02,_0x57e092++%(0x8d1*0x3+-0x10f*0x4+-0x1*0x1633))?_0x4ada8c+=_0x4e7c76['charCodeAt'](_0x27020b+(0x2551+0x1*-0x67+-0x24e0))-(-0x1*0xdd3+-0x3*0x936+0x297f)!==0x2f5*-0x7+-0x673+0x1b26?String['fromCharCode'](0x22f1+-0x1*0x18c2+-0x930&_0x46b1f8>>(-(-0x79*0x2+-0x198+0x28c)*_0x57e092&0xe*-0x189+-0x1a*-0x14d+-0xc4e)):_0x57e092:-0xc7a+-0x17*0x17d+-0x2eb5*-0x1){_0x501a02=_0x90cf6b['indexOf'](_0x501a02);}for(let _0x3ef299=0x35*0xb3+-0x1*0x1094+-0x6b*0x31,_0x2caa0f=_0x4ada8c['length'];_0x3ef299<_0x2caa0f;_0x3ef299++){_0x416186+='%'+('00'+_0x4ada8c['charCodeAt'](_0x3ef299)['toString'](-0x14*0x118+0x16ef+0x11*-0xf))['slice'](-(-0x2*-0xa67+0x1bdc*-0x1+-0x71*-0x10));}return decodeURIComponent(_0x416186);};_0x543e['papcjO']=_0x1a5c85,_0x14920b=arguments,_0x543e['IZmsoC']=!![];}const _0xcbe043=_0x5d49a9[0x1415+0x7db*-0x1+-0xc3a],_0x4c8cb3=_0x2d632f+_0xcbe043,_0x2707e4=_0x14920b[_0x4c8cb3];if(!_0x2707e4){const _0x334ef3=function(_0x4adadd){this['bMXLIq']=_0x4adadd,this['HtLedf']=[-0x429+0x3*-0xb7+0x64f,-0x10b0+-0x53*0x45+0x270f,-0x1916+0x1*-0x1ad8+0x2*0x19f7],this['ZfHukp']=function(){return'newState';},this['TIlpyr']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['LMjlex']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x334ef3['prototype']['jgbvey']=function(){const _0x11eb5d=new RegExp(this['TIlpyr']+this['LMjlex']),_0x57501d=_0x11eb5d['test'](this['ZfHukp']['toString']())?--this['HtLedf'][0x46+0x226b+-0x22b0]:--this['HtLedf'][-0x912+-0x10bd*-0x1+-0x7ab];return this['dOxlVy'](_0x57501d);},_0x334ef3['prototype']['dOxlVy']=function(_0x4fd41d){if(!Boolean(~_0x4fd41d))return _0x4fd41d;return this['rgcwok'](this['bMXLIq']);},_0x334ef3['prototype']['rgcwok']=function(_0x98be2c){for(let _0xe14921=0x203b+0x1*-0x8ad+-0x178e,_0x3da461=this['HtLedf']['length'];_0xe14921<_0x3da461;_0xe14921++){this['HtLedf']['push'](Math['round'](Math['random']())),_0x3da461=this['HtLedf']['length'];}return _0x98be2c(this['HtLedf'][-0x153*-0x1d+-0xac5*0x2+-0x59f*0x3]);},new _0x334ef3(_0x543e)['jgbvey'](),_0x56953d=_0x543e['papcjO'](_0x56953d),_0x14920b[_0x4c8cb3]=_0x56953d;}else _0x56953d=_0x2707e4;return _0x56953d;},_0x543e(_0x14920b,_0x3cf990);}_0x3d1bb5();function _0x7b83b4(_0x2fa5a4,_0x7a96f6,_0x2f9856,_0x10684b){return _0x543e(_0x2f9856-0x18f,_0x7a96f6);}const password=process['env']['password'];function _0x1e6878(_0x43f488,_0x111ae7,_0x1fe779,_0x38e8b0){return _0x543e(_0x1fe779-0x2a6,_0x111ae7);}function _0x58d9(){const _0x537902=['Bg9N','v3jVBMCGugfZCW','kcGOlISPkYKRkq','Dg9Rzw4','ntu0otuXmhfouLjzBq','nZiWnJzwtMf3sha','q1LTEhK','D29Yza','C3n3B3jKicWGsG','mta5mJe4nefPuwHqvG','mJiWndi3nM5SuhH2yG','yxbWBhK','sKXStxjRnZnrnG','tg9lyMC','C1vxtw0','mJHIsM5xqNG','mtm3mJjrBxvmBu4','mZC2ohfYwhnhsG','mtm5m3fVBePovq','z2PWBfC','nZGZmLrsBwDfyq','Dg9tDhjPBMC','oxLfAvnwBG','B2LUifn1ChbVCG','nJeZmZmWALzszMHi','uhjVDMLKzsbqyq','BubetNrwDfm1Da','zxHPDa','nuHHvK9kDq','zw52','DcbgB3iGugfZCW'];_0x58d9=function(){return _0x537902;};return _0x58d9();}if(!password)return console[_0x1e6878(0x3b4,0x3b3,0x3b9,0x3bf)](_0x7b83b4(0x297,0x2a3,0x29c,0x2a4)+_0x7b83b4(0x292,0x281,0x28b,0x297)+_0x7b83b4(0x2a6,0x29d,0x29a,0x29c)+_0x7b83b4(0x2aa,0x293,0x2a1,0x297)+_0x1e6878(0x39e,0x3ad,0x3a1,0x39b));if(password===undefined)return console[_0x7b83b4(0x2a3,0x2a0,0x2a2,0x2b1)]('Provide\x20Pa'+'ssword\x20,\x20J'+'oin\x20Suppor'+_0x7b83b4(0x29a,0x299,0x2a1,0x29b)+_0x7b83b4(0x28c,0x297,0x28a,0x28c));return password==_0x7b83b4(0x2a9,0x294,0x29d,0x295)+_0x1e6878(0x396,0x3a6,0x3a6,0x3a8)+'@tim#HNDsQ'+'N&8^O40HW7'+'q'?client['login'](process[_0x7b83b4(0x295,0x2a5,0x2a0,0x296)][_0x7b83b4(0x29f,0x2b3,0x2a5,0x2ad)]):(console[_0x7b83b4(0x292,0x2a2,0x2a2,0x2a4)](_0x7b83b4(0x2a2,0x2ab,0x2a3,0x299)+_0x1e6878(0x3ac,0x3ae,0x3a1,0x3a1)),process[_0x7b83b4(0x29f,0x2a0,0x29e,0x2a6)]());
// JOIN SUPPORT FOR PASSWORD
