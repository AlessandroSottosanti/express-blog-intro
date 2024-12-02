import express from 'express';
import chalk from 'chalk';

const app = express();
const port = 3000;


// default api
app.get('/', (req, res) => {
    res.json({
       message: "API di test"
    });
});

// porta in ascolto
app.listen(port, () => {
    console.log(chalk.green.bold(`Server is listening in localhost:${port}.`));
});

