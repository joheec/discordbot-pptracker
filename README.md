# Discord Bot, PP Tracker

This Discord Bot grabs data from the Mee6's leaderboard API and displays the top users' levels as a horizontal bar chart of :space_invader: emojis.
A bash script, weekly-scheduler.sh, executes the bot instead of a node script to prevent posting everytime the Heroku app starts.

Bash command to run prod with board type, spaceInvaders

```bash
bash weekly-scheduler.sh prod spaceInvaders
```

Bash command to run prod with board type, spaceInvaders

```bash
bash weekly-scheduler.sh dev spaceInvaders
```

## Bot Message Board Types

- spaceInvaders
- mario

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

## Weekly Heroku Scheduler

To run as a weekly post, you can use Heroku. The Heroku add-on, Heroku Scheduler, does not have a weekly cadence option. I created a bash script that will check the date when it runs on the daily cadence that Heroku provides. If the date is a Sunday, script will execute one of two node commands depending on the passed in env value. Depending on the environment, one of the following two commands needs to be added to the Heroku Scheduler > Job > Run Command.

```bash
# PROD ENV
heroku run bash weekly-scheduler.sh prod

# DEV ENV
heroku run bash weekly-scheduler.sh dev
```

## Customize

### Number of Leaderboard Participants

The default number of users listed in the leaderboard is 10.
To change the number of users in the leaderboard, in the weekly scheduler bash script, update the `USERS` values in `weekly-scheduler.sh`

### Weekly Cadance

The default date the Heroku Scheduler job runs is Sunday.
To change the day of the week the weekly scheduler runs, in `weekly-scheduler.sh` change the number in `if [ "$(date +%u)" = 7 ]`. Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6, Sunday = 7.
