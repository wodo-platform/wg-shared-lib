/**
 * Game interface defines fundamental attributes of Games in the wodo gaming system.
 * Each game has a unique numeric id,
 */
export interface Game {
    id:number;
    name:string;
    description:string;
}

export var GAMES_AGARIO = {id:1, name:"Agario", description:"Open source agario"}, 
GAMES_SNAKE = {id:2, name:"Snake", description:"Open source snake"};