exports.baseLevelPath = require.resolve('../../blocks-common/.bem/level.js');
for (var n in level) exports[n] = level[n];

console.log(exports);