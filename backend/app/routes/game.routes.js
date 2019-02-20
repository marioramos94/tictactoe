module.exports = (app) => {
    const games = require('../controllers/game.controller.js');

    // Create a new Note
    app.post('/games', games.move);
    app.get('/games', games.game);

}