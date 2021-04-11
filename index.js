require('dotenv').config();
const fetch = require('isomorphic-fetch');
const Discord = require('discord.js');

let channelId;
let mee6DashboardId;

if (process.env.NODE_ENV !== 'production') {
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
  console.log("Logged in");

  const channel = await client.channels.fetch(channelId);
  if(channel){
    fetch(leaderboardUrl)
      .then(res => res.json())
      .then(({ players }) => 
        `\nPP LEADERBOARD\n${players.sort((a, b) => b.level - a.level).map(p => (
          `<@${p.id}>: ${'👾'.repeat(p.level)}`
        )).join('\n')}
                                  !
                                  !
                                  !
                           |--__| ^ |__--|`
      )
      .then(leaderboardMsg => {
        channel.send(leaderboardMsg)
          .catch(err => console.error({ err }))
          .then(() => client.destroy());
      })
      .catch(err => console.error({ err }));  
  } else {
      console.error("Unable to get channel");
      //if the bot doesn't have guild with the id guildid
      // or if the guild doesn't have the channel with id channelid
  }
})
.catch(err => console.error({ err }));