/**
 * @summary
 * 
 * Game lounge states determine current state of a gaming lounge during it's life cycle.
 * Each state posses different type of business rules in order to drive gaming experince.
 * 
 * @remarks
 * 
 * e.g if a game loinge is in "IN-GAME" state, only spectator might be allowed to join.
 *  
 */
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

export var GAMING_LOUNGE_STATE_LIST:Array<GamingLoungeState> = new Array(GAMING_LOUNGE_STATE_INITIALIZED,GAMING_LOUNGE_STATE_AWAIT,
    GAMING_LOUNGE_STATE_INGAME,GAMING_LOUNGE_STATE_POSTGAME,GAMING_LOUNGE_STATE_CLOSED);