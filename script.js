// Array of jokes
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    " I ordered a chicken and an egg from Amazon. I'll let you know",
    " What month is the shortest of the year? May, it only has three letters.",
    " What did the snail who was riding on the turtle's back say? Wheeeee!",
    " I was going to tell a time traveling joke, but you guys didn't like it.",
    " What do you call a lazy kangaroo? A pouch potato.",
    " I used to run a dating service for chickens, but I was struggling to make hens meet.",
    ` Why do we tell actors to "break a leg?" Because every play has a cast.`,
    " What does a pig put on dry skin? Oinkment.",
    " What do you call it when a snowman throws a tantrum? A meltdown.",
    " My uncle named his dogs Timex and Rolex. They're his watch dogs.",
    " Did you hear about the guy whose left side was cut off? He's all right now.",
    " How do you open a banana? With a mon-key.",
    // Add more jokes as needed
];

function getRandomIndex(max) {
    let x= (Math.floor(Math.random() * max))
    console.log(x)
    return x;
}

function generateRandomJoke() {
    const jokeDisplay = document.getElementById('joke');


    if (jokes.length > 0) {
        
        const randomIndex = getRandomIndex(jokes.length);
      
  
        jokeDisplay.textContent = jokes[randomIndex];
    } else {
        jokeDisplay.textContent = 'No jokes available.';
    }
}
