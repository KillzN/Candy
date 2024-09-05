const handler = async (m, {conn}) => {
  m.reply(global.reglas);
};
handler.command = /^(reglas|rules)$/i;
export default handler;

global.reglas = `
REGLAS DE GRUPO!
Wazaaaaa
`;
