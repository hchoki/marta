require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages
  ]
});

client.once('ready', () => {
  console.log('Ready!');
});

client.on('voiceStateUpdate', (oldState, newState) => {
  const username = newState.member ? newState.member.user.tag : oldState.member.user.tag;
  const timestamp = Math.floor(new Date().getTime() / 1000);
  let message = '';

  if (!oldState.channelId && newState.channelId) {
    message = `<t:${timestamp}:R> | ${username} entrou no canal ${newState.channel.name}.`;
  } 
  else if (oldState.channelId && !newState.channelId) {
    message = `<t:${timestamp}:R> | ${username} saiu do canal ${oldState.channel.name}.`;
  } 
  else if (oldState.channelId !== newState.channelId) {
    message = `<t:${timestamp}:R> | ${username} trocou do canal ${oldState.channel.name} para ${newState.channel.name}.`;
  }

  if (message) {
    const textChannel = client.channels.cache.get(process.env.JOIN_TEXT_CHANNEL_ID);
    textChannel.send(message);
  }
});


client.on('messageCreate', message => {
  if (message.author.bot) return;

  const twitterRegex = /https?:\/\/(www\.)?twitter\.com\/[^\s]*/g;
  const foundLinks = message.content.match(twitterRegex);
  
  if (message.embeds.length == 0 && foundLinks) {
    let replyText = "";
      for (let link of foundLinks) {
          let convertedLink = link.replace('twitter.com', 'vxtwitter.com');
          replyText += `${convertedLink}\n`;
      }
      message.reply(replyText);
  }
});

// Log in with the bot token
client.login(process.env.TOKEN);