const getSpaceInvaders = players => (
    `\nPP LEADERBOARD\n${players.map(p => (`<@${p.id}>: ${'👾'.repeat(p.level)}`)).join('\n')}
                              !
                              !
                              !
                       |--__| ^ |__--|`
);

module.exports = getSpaceInvaders;