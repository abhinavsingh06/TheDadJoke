const query = `
qyuery{
    joke{
        joke
        permalink
    }
}
`;
//fetch joke from api and dispaly on screen
const randomJoke = () => {
  fetch(`https://icanhazdadjoke.com/graphql?query=${query}`)
    .then(response => response.json())
    .then(data => {
      const { joke } = data.data.joke;
      window.joke.innerHTML = `<div>${joke}</div>`;
    });
};
//call joke function
randomJoke();
//button variable
const jokeBtn = document.querySelector(".joke-js");
//screen variable
const screen = document.querySelector(".screen");
//button event listener
jokeBtn.addEventListener("click", () => {
  let colorLight2;
});
