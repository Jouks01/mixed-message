const action = ["dance", "have a drink", "play video games", "sleep", "watch your favorite movie", "eat a burger", "bake cookies", "enjoy a coffee", "drink champagne"];

const celebrity = ["a dog", "Chuck Norris", "Brad Pitt", "Natalie Portman", "Donald Trump", "Mariah Carey", "Gordon Ramsay", "Eric Cartman", "Bugs Bunny", "Mickey Mouse"];

const place = ["in a park", "on an island", "at the police station", "in a garage", "on a boat", "in the middle of nowhere", "in a treehouse", "in a private jet"];

const weather = ["sunny", "rainy", "tornado", "stormy", "cloudy", "hurricane", "heat wave"];

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
    };
};

let randomMessage = function(){
    const pickRandom = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    };
    return `On ${pickRandom(month)} ${day()}, you're going to ${pickRandom(action)} with ${pickRandom(celebrity)} ${pickRandom(place)} on a ${pickRandom(weather)} day !`;
};

document.getElementById('message-button').onclick = function(){
    document.getElementById('message').innerHTML = randomMessage();
    document.getElementById('message').style.display = 'block';
};