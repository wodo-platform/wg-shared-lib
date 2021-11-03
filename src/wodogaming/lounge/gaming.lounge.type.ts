export interface GamingLoungeType {
    id:number;
    name:string;
    description:string;
}

export var GAMING_LOUNGE_TYPE_STANDARD = {id:1, name:"Standard", description:"Regular gaming lounge"}, 
GAMING_LOUNGE_TYPE_CHALLANGER = {id:2, name:"Challanger", description:"Challanger mode with agreed game fee"};