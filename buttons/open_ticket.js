const _0x1ce3b6=_0x4df0;(function(_0x183d0a,_0x13dfb7){const _0x135a65=_0x4df0,_0x1d6b88=_0x183d0a();while(!![]){try{const _0x1c064c=parseInt(_0x135a65(0x1d5))/0x1+parseInt(_0x135a65(0x1ef))/0x2+-parseInt(_0x135a65(0x1dc))/0x3*(parseInt(_0x135a65(0x1c5))/0x4)+parseInt(_0x135a65(0x1e0))/0x5+parseInt(_0x135a65(0x1e2))/0x6*(-parseInt(_0x135a65(0x1ec))/0x7)+parseInt(_0x135a65(0x1d6))/0x8+parseInt(_0x135a65(0x1c0))/0x9;if(_0x1c064c===_0x13dfb7)break;else _0x1d6b88['push'](_0x1d6b88['shift']());}catch(_0x26cdd6){_0x1d6b88['push'](_0x1d6b88['shift']());}}}(_0xc540,0x2df03));const client=require('../.'),config=client[_0x1ce3b6(0x1da)],{getTable,createEmbed}=require(_0x1ce3b6(0x1db)),{Client,GatewayIntentBits,Partials,EmbedBuilder,TextInputStyle,TextInputBuilder,ModalBuilder,PermissionsBitField,ChannelType,WebhookClient,ActivityType,Collection,StringSelectMenuOptionBuilder,ButtonBuilder,ActionRowBuilder,ButtonStyle,SlashCommandBuilder,StringSelectMenuBuilder}=require('discord.js'),{data}=require('../scommands/ticket/send_panel.js');function _0x4df0(_0x3090ac,_0x57f845){const _0xc540b1=_0xc540();return _0x4df0=function(_0x4df089,_0x66eaf2){_0x4df089=_0x4df089-0x1be;let _0x335df5=_0xc540b1[_0x4df089];return _0x335df5;},_0x4df0(_0x3090ac,_0x57f845);}module[_0x1ce3b6(0x1e3)]={'id':_0x1ce3b6(0x1f6),'permissions':[],'run':async(_0x3d2b68,_0x309f59)=>{const _0x5ae449=_0x1ce3b6,[_0x89d204,_0x2e470e]=_0x309f59['values'][0x0][_0x5ae449(0x1bf)]('-'),_0x4b580b=await getTable('ticket');let _0xbc2a42=![];await _0x309f59['deferReply']({'ephemeral':!![]});const _0x11692a=(await config['panels']['find'](_0x24b81f=>_0x24b81f[_0x5ae449(0x1f5)]==_0x2e470e))[_0x5ae449(0x207)][_0x5ae449(0x1f9)](_0x5740eb=>_0x5740eb[_0x5ae449(0x1fe)]==_0x89d204),_0x1a9a89=(await _0x4b580b[_0x5ae449(0x1e8)]())['filter'](_0x477dbb=>_0x477dbb['id'][_0x5ae449(0x1e7)](_0x5ae449(0x1c8))),_0x25834c=_0x1a9a89[_0x5ae449(0x205)](_0x46693f=>_0x46693f['value'][_0x5ae449(0x1cc)]===_0x309f59[_0x5ae449(0x1d0)]['id']&&_0x46693f[_0x5ae449(0x1f0)]['closed']===![]&&_0x46693f['value'][_0x5ae449(0x1ea)]==_0x11692a['ticket_name']&&_0x46693f[_0x5ae449(0x1f0)][_0x5ae449(0x202)]==_0x2e470e&&_0x46693f['value'][_0x5ae449(0x1d2)]==_0x309f59['guild']['id'])[_0x5ae449(0x1d1)];if(_0x11692a[_0x5ae449(0x1e9)]!=0x0){if(_0x25834c>=_0x11692a[_0x5ae449(0x1e9)])return _0x309f59['followUp'](_0x309f59[_0x5ae449(0x1d0)]+_0x5ae449(0x1c9)+_0x11692a[_0x5ae449(0x1e9)]);}const _0x457a6c=[{'id':_0x309f59[_0x5ae449(0x1d0)]['id'],'allow':[PermissionsBitField['Flags']['ViewChannel'],PermissionsBitField[_0x5ae449(0x201)][_0x5ae449(0x1c7)],PermissionsBitField['Flags'][_0x5ae449(0x1f3)],PermissionsBitField[_0x5ae449(0x201)][_0x5ae449(0x1d4)],PermissionsBitField[_0x5ae449(0x201)]['AttachFiles']]},{'id':_0x309f59[_0x5ae449(0x1d2)]['id'],'deny':[PermissionsBitField[_0x5ae449(0x201)][_0x5ae449(0x1e4)]]}];_0x11692a[_0x5ae449(0x1e1)][_0x5ae449(0x1f7)](_0x1e7677=>{const _0x4f0639=_0x5ae449,_0x59eee6=_0x309f59['guild'][_0x4f0639(0x1f1)][_0x4f0639(0x1df)][_0x4f0639(0x1c1)](_0x1e7677);_0x59eee6&&_0x457a6c['push']({'id':_0x59eee6['id'],'allow':[PermissionsBitField[_0x4f0639(0x201)][_0x4f0639(0x1e4)],PermissionsBitField['Flags'][_0x4f0639(0x1c7)],PermissionsBitField['Flags'][_0x4f0639(0x1f3)],PermissionsBitField[_0x4f0639(0x201)]['AddReactions'],PermissionsBitField[_0x4f0639(0x201)][_0x4f0639(0x1d7)]]});});const _0x47a1d3=_0x1a9a89[_0x5ae449(0x205)](_0x5146ac=>_0x5146ac[_0x5ae449(0x1f0)][_0x5ae449(0x1ea)]==_0x11692a[_0x5ae449(0x1fe)]&&_0x5146ac[_0x5ae449(0x1f0)][_0x5ae449(0x202)]==_0x2e470e&&_0x5146ac[_0x5ae449(0x1f0)][_0x5ae449(0x1d2)]==_0x309f59['guild']['id'])[_0x5ae449(0x1d1)];_0x309f59[_0x5ae449(0x1d2)][_0x5ae449(0x1f2)][_0x5ae449(0x1d3)]({'name':'ticket-'+_0x47a1d3,'type':ChannelType['GuildText'],'parent':_0x11692a[_0x5ae449(0x1c6)],'permissionOverwrites':_0x457a6c})[_0x5ae449(0x1fd)](async _0x8735c3=>{const _0x448c12=_0x5ae449;await _0x4b580b[_0x448c12(0x1c4)](_0x448c12(0x1c8)+_0x8735c3['id'],{'id':_0x47a1d3,'ticket':_0x11692a['ticket_name'],'panel':_0x2e470e,'guild':_0x309f59[_0x448c12(0x1d2)]['id'],'creator':_0x309f59[_0x448c12(0x1d0)]['id'],'invited':[],'createdAt':Date['now'](),'lastMsg':Date['now'](),'warn':![],'lastRename':Date['now'](),'warnRename':![],'reqUsers':[],'reqRename':![],'claimed':![],'claimedBy':null,'claimedAt':null,'closed':![],'closedBy':null,'closedAt':null,'voice':null,'MvoiceAt':null});const _0x4fbbfd=new ButtonBuilder()['setCustomId'](_0x448c12(0x1d8))[_0x448c12(0x204)](_0x448c12(0x1ce))[_0x448c12(0x1c2)]('🔒')[_0x448c12(0x1c3)](ButtonStyle[_0x448c12(0x1ee)]),_0xa21d60=new ButtonBuilder()[_0x448c12(0x1fa)]('admin_panel')[_0x448c12(0x204)](_0x448c12(0x1eb))['setEmoji']('⚙')[_0x448c12(0x1c3)](ButtonStyle[_0x448c12(0x1f8)]),_0x1af9fc=new ButtonBuilder()[_0x448c12(0x1fa)](_0x448c12(0x1cb))['setLabel']('لوحة\x20تحكم\x20العضو')['setEmoji']('🧾')['setStyle'](ButtonStyle['Secondary']),_0x442133=new ActionRowBuilder()[_0x448c12(0x203)](_0x4fbbfd,_0xa21d60,_0x1af9fc),_0x4c3d48=await createEmbed(_0x448c12(0x1ed)+_0x47a1d3,_0x11692a[_0x448c12(0x1f4)]||_0x448c12(0x1d9),_0x309f59);_0x11692a[_0x448c12(0x1f4)]==''&&_0x4c3d48['addFields']({'name':_0x448c12(0x200),'value':''+_0x47a1d3,'inline':!![]},{'name':_0x448c12(0x1e5),'value':'<@'+_0x309f59[_0x448c12(0x1d0)]['id']+'>','inline':!![]},{'name':'✔\x20Claim','value':_0x448c12(0x1cf),'inline':!![]},{'name':'​','value':'​','inline':!![]},{'name':'​','value':'​','inline':!![]},{'name':'​','value':'​','inline':!![]},{'name':_0x448c12(0x1ca),'value':_0x11692a['ticket_name'],'inline':!![]},{'name':'▶\x20Panel\x20Type','value':_0x2e470e,'inline':!![]},{'name':'🔓\x20Opened\x20In','value':_0x448c12(0x1ff)+Math[_0x448c12(0x206)](Date[_0x448c12(0x1de)]()/0x3e8)+'>','inline':!![]});let _0x405ec1='';return _0x405ec1+=''+_0x309f59[_0x448c12(0x1d0)],_0x11692a[_0x448c12(0x1e1)][_0x448c12(0x1f7)](_0x50d938=>{const _0x22884c=_0x448c12,_0x46df30=_0x309f59[_0x22884c(0x1d2)]['roles'][_0x22884c(0x1df)][_0x22884c(0x1c1)](_0x50d938);_0x46df30&&(_0x405ec1+=_0x22884c(0x1be)+_0x50d938+'>');}),_0x8735c3[_0x448c12(0x1fc)]({'content':_0x448c12(0x1fb)+_0x405ec1+_0x448c12(0x1cd),'embeds':[_0x4c3d48],'components':[_0x442133]})['then'](async _0x5e615d=>{const _0x157550=_0x448c12;await _0x4b580b[_0x157550(0x1c4)]('tickets_'+_0x8735c3['id']+_0x157550(0x1dd),_0x5e615d['id']);}),_0x309f59['followUp'](_0x448c12(0x1e6)+_0x8735c3);});}};function _0xc540(){const _0x222d49=['📩\x20Ticket\x20Type','user_panel','creator','\x20||','اغلاق\x20التذكرة','Not\x20claimed','user','length','guild','create','AddReactions','79544txqXwA','1651064GEOApJ','AttachFiles','close','**\x20**','config','.././functions.js','135819uMLgbn','.Msg','now','cache','1317945LUINyr','admin_roles','30PgliDk','exports','ViewChannel','🙍‍♂️\x20Creator','تم\x20فتح\x20التذكرة\x20بنجاح\x20','startsWith','all','limit','ticket','لوحة\x20تحكم\x20الأدارة','371301VrwStZ','ticket-','Danger','136432hXxXeJ','value','roles','channels','ReadMessageHistory','open_msg','name','open_ticket','forEach','Secondary','find','setCustomId','||\x20','send','then','ticket_name','<t:','#️⃣\x20Id','Flags','panel','addComponents','setLabel','filter','floor','tickets','<@&','split','1780470aVexLZ','get','setEmoji','setStyle','set','32kEIHGg','catagory','SendMessages','tickets_','\x20لقد\x20تعديت\x20عدد\x20التكتات\x20المسموح\x20به:\x20وهو\x20'];_0xc540=function(){return _0x222d49;};return _0xc540();}