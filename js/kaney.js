const getQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => loadQuote(data))
}

function loadQuote(dataIN) {
    const quote = document.getElementById('quote');
    quote.innerText = `${dataIN.quote}`;

}