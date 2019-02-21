

const mongoose = require('mongoose');

module.exports= class Game {
    constructor (){
      
        this.moves=[]
    }

    getgame(game) {return `all the moves from the game ${game}`}

    savemove(game,move) {
        return `move ${move} saved in this game`
    }


        
}

/*

const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
*/