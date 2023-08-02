// Game.js

/*
This class should manage player totals keep track of scores and totals for each player
There should be a way to generate a matrix with the data for a score card.
This data will latter be able to be mapped to a component allowing for an easy reading
*/


class Game {
    constructor(course, players) {
        this.course = course;
        this.players = players;
        this.teamTracker = {};
        this.scoreTracker = {};
        this.dollarTotals = {};
        this.mult = 1;

        // populate tracker where players are the keys values are empty list for now
        for (let i = 0; i < this.players.length; i++)
        {
            const player = this.players[i];
            this.teamTracker[player] = new Array(18);
            this.scoreTracker[player] = new Array(18);
            this.dollarTotals[player] = new Array(18);
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

    // Will be available at hole 15 players can decide to double the value of the shots
    doubleAmounts() {
        this.mult = 2;
    }

    // setTeam for hole
    setTeams(hole, playerTeam) {
        // player team is a dict where key is player name and value is a char denoting team L R or C
        // Hole is an int [0,17]

        for (const player of this.players) {
            this.teamTracker[player][hole] = playerTeam[player];
        }
    }

    setRawScores(hole, playerTotals) {
        // PlayerTotals is a dict where key is player name and vlaue is an int denoting shots to make it in the hole
        // Hole is an int [0,17]'

        for (const player of this.players) {
            this.scoreTracker[player][hole] = playerTotals[player];
        }
    }

    // This method sohuld be done for every hole after teams and rawscores are input
    calculateTotals(hole) {
        let L = 0;
        let R = 0;
        let C = 0;

        for (const player of this.players) {

            if (this.teamTracker[player][hole] == 'L') {
                // if L is unset set it to the score otherwise convert it to a string and concatenate a string of newScore and convert back to Int
                if (L == 0) {
                    L = this.scoreTracker[player][hole]
                }
                else {
                    if (this.scoreTracker[player][hole] > L)
                    {
                        L = parseInt((L.toString() + this.scoreTracker[player][hole].toString()));
                    }
                    else {
                        L = parseInt(this.scoreTracker[player][hole].toString() + L.toString());
                    }
                }
            }
            else if (teamTracker[player][hole] == 'R') {
                // if L is unset set it to the score otherwise convert it to a string and concatenate a string of newScore and convert back to Int
                if (R == 0) {
                    R = this.scoreTracker[player][hole]
                }
                else {
                    if (this.scoreTracker[player][hole] > R) {
                        parseInt((R.toString() + this.scoreTracker[player][hole].toString()));
                    }
                    else {
                        parseInt(this.scoreTracker[player][hole].toString() + R.toString());
                    }
                }
            }
            else {
                // as defined in rules C is always itself twice
                C = parseInt(this.scoreTracker[player][hole].toString + this.scoreTracker[player][hole].toString);
            }
        }

        // use the team totals to figure out who owes how much
        let leftAmount = (L + (R + C)) * this.mult;
        let rightAmount = (R + (L + C)) * this.mult;
        let centerAmount = (C + (L + R)) * this.mult;

        // TODO: use those amounts to update the dollarTotals
        for (const player of this.players) {
            if (this.teamTracker[player][hole] == 'L') {
                this.dollarTotals[player][hole] += leftAmount;
            }
            else if (this.teamTracker[player][hole] == 'R') {
                this.dollarTotals[player][hole] += rightAmount;
            }
            else {
                this.dollarTotals[player][hole] += centerAmount;
            }
        }
    }

}

export default Game;