'use client';
import { useRef } from 'react';
import { TMatch } from '@/app/types/types';

const Match = (props: {data: Array<TMatch>, updateState: any, shouldUpdateValues: boolean}) => {
    const ref_button_team_one = useRef<HTMLButtonElement | null>(null);
    const ref_button_team_two = useRef<HTMLButtonElement | null>(null);

    const [team1, team2] = props.data;

    const onCheckWinner = (value: any) => {
        const winner_id = parseInt(value.target.value);

        const winner = props.data.find((team) => team.id === winner_id);
        const looser = props.data.find((team) => team.id !== winner_id);

        const status = {
            winner,
            looser
        }

        if(ref_button_team_one.current && ref_button_team_two.current){
            ref_button_team_one.current.setAttribute('disabled', 'true');
            ref_button_team_two.current.setAttribute('disabled', 'true');

            ref_button_team_one.current.classList.add("disabled");
            ref_button_team_two.current.classList.add("disabled");

            value.target.classList.add("winner");
        }

        if(props.shouldUpdateValues){
            props.updateState(status);
        }
 
    }      

    return(
        <section className='grid grid-cols-3 p-5 items-center w-full bg-red justify-items-center'>
            <button 
                className="p-2.5 text-base font-bold cursor-pointer bg-white w-full rounded"
                onClick={(event) => onCheckWinner(event)} 
                value={team1.id} 
                ref={ref_button_team_one}>
                    {team1.name}
            </button>
            <span className='font-bold font-montserratalternates'>vs</span>
            <button 
                className="p-2.5 text-base font-bold cursor-pointer bg-white w-full rounded"
                onClick={(event) => onCheckWinner(event)} 
                value={team2.id} 
                ref={ref_button_team_two}>
                    {team2.name}
            </button>
        </section>
    )
}


export default Match;

