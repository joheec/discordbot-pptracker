const addBowser = stats => stats.slice(0, -3) + '🐉';

const getMario = players => {
    const title = `\nPP LEADERBOARD`;

    if (players.length > 0) {
        const firstPlayerStat = `\n<@${players[0].id}>: ${players[0].level > 0 ? '🏃' + '🐢'.repeat(players[0].level - 1) : ''}`;
        const restOfPlayerStats = `\n${players.slice(1).map(p => (`<@${p.id}>: ${'🍄'.repeat(p.level)}`)).join('\n')}`
        const stats = firstPlayerStat + restOfPlayerStats;
        return title + (players.slice(-1)[0].level > 0 ? addBowser(stats) : stats);
    }

    return title;
};

module.exports = getMario;