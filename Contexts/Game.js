// Game.js

/*
This class should manage player totals keep track of scores and totals for each player
There should be a way to generate a matrix with the data for a score card.
This data will latter be able to be mapped to a component allowing for an easy reading
*/


class Game {
    constructor(course, players) {
        this.course = course; // a course object
        this.players = players; // an array of strings that store player names these will be referenced as keys
        this.teamTracker = {}; // dictionary where a player is the key and there is an array for the holes and array has a char for each team;
        this.scoreTracker = {}; // dictionary where key is a player each player has an array for the holes will be 0 originally
        this.pointTotals = {}; // dictionary where key is a player each player has an array for the holes will be 0 originally
        this.mult = 1; // multiplier to the points option to double at hole 16
        this.hole = 0; // a way to keep track of what hole is currently being played

        // populate tracker where players are the keys values are empty array for now
        for (let i = 0; i < this.players.length; i++)
        {
            const player = this.players[i];
            this.teamTracker[player] = new Array(18).fill(null);
            this.scoreTracker[player] = new Array(18).fill(0);
            this.pointTotals[player] = new Array(18).fill(0);
        }
    }

    getPlayers() {
        return this.players;
    }

    getCourse() {
        return this.course;
    }

    getTeams(){
        return this.teamTracker;
    }

    getScores() {
        return this.scoreTracker;
    }

    getAmounts() {
        return this.dollarTotals;
    }

    getHole() {
        return this.hole;
    }

    nextHole() {
        if (this.hole < 17) {
            this.hole++;
        }
    }

    prevHole() {
        if (this.hole > 0) {
            this.hole--;
        }
    }

    // Will be available at hole 16 players can decide to double the value of the shots
    doubleAmounts() {
        this.mult = 2;
    }

    // setTeam for hole
    setTeams(player, teamIndicator) {
        // player is the string of the player and the Indicator is a char indicating their team

        this.teamTracker[player][this.hole] = teamIndicator;

    }

    setRawScore(player, playerScore) {
        // player is the string of the player and their score is the num of strokes to get into the hole
        this.scoreTracker[player][this.hole] = parseInt(playerScore, 10);
        
    }
}

export default Game;