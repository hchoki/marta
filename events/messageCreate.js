module.exports = (client, message) => {
  if (message.author.bot) return;

  const linkRegex = /https?:\/\/(www\.)?(twitter\.com|x\.com)\/[^\s]*/g;
  const foundLinks = message.content.match(linkRegex);

  if (message.embeds.length === 0 && foundLinks) {
    let replyText = '';
    for (const link of foundLinks) {
      const convertedLink = link.replace(/(twitter\.com|x\.com)/, 'vxtwitter.com');
      replyText += `${convertedLink}\n`;
    }
    message.reply(replyText);
  }
};