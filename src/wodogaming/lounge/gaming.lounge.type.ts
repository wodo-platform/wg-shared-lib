/**
 * Game Lounge type represents type of games being played in a lounge. Games can be played in several modes
 * such as standard, challanger, arcade, bid etc.. Game lounge type determines entarance fee ofa game lounge
 */
export interface GamingLoungeType {
    id:number;
    name:string;
    description:string;
}

export var GAMING_LOUNGE_TYPE_STANDARD = {id:1, name:"Standard", description:"Regular gaming lounge"}, 
GAMING_LOUNGE_TYPE_CHALLANGER = {id:2, name:"Challanger", description:"Challanger mode with agreed game fee"};

export var GAMING_LOUNGE_TYPE_LIST:Array<GamingLoungeType> = new Array(GAMING_LOUNGE_TYPE_STANDARD,GAMING_LOUNGE_TYPE_CHALLANGER);