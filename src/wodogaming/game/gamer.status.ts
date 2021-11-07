/**
 * Gamers aka players can join gaming lounges with different hats. If a gamer pays the enterence fee to join a gaming lounge
 * he gets "player" status and play configured game in a gaming lounge.
 */
export interface GamerStatus {
    id:number;
    name:string;
    description:string;
}

export var GAMER_PLAYER = {id:1, name:"Player", description:"Users who joined a gaming lounge by paying an enterance fee. They play the game"}, 
GAMES_SPECTATOR = {id:2, name:"spectator", description:"Users who joined a gaming lounge without paying an enterance fee. They can only watch the game"};