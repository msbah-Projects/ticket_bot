function _0x5819(_0x3d8d71,_0x3e08da){const _0x1e301d=_0x1e30();return _0x5819=function(_0x58198c,_0x56d772){_0x58198c=_0x58198c-0x1d6;let _0x542baa=_0x1e301d[_0x58198c];return _0x542baa;},_0x5819(_0x3d8d71,_0x3e08da);}const _0x2160c6=_0x5819;(function(_0x136b8a,_0x7a0eed){const _0x5c0263=_0x5819,_0x39e434=_0x136b8a();while(!![]){try{const _0x82cd50=parseInt(_0x5c0263(0x1e9))/0x1+parseInt(_0x5c0263(0x1d7))/0x2*(parseInt(_0x5c0263(0x1eb))/0x3)+parseInt(_0x5c0263(0x1fc))/0x4+parseInt(_0x5c0263(0x1e0))/0x5+-parseInt(_0x5c0263(0x201))/0x6*(-parseInt(_0x5c0263(0x1f0))/0x7)+parseInt(_0x5c0263(0x1e2))/0x8*(parseInt(_0x5c0263(0x1ff))/0x9)+-parseInt(_0x5c0263(0x1f2))/0xa*(parseInt(_0x5c0263(0x1f1))/0xb);if(_0x82cd50===_0x7a0eed)break;else _0x39e434['push'](_0x39e434['shift']());}catch(_0x1a44a0){_0x39e434['push'](_0x39e434['shift']());}}}(_0x1e30,0xc0d87));const {SlashCommandBuilder,EmbedBuilder,StringSelectMenuBuilder,StringSelectMenuOptionBuilder,ActionRowBuilder}=require(_0x2160c6(0x1da)),config=require(_0x2160c6(0x1dc));let panels=config[_0x2160c6(0x1fd)][_0x2160c6(0x1f3)](_0x1fce50=>{const _0x221969=_0x2160c6;return{'name':_0x1fce50['name'],'value':_0x1fce50[_0x221969(0x1e6)]};});module[_0x2160c6(0x1ec)]={'data':new SlashCommandBuilder()[_0x2160c6(0x1e5)](_0x2160c6(0x1d6))[_0x2160c6(0x1f7)](_0x2160c6(0x1f4))['addStringOption'](_0x32e29b=>_0x32e29b[_0x2160c6(0x1e5)](_0x2160c6(0x1e6))['setDescription']('اسم\x20البانل\x20التي\x20تريد\x20ارسالها')['setRequired'](!![])[_0x2160c6(0x1fb)](panels)),async 'execute'(_0x278bf8){const _0x42d5c6=_0x2160c6,_0x563630=_0x278bf8['client'][_0x42d5c6(0x1db)],_0x4c1807=_0x278bf8[_0x42d5c6(0x1e4)][_0x42d5c6(0x1ee)](_0x42d5c6(0x1e6)),_0x5dc84b=config[_0x42d5c6(0x1fd)][_0x42d5c6(0x1dd)](_0x16b9e6=>_0x16b9e6['name']==_0x4c1807);if(!_0x5dc84b)return await _0x278bf8[_0x42d5c6(0x1e8)]({'content':'حدث\x20خطأ\x20غير\x20متوقع.\x20يرجى\x20إعادة\x20المحاولة\x20لاحقًا','ephemeral':!![]});const _0x143cbd=await _0x563630[_0x42d5c6(0x1df)](_0x5dc84b[_0x42d5c6(0x1e6)],_0x5dc84b['description'],_0x278bf8);_0x5dc84b[_0x42d5c6(0x1e3)]!=''&&_0x143cbd[_0x42d5c6(0x200)](_0x5dc84b[_0x42d5c6(0x1e3)]);const _0x52c430=new StringSelectMenuBuilder()[_0x42d5c6(0x1ea)](_0x42d5c6(0x1ef))['setPlaceholder'](_0x42d5c6(0x1d9));_0x5dc84b[_0x42d5c6(0x1fa)][_0x42d5c6(0x1ed)](_0x324437=>{const _0xc649a7=_0x42d5c6,_0x1d5d02=new StringSelectMenuOptionBuilder()[_0xc649a7(0x1e1)](_0x324437[_0xc649a7(0x202)])[_0xc649a7(0x1f7)](_0x324437['ticket_description'])[_0xc649a7(0x1f5)](_0x324437['ticket_name']+'-'+_0x5dc84b['name']);_0x324437['emoji']&&_0x324437['emoji']!=''&&_0x1d5d02[_0xc649a7(0x1f8)](_0x324437[_0xc649a7(0x1f9)]),_0x52c430[_0xc649a7(0x1d8)](_0x1d5d02);});const _0x3ec4c9=new ActionRowBuilder()[_0x42d5c6(0x1f6)](_0x52c430);await _0x278bf8[_0x42d5c6(0x1fe)][_0x42d5c6(0x1de)]({'embeds':[_0x143cbd],'components':[_0x3ec4c9]}),await _0x278bf8['reply']({'content':_0x42d5c6(0x1e7)});}};function _0x1e30(){const _0x47d76b=['options','setName','name','تم\x20ارسال\x20البانل\x20بنجاح','reply','767919cUDFQT','setCustomId','1459200efEwqh','exports','forEach','getString','open_ticket','91nMvnmg','3883yhrjYP','147670ngbXVm','map','لأرسال\x20بانل\x20بروم\x20معين','setValue','addComponents','setDescription','setEmoji','emoji','tickets','addChoices','1718508TqzKnW','panels','channel','9OJTsxz','setImage','362694VGxxzo','ticket_name','send_panel','4ZrCXNK','addOptions','الرجاء\x20اختيار\x20التكت\x20المناسب\x20لك','discord.js','functions','../../config.json','find','send','createEmbed','7573390aMRHnj','setLabel','12254280xcjQWc','img'];_0x1e30=function(){return _0x47d76b;};return _0x1e30();}