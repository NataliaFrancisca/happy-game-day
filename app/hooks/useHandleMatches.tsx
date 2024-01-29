import { useEffect, useState } from "react"
import { TDataTeams, TTeamStatus } from "../types/types";
import { getAppOption, getFormData } from "../storage/cookies";

export const useHandleMatches = () => {
    const formMatches = getFormData();
    const appOption = getAppOption();

    const [matches, setMatches] = useState<Array<TDataTeams>>(formMatches);
    const [currentMatches, setCurrentMatches] = useState<Array<TTeamStatus>>([]);

    const onUpdateCurrentMatches = (values: TTeamStatus) => setCurrentMatches([...currentMatches, values]);

    useEffect(() => {
        if(currentMatches.length == 2){

            if(appOption == 'OP-WINNER-LOOSER'){
                const matchesGenerated = createWinnerAndLooserMatches(currentMatches);
                setMatches([...matches, matchesGenerated]);
                setCurrentMatches([]);
            }else{
                const {winnerAndLooserMatches, crossedMatches } = createCrossedMatches(currentMatches);
                setMatches([...matches, winnerAndLooserMatches, crossedMatches]);
                setCurrentMatches([]);
            }
        }
    },[currentMatches, matches, appOption])

    return {formMatches, matches, appOption, onUpdateCurrentMatches};
}

function createWinnerAndLooserMatches(matchesGroup: Array<TTeamStatus>){
    const [ matchNumberOne, matchNumberTwo ] = matchesGroup;

    const winnerAndLooserMatches = {
        "roundOne": [{id: 1, name: matchNumberOne.winner.name}, {id:2, name: matchNumberTwo.winner.name}],
        "roundTwo": [{id: 1, name: matchNumberOne.looser.name}, {id:2, name: matchNumberTwo.looser.name}]
    };

    return winnerAndLooserMatches;
}

function createCrossedMatches(matchesGroup: Array<TTeamStatus>){
    const [ matchNumberOne, matchNumberTwo ] = matchesGroup;

    const winnerAndLooserMatches = createWinnerAndLooserMatches(matchesGroup);

    const crossedMatches = {
        "roundOne": [{id:1, name: matchNumberOne.winner.name}, {id: 2, name: matchNumberTwo.looser.name}],
        "roundTwo": [{id:1, name: matchNumberTwo.winner.name}, {id: 2, name: matchNumberOne.looser.name}]
    };

    return { winnerAndLooserMatches, crossedMatches }
}
