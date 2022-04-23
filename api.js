const api = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = data => {
    console.log(data);
    const quote = document.getElementById('quote');
    quote.innerText = data.quote;
}