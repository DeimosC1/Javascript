import {generateNewsBox} from "./components";

const articles = [
    {
        title: 'Article A',
        description: 'Lorem ipsum A'
    },
    {
        title: 'Article B',
        description: 'Lorem ipsum B'
    },
    {
        title: 'Article C',
        description: 'Lorem ipsum C'
    },
    {
        title: 'Article D',
        description: 'Lorem ipsum D'
    },
    {
        title: 'Article E',
        description: 'Lorem ipsum E'
    },

];

window.onload = function() {
    const header = document.createElement('h1'); // <h1>Welcome</h1>
    header.innerText = "Welcome";
    document.body.appendChild(header);

    const news = generateNewsBox("NEWES", "ipsum lorem");
    document.body.appendChild(news);

    let x;
    let y;
    for(let i=0; i<articles.length; i++) {
        x = generateNewsBox(articles[i].title, articles[i].description);
        y = document.getElementById("div");
        y.appendChild(x);
    }
};
