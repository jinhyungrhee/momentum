const quotes = [
    {
        quote : "The way to get started is to quit talking and begin",
        author : "Walt Disney",
    },
    {
        quote : "Be yourself; everyone else is already taken.",
        author : "Oscar Wilde",
    },
    {
        quote : "So many books, so little time.",
        author : "Frank Zappa",
    },
    {
        quote : "A room without books is like a body without a soul.",
        author : "Marcus Tullius Cicero",
    },
    {
        quote : "You only live once, but if you do it right, once is enough.",
        author : "Mae West",
    },
    {
        quote : "Be the change that you wish to see in the world.",
        author : "Mahatma Gandhi",
    },
    {
        quote : "In three words I can sum up everything I've learned about life: it goes on.",
        author : "Robert Frost",
    },
    {
        quote : "If you tell the truth, you don't have to remember anything.",
        author : "Mark Twain",
    },
    {
        quote : "A friend is someone who knows all about you and still loves you.",
        author : "Elbert Hubbard",
    },
    {
        quote : "Without music, life would be a mistake.",
        author : "Friedrich Nietzsche",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = `"${todaysQuote.quote}"`;
quote.style.fontWeight = "bold";
author.innerText = `- ${todaysQuote.author} -`;