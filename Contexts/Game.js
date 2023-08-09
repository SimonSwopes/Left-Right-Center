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

    getPoints() {
        return this.pointTotals;
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

        this.teamTracker[player][this.getHole()] = teamIndicator;

    }

    setRawScore(player, playerScore) {
        // player is the string of the player and their score is the num of strokes to get into the hole
        this.scoreTracker[player][this.getHole()] = parseInt(playerScore, 10);
        
    }

    calculatePoints() {

        let leftTeam = [];
        let rightTeam = [];
        let centerTeam =[];

        // fill the team array with scores
        for (let i = 0; i < this.players.length; i++) {
            let player = this.getPlayers()[i];

            if (this.getTeams()[player][this.getHole()] === 'L') {

                leftTeam.push(this.getScores()[player][this.getHole()].toString());
            }

            else if (this.getTeams()[player][this.getHole()] === 'R') {

                rightTeam.push(this.getScores()[player][this.getHole()].toString());
            }

            else {
                centerTeam.push(this.getScores()[player][this.getHole()].toString());
            }
        }

        let centerNetPoints = 0;
        let rightNetPoints = 0;
        let leftNetPoints = 0;

        // determine relationship between center and the 2 other teams
        if (centerTeam[0] < this.getCourse().getHolePar(this.getHole())) {
            let rightLocalPoints = (parseInt(rightTeam[0], 10) < parseInt(rightTeam[1], 10)) ? parseInt(rightTeam[1] + rightTeam[0], 10) : parseInt(rightTeam[0] + rightTeam[1], 10);
            let leftLocalPoints = (parseInt(leftTeam[0], 10) < parseInt(leftTeam[1], 10)) ? parseInt(leftTeam[1] + leftTeam[0], 10) : parseInt(leftTeam[0] + leftTeam[1], 10);

            centerNetPoints = ((rightLocalPoints - parseInt(centerTeam[0] + centerTeam[0], 10)) + (leftLocalPoints - parseInt(centerTeam[0] + centerTeam[0], 10))) *2;
            rightNetPoints = (parseInt(centerTeam[0] + centerTeam[0], 10) - rightLocalPoints);
            leftNetPoints = (parseInt(centerTeam[0] + centerTeam[0], 10) - leftLocalPoints);
        }
        else {
            let rightLocalPoints = (parseInt(rightTeam[0], 10) > parseInt(rightTeam[1], 10)) ? parseInt(rightTeam[1] + rightTeam[0], 10) : parseInt(rightTeam[0] + rightTeam[1], 10);
            let leftLocalPoints = (parseInt(leftTeam[0], 10) > parseInt(leftTeam[1], 10)) ? parseInt(leftTeam[1] + leftTeam[0], 10) : parseInt(leftTeam[0] + leftTeam[1], 10);

            centerNetPoints = ((rightLocalPoints - parseInt(centerTeam[0] + centerTeam[0], 10)) + (leftLocalPoints - parseInt(centerTeam[0] + centerTeam[0], 10))) * 2;
            rightNetPoints = (parseInt(centerTeam[0] + centerTeam[0], 10) - rightLocalPoints) ;
            leftNetPoints = (parseInt(centerTeam[0] + centerTeam[0], 10) - leftLocalPoints);
        }

        // determine the relationship between left and right

        // case where right has birdie or better
        if (rightTeam[0] < this.getCourse().getHolePar(this.getHole()) || rightTeam[1] < this.getCourse().getHolePar(this.getHole())) {
            // case where left team has birdie or better
            let leftLocalPoints = (parseInt(leftTeam[0], 10) < parseInt(leftTeam[1], 10)) ? parseInt(leftTeam[1] + leftTeam[0], 10) : parseInt(leftTeam[0] + leftTeam[1], 10);
            if (leftTeam[0] < this.getCourse().getHolePar(this.getHole()) || leftTeam[1] < this.getCourse().getHolePar(this.getHole())) {
                let rightLocalPoints = (parseInt(rightTeam[0], 10) < parseInt(rightTeam[1], 10)) ? parseInt(rightTeam[1] + rightTeam[0], 10) : parseInt(rightTeam[0] + rightTeam[1], 10);

                rightNetPoints += (leftLocalPoints - rightLocalPoints);
                leftNetPoints += (rightLocalPoints - leftLocalPoints);
            }
            // case where left team doesnt have better than par
            else {
                let rightLocalPoints = (parseInt(rightTeam[0], 10) > parseInt(rightTeam[1], 10)) ? parseInt(rightTeam[1] + rightTeam[0], 10) : parseInt(rightTeam[0] + rightTeam[1], 10);

                rightNetPoints += (leftLocalPoints - rightLocalPoints);
                leftNetPoints += (rightLocalPoints - leftLocalPoints);
            }
        }
        // case where right team doesn't have birdie or better
        else {
            // case where left team has birdie or better
            let leftLocalPoints = (parseInt(leftTeam[0], 10) > parseInt(leftTeam[1], 10)) ? parseInt(leftTeam[1] + leftTeam[0], 10) : parseInt(leftTeam[0] + leftTeam[1], 10);
            if (leftTeam[0] < this.getCourse().getHolePar(this.getHole()) || leftTeam[1] < this.getCourse().getHolePar(this.getHole())) {
                let rightLocalPoints = (parseInt(rightTeam[0], 10) < parseInt(rightTeam[1], 10)) ? parseInt(rightTeam[1] + rightTeam[0], 10) : parseInt(rightTeam[0] + rightTeam[1], 10);

                rightNetPoints += (leftLocalPoints - rightLocalPoints);
                leftNetPoints += (rightLocalPoints - leftLocalPoints);
            }
            // case where left team doesnt have better than par
            else {
                let rightLocalPoints = (parseInt(rightTeam[0], 10) > parseInt(rightTeam[1], 10)) ? parseInt(rightTeam[1] + rightTeam[0], 10) : parseInt(rightTeam[0] + rightTeam[1], 10);

                rightNetPoints += (leftLocalPoints - rightLocalPoints);
                leftNetPoints += (rightLocalPoints - leftLocalPoints);
            }
        }

        // apply the multiplier
        centerNetPoints *= this.mult;
        rightNetPoints *= this.mult;
        leftNetPoints *= this.mult;


        // Add players corresponding net points
        for (let i = 0; i < this.players.length; i++) {
            let player = this.getPlayers()[i];

            if (this.getTeams()[player][this.getHole()] === 'L') {
                if (this.getHole() === 0) {
                    this.pointTotals[player][this.getHole()] = leftNetPoints;
                }
                else {
                    this.pointTotals[player][this.getHole()] = this.pointTotals[player][this.getHole() - 1] + leftNetPoints;
                }
            }

            else if (this.getTeams()[player][this.getHole()] === 'R') {
                if (this.getHole() === 0) {
                    this.pointTotals[player][this.getHole()] = rightNetPoints;
                }
                else {
                    this.pointTotals[player][this.getHole()] = this.pointTotals[player][this.getHole() - 1] + rightNetPoints;
                }
            }

            else {
                if (this.getHole() === 0) {
                    this.pointTotals[player][this.getHole()] = centerNetPoints;
                }
                else {
                    this.pointTotals[player][this.getHole()] = this.pointTotals[player][this.getHole() - 1] + centerNetPoints;
                }
            }
        }

    }
}

export default Game;