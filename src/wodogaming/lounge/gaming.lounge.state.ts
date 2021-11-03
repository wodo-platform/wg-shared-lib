export interface GamingLoungeState {
    id:number;
    name:string;
    description:string;
}

export var GAMING_LOUNGE_STATE_INITIALIZED = {id:1, name:"INITIALIZED", description:"Gaming lounge is initialized, awaiting users to join"}, 
GAMING_LOUNGE_STATE_AWAIT = {id:2, name:"AWAIT", description:"User(s) joined the gaming lounge, awaiting game kick off"},
GAMING_LOUNGE_STATE_INGAME = {id:3, name:"IN-GAME", description:"Game started. Users play the game"},
GAMING_LOUNGE_STATE_POSTGAME = {id:4, name:"POST-GAME", description:"Game finished. Users returned the gaming lounge"},
GAMING_LOUNGE_STATE_CLOSED = {id:5, name:"CLOSED", description:"Gaming lounge has been closed."};