'use client';
import { useRef} from 'react';
import { TMatch } from '@/app/ts/types';
import Button from './button';

const Match = (props: {data: Array<TMatch>, updateState: any, shouldUpdateValues: boolean}) => {
    const [teamOne, teamTwo] = props.data;

    const refGroupButtons = useRef<HTMLElement>(null);

    const onCheckWinner = (event: React.MouseEvent<HTMLButtonElement>) => {
        const winner_id = parseInt(event.currentTarget.value);

        const winnerTeam = props.data.find((team) => team.id === winner_id);
        const looserTeam = props.data.find((team) => team.id !== winner_id);

        const status = {winner: winnerTeam, looser: looserTeam}


        onSetButtonAttribute(event);

        if(props.shouldUpdateValues){
            props.updateState(status);
        }
    }      

    const onSetButtonAttribute = (event: React.MouseEvent<HTMLButtonElement>) => {
        const buttonsFromEachMatch = refGroupButtons.current?.querySelectorAll('button');

        if(buttonsFromEachMatch){
            const teamOne = buttonsFromEachMatch[0];
            const teamTwo = buttonsFromEachMatch[1];

            teamOne.setAttribute('disabled', 'true');
            teamTwo.setAttribute('disabled', 'true');

            teamOne.classList.add('disabled');
            teamTwo.classList.add('disabled');

            event.currentTarget.classList.add('winner');
        }
    }

    return(
        <section className="flex justify-between p-5 items-center w-full bg-white justify-items-center" ref={refGroupButtons}>
            <Button data={teamOne} onHandleButton={onCheckWinner} />
   
            <span className='font-medium font-fasterone px-4'>vs</span>

            <Button data={teamTwo} onHandleButton={onCheckWinner} />
        </section>
    )
}


export default Match;

