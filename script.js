const action = ["dance", "have a drink", "play video games", "sleep", "watch your favorite movie", "eat a burger", "bake cookies", "enjoy a coffee", "drink champagne"];

const celebrity = ["a dog", "Chuck Norris", "Brad Pitt", "Natalie Portman", "Donald Trump", "Mariah Carey", "Gordon Ramsay", "Eric Cartman", "Bugs Bunny", "Mickey Mouse"];

const place = ["in a park", "on an island", "at the police station", "in a garage", "on a boat", "in the middle of nowhere", "in a treehouse", "in a private jet"];

const weather = ["sunny", "rainy", "tornado", "stormy", "cloudy", "hurricane", "heat wave"];

const pickRandom = array => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

let mixedMessage = `You're gonna ${pickRandom(action)} with ${pickRandom(celebrity)} ${pickRandom(place)} on a ${pickRandom(weather)} day !`;

console.log(mixedMessage);
