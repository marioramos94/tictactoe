


const express = require('express');
const bodyParser = require('body-parser');


const app = express();


app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "Welcome to tictactoe"});
});

require('./app/routes/game.routes.js')(app);
require('./database.js')()


// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});