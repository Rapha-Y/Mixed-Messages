const items = [
    'Divine Sunderer', 'Duskblade of Draktharr', 'Eclipse', 'Everfrost', 'Frostfire Gauntlet',
    'Galeforce', 'Goredrinker', 'Hextech Rocketbelt', 'Immortal Shieldbow', 'Imperial Mandate',
    'Kraken Slayer', 'Liandry\'s Anguish', 'Locket of the Iron Solari', 'Luden\'s Tempest',
    'Moonstone Renewer', 'Night Harvester', 'Prowler\'s Claw', 'Riftmaker', 
    'Shurelya\s Battlesong', 'Stridebreaker', 'Sunfire Aegis', 'Trinity Force', 'Turbo Chemtank'
];
const champions = [
    'Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 
    'Aurelion Sol', 'Azir', 'Bard', 'Blitzcrank', 'Brand', 'Braum', 'Caitlyn', 'Camille',
    'Cassiopeia', 'Cho\'Gath', 'Corki', 'Darius', 'Diana', 'Dr. Mundo', 'Draven', 'Ekko',
    'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank',
    'Garen', 'Gnar', 'Gragas', 'Graves', 'Hecarim', 'Heimerdinger', 'Illaoi', 'Irelia',
    'Ivern', 'Janna', 'Jarvan IV', 'Jax', 'Jayce', 'Jhin', 'Jinx', 'Kai\'Sa', 'Kalista',
    'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', 'Kha\'Zix',
    'Kindred', 'Kled', 'Kog\'Maw', 'LeBlanc', 'Lee Sin', 'Leona', 'Lillia', 'Lissandra', 
    'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'Master Yi', 'Miss Fortune',
    'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Neeko', 'Nidalee', 'Nocturne',
    'Nunu & Willump', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana',
    'Quinn', 'Rakan', 'Rammus', 'Rek\'Sai', 'Renekton', 'Rengar', 'Riven', 'Rumble', 
    'Ryze', 'Samira', 'Sejuani', 'Senna', 'Seraphine', 'Sett', 'Shaco', 'Shen', 'Shyvana',
    'Singed', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Sylas', 'Syndra',
    'Tahm Kench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle',
    'Tryndamere', 'Twisted Fate', 'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar',
    'Vel\'Koz', 'Vi', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Wukong', 'Xayah',
    'Xerath', 'Xin Zhao', 'Yasuo', 'Yone', 'Yorick', 'Yuumi', 'Zac', 'Zed', 'Ziggs',
    'Zilean', 'Zoe', 'Zyra'
];
const runes = [
    'Press the Attack', 'Lethal Tempo', 'Fleet Footwork', 'Conqueror', 'Electrocute', 
    'Predator', 'Dark Harvest', 'Hail of Blades', 'Summon Aery', 'Arcane Comet', 'Phase Rush',
    'Grasp of the Undying', 'Aftershock', 'Guardian', 'Glacial Augment', 'Unsealed Spellbook',
    'Prototype: Omnistone'
];

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