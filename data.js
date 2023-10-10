const btn = document.querySelector('.refreshBtn');
const fact = document.querySelector('.fact');
const img = document.querySelector('img');
const factAPI = 'https://catfact.ninja/fact';
const imgAPI = 'https://api.thecatapi.com/v1/images/search';

async function handler() {
    try {
        const response = await fetch(factAPI);
        const data = await response.json();
        fact.textContent = data.fact;
        const responseImg = await fetch(imgAPI);
        const imgUrl = await responseImg.json();
        img.src = imgUrl[0].url;
    } catch (error) {
        console.log(error);
    }
}

btn.addEventListener("click", function () {
    handler();
});