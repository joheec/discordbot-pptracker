require('dotenv').config();
const fetch = require('isomorphic-fetch');
const Discord = require('discord.js');
const boards = require('./boards');

let channelId;
let mee6DashboardId;

if (process.env.NODE_ENV !== 'prod') {
  channelId = process.env.DEV_DISCORD_CHANNEL_ID;
  mee6DashboardId = process.env.DEV_MEE6_DASHBOARD_ID;
} else {
  channelId = process.env.PROD_DISCORD_CHANNEL_ID;
  mee6DashboardId = process.env.PROD_MEE6_DASHBOARD_ID;
}

const numberOfLeaders = process.env.USERS;
const leaderboardUrl = `https://mee6.xyz/api/plugins/levels/leaderboard/${mee6DashboardId}?limit=${numberOfLeaders}&page=0`;
const client = new Discord.Client();

client.login(process.env.DISCORD_BOT_TOKEN).then(async () => {
  console.log("[LOG] Successfully logged in");

  const channel = await client.channels.fetch(channelId);
  if(channel){
    console.log('[LOG] Fetching leaderboad data');
    fetch(leaderboardUrl)
      .then(res => {
        if (res.status !== 200) {
          throw res;
        }
        return res.json();
      })
      .then(({ players })=> {
        const boardType = process.env.BOARD_TYPE;
        const leaderboardMsg = boards[boardType](players.sort((a, b) => b.level - a.level));
        console.log('[LOG] Successfully formatted leaderboard data');
        channel.send(leaderboardMsg)
          .then(() => console.log('[LOG] Successfully sent leaderboard message'))
          .catch(err => console.error('[ERROR] Issue sending leaderboard message: ', err ))
          .then(() => client.destroy());
      })
      .catch(err => console.error('[ERROR] Issue fetching/formatting leaderboard data: ', err ));  
  } else {
      console.error("[ERROR] Unable to get channel");
      //if the bot doesn't have guild with the id guildid
      // or if the guild doesn't have the channel with id channelid
  }
})
.catch(err => console.error('[ERROR] Issue logging in: ', err ));