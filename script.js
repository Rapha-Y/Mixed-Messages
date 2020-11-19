const items = require('./data/items.js').items;
const champions = require('./data/champions.js').champions;
const runes = require('./data/runes.js').runes;

function generateMsg() {
    // Pick a random item
    let itemIndex = Math.floor(Math.random() * (items.length))
    let item = items[itemIndex];

    // Pick a random champion
    let championIndex = Math.floor(Math.random() * (champions.length))
    let champion = champions[championIndex];

    // Pick a random rune
    let runeIndex = Math.floor(Math.random() * (runes.length))
    let rune = runes[runeIndex];

    let message = `Play ${champion}, with ${rune} as your main rune and ${item} as your first item.`;
    return message;
}

console.log(generateMsg());