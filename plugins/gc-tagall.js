const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.gc_tagall

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎:* ${pesan}`;
  let teks = `*> 𝗔𝗰𝘁𝗶𝘃𝗲𝗻𝘀𝗲 𝗽𝗹𝗮𝗻𝘁𝗮𝘀 𝗲𝘀 𝗵𝗼𝗿𝗮 𝗱𝗲 𝘁𝗲𝗻𝗲𝗿 𝘂𝗻 𝗯𝗼𝗻𝗶𝘁𝗼 𝗱𝗶́𝗮*\n\n ${oi}\n\n➥ _*@the_candy_ff:*_\n`;
  for (const mem of participants) {
    teks += `🍭 ⇝ @${mem.id.split('@')[0]}\n`;
  }
  teks += `└ *Cᴀɴᴅʏ-Bᴏᴛ ⇝@the_candy_ff*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación|putos)$/i;
handler.admin = true;
handler.group = true;
export default handler;