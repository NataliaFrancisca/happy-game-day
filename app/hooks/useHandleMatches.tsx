import { useEffect, useState } from "react"
import { TDataTeams, TTeamStatus } from "../types/types";
import { getForm } from "../storage/cookies";

export const useHandleMatches = () => {
    const [formMatches, setFormMatches] = useState<Array<TDataTeams> | undefined>(undefined);

    const [matches, setMatches] = useState<Array<TDataTeams>>([]);
    const [currentMatches, setCurrentMatches] = useState<Array<TTeamStatus>>([]);
    const [matchesHistory, setMatchesHistory] = useState<Array<Array<TTeamStatus>>>([]);

    const onUpdateCurrentMatches = (values: TTeamStatus) => setCurrentMatches([...currentMatches, values]);

    const onFetchFormData = async() => {
        const response = await getForm();
        
        if(response){
            setFormMatches(response);
            setMatches(response);
        }
    }
   
    useEffect(() => {
        if(formMatches === undefined){
            onFetchFormData();
        }
    },[formMatches]);

    useEffect(() => {
        if(currentMatches.length == 2){

            const groupMatchesNumberOne = {
                "round_one": [{id: 1, name: currentMatches[0].winner.name}, {id: 2, name: currentMatches[1].winner.name}],
                "round_two": [{id: 1, name: currentMatches[0].looser.name}, {id:2, name: currentMatches[1].looser.name}]
            }

            const groupMatchesNumberTwo = {
                "round_one": [{id: 1, name: groupMatchesNumberOne.round_one[0].name}, {id: 2, name: groupMatchesNumberOne.round_two[1].name}],
                "round_two": [{id: 1, name: groupMatchesNumberOne.round_one[1].name}, {id: 2, name: groupMatchesNumberOne.round_two[0].name}]
            }

            setMatchesHistory([...matchesHistory, currentMatches]);
            setMatches([...matches, groupMatchesNumberOne, groupMatchesNumberTwo]);
            setCurrentMatches([]);
        }
    },[currentMatches])


    return {formMatches,  matches, onUpdateCurrentMatches};
}


