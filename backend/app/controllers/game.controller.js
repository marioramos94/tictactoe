const Game = require('../models/game.model.js');

// save a move from a especific game
exports.move = (req, res) => {
    // Validate request
    
    if(!req.body) {
        return res.status(400).send({
            message: "move can not be empty"
        });
    }
    console.log (req.body)
    // save a move
    const game = new Game    
    const e= game.savemove(req.body.game,req.body.move)
    res.send(e)   
};

exports.game = (req, res) => {
    //get a complete game by game id
    const game = new Game
    res.send(game.getgame(req.params.id))
};