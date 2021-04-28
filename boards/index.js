const getMario = require('./mario');
const getSpaceInvaders = require('./space-invaders');

module.exports = {
    spaceInvaders: getSpaceInvaders,
    mario: getMario,
};