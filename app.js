import express from 'express';
import chalk from 'chalk';
import { posts } from './data/posts.js';

const app = express();
const port = 3000;

// cartella public visibile a tutti
app.use(express.static("public"));

// default api
app.get('/', (req, res) => {
    res.json({
       message: "Server del mio blog"
    });
});

// api per ottenere i post
app.get('/bacheca', (req, res) => {
    res.json({
        posts: posts,
        count: posts.length
    })
});

// Api di ricerca che filtra in base al parametro passato per titolo
app.get("/ricerca", (req, res) => {
    const title = req.query.title;
    const titles = posts.filter((curPost) => curPost.title.toLowerCase().includes(title.toLocaleLowerCase()));

    const data = {
        posts: titles,
        total: titles.length
    };
    res.json(data);
});


// porta in ascolto
app.listen(port, () => {
    console.log(chalk.green.bold(`Server is listening in localhost:${port}.`));
});

