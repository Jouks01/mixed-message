const action = ["dance", "have a drink", "play video games", "sleep", "watch your favorite movie", "eat a burger", "bake cookies", "enjoy a coffee", "drink champagne"];

const celebrity = ["a dog", "Chuck Norris", "Brad Pitt", "Natalie Portman", "Donald Trump", "Mariah Carey", "Gordon Ramsay", "Eric Cartman", "Bugs Bunny", "Mickey Mouse"];

const place = ["in a park", "on an island", "at the police station", "in a garage", "on a boat", "in the middle of nowhere", "in a treehouse", "in a private jet"];

const weather = ["sunny", "rainy", "tornado", "stormy", "cloudy", "hurricane", "heat wave"];

const pickRandom = array => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

let mixedMessage = `You're gonna ${pickRandom(action)} with ${pickRandom(celebrity)} ${pickRandom(place)} on a ${pickRandom(weather)} day !`;

const monthArray= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const month = pickRandom(monthArray);

let day = () => {
    let randomDay;
    if (month === "April" || month === "June" || month === "September" || month === "November") {
        randomDay = Math.floor(Math.random() * 29) + 1;
    } else if (month === "February") {
        randomDay = Math.floor(Math.random() * 27) + 1;
    } else {
        randomDay = Math.floor(Math.random() * 30) + 1;
    };
    if (randomDay === 1) {
        return "the first";
    } else if (randomDay === 2) {
        return randomDay + "nd";
    } else if (randomDay === 3) {
        return randomDay + "rd";
    } else {
        return randomDay + "th";
    }
};

mixedMessage = mixedMessage.charAt(0).toLowerCase() + mixedMessage.slice(1);
mixedMessage = "On " + month + " " + day() + ", " + mixedMessage;

console.log(mixedMessage);
