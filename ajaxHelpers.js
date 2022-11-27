// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2207-FTB-ET-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
    let response = await fetch(`${APIURL}players`);
    let result = await response.json();
    if (result.error){
        return 'Uh oh, trouble fetching players';
    }
    return (result.data.players);

};

export const fetchSinglePlayer = async (playerId) => {
    let response = await fetch(`${APIURL}players/PLAYER-ID`);
    let result = await response.json();
    return result;

};

export const addNewPlayer = async (playerObj) => {

};

export const removePlayer = async (playerId) => {

};
