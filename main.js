const joke = document.querySelector('.joke');
const btn = document.querySelector('.jokeBtn');
const config = {
    headers: {
        'Accept': 'application/json'
    }
};

btn.addEventListener('click', generateJoke)

generateJoke()



function generateJoke(){
    fetch('https://icanhazdadjoke.com', config).then(res => res.json()).then(data => {
        joke.innerHTML = data.joke
    }
    )
}