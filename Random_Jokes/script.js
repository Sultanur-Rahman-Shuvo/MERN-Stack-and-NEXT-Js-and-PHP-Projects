let jokes = [
  {
    error: false,
    category: "Pun",
    type: "single",
    joke: "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 204,
    safe: false,
    lang: "en",
  },
];
let index = Math.floor(Math.random() * (jokes.length - 1));
console.log(index);
joke.innerHTML = jokes[index].joke;
