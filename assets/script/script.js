const query = `
  query { 
    joke {
      joke
      permalink
    }
  }
`;
//fetch api and display random joke
const randomJoke = () => {
  fetch(`https://icanhazdadjoke.com/graphql?query=${query}`)
    .then(response => response.json())
    .then(data => {
      const { joke } = data.data.joke;
      window.joke.innerHTML = `
      <div>${joke}</div>
    `;
    });
};
//joke call
randomJoke();
//click button variable
const jokeBtn = document.querySelector(".joke-js");

const screen = document.querySelector(".screen");
jokeBtn.addEventListener("click", () => {
  randomJoke();
  changeColor(getColor());
});

const changeColor = color => {
  screen.style.background = color;
};

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const rand = (min, max) => {
  return parseInt(Math.random() * (max - min + 1), 10) + min;
};
const getColor = () => {
  let h = rand(1, 360); // color hue between 1 and 360
  let s = rand(30, 100); // saturation 30-100%
  let l = rand(30, 100); // lightness 30-70%
  localStorage.setItem("light", l);
  let colorHsl = "hsl(" + h + "," + s + "%," + l + "%)";
  return colorHsl;
};
