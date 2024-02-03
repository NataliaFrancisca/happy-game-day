import { IUseHandleMatch } from "../ts/types";
import { useLocalStorage } from "./useLocalStorage";

export const useHandleMatch = (props: IUseHandleMatch) => {
    const { appOption } = useLocalStorage();

    const onCheckWinner = (event: React.MouseEvent<HTMLButtonElement>) => {
        const winnerId = parseInt(event.currentTarget.value);

        const winnerTeam = props.teams.find((team) => team.id === winnerId);
        const looserTeam = props.teams.find((team) => team.id !== winnerId);

        if(winnerTeam && looserTeam){
            const status = {winner: winnerTeam, looser: looserTeam};

            onSetButtonAttribute(event);

            const shouldUpdateTheMatch = shouldUpdateTheMatches();
    
            if(shouldUpdateTheMatch){
                props.onUpdateMatchesState(status)
            }
        }
    }

    const onSetButtonAttribute = (event: React.MouseEvent<HTMLButtonElement>) => {
        const buttonsFromEachMatch = props.refGroupButtons.current?.querySelectorAll('button');

        if(buttonsFromEachMatch){

            buttonsFromEachMatch.forEach((button: HTMLElement) => {
                button.setAttribute('disabled', 'true');
                button.classList.add('disabled');
            })
    
            event.currentTarget.classList.add('winner');
        }
    }

    const shouldUpdateTheMatches = () => {
        if(appOption === 'OP-WINNER-LOOSER'){
            return true;
        }

        return props.index % 2 == 1;
    }


    return { onCheckWinner };
}