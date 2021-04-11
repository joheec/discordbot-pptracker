# Discord Bot, PP Tracker

This Discord Bot grabs data from the Mee6's leaderboard API and displays the top users' levels as a horizontal bar chart of :space_invader: emojis.

## Bot Message

PP LEADERBOARD

@username: :space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader:

@username: :space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader:

@username: :space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader:

@username: :space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader:

@username: :space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader::space_invader:

@username(she/her): :space_invader::space_invader:

@username: :space_invader::space_invader:

@username: :space_invader::space_invader:

@username: :space_invader:

@username: :space_invader:


                                     !
                                     !
                                     !
                                |--| ^ |--|

## .env

### DISCORD_BOT_TOKEN

* Go to Developer Portal, Applications: <https://discord.com/developers/applications/>
* Create an application
* In the left-hand menu > Settings > Bot
* Copy Bot Token: Build-A-Bot > Token > Copy

### DEV|PROD_MEE6_DASHBOARD_ID

* Go to MEE6 Dashboard: <https://mee6.xyz/dashboard>
* Select a Discord server to add the PP Tracker to via Go to Dashboard
* Use the last section of the URL route that represents the Dashboard ID

### DEV|PROD_DISCORD_CHANNEL_ID

* In Discord, go to User Setting (the gear in the left-hand menu, at the bottom right)
* App Settings > Advanced > Developer Mode: ON
* Back on the server, right click the channel you'd like the PP Tracker to post on
* Copy ID

## Customize

The default number of users listed in the leaderboard is 10. To change, update the `start` and `dev` scripts in `package.json`. The number of user is set by the env variable, `USERS`.
