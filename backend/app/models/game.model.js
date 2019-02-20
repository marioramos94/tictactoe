

module.exports= class Game {
    constructor (){
      
        this.moves=[]
    }

    getgame(game) {return `all the moves from the game ${game}`}

    savemove(game,move) {
        return `move ${move} saved in this game`
    }


        
}