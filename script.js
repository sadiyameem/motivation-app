document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        "Believe in yourself; you're the only one who can.",
        "What feels impossible can becomes possible.",
        "Push yourself, because no one else is going to do it for you.",
        "Great things will always come your way if you believe.",
        "Dream it. Wish it, Do it.",
        "All you have to do is try.",
        "Positive thoughts create a positive life.",
        "Happeness is a choice-choose to see the good in life.",
    ];

    // background patterns
    const patterns = [
        'repeating-linear-gradient(45deg, #f0e6f6, #f0e6f6 10px, #e1d3f0 10px, #e1d3f0 20px)',
        'radial-gradient(45deg, #7b2cbf 1px, transparent 1px)',
        'linear-gradient(45deg, #ff9a9e 25%, transparent 25%), linear-gradient(-45deg, #ff9a9e 25%, transparent 25%)',
        'repaeting-linear-gradient(0deg, #c2e9fb, #c2e9fb 5px, #a1c4fd 5px, #a1c4fd 10px)'
    ];

    const quoteText = document.getElementById('quote');
    const newQuoteBtn = document.getElementById('newQuoteBtn');

    // copy button code
    const copyBtn = document.createElement('button');
    copyBtn.textContent = 'Copy';
    copyBtn.style.marginLeft = '10px';
    document.querySelector('.container').appendChild(copyBtn);

    function showRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.textContent = quotes[randomIndex];

        const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
        document.body.style.backgroundImage = randomPattern;
    }

    newQuoteBtn.addEventListener('click', showRandomQuote);

    // gives a result after you copy the quote
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(quoteText.textContent)
            .then(() => alert('Quote copied!'))
            .catch(err => console.error('Failed to copy quote:', err));
    });

});







