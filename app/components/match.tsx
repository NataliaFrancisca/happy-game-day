'use client';
import { useRef} from 'react';
import Button from './button';
import { useHandleMatch } from '../hooks/useHandleMatch';
import { IMatch } from '../ts/interface';

const Match = (props: IMatch) => {
    const refGroupButtons = useRef<HTMLElement>(null);

    const { onCheckWinner } = useHandleMatch({...props, refGroupButtons}); 

    return(
        <section className="flex justify-between p-5 items-center w-full bg-white justify-items-center" ref={refGroupButtons}>
            <Button data={props.teams[0]} onHandleButton={onCheckWinner} />
   
            <span className='font-medium font-fasterone px-4'>vs</span>

            <Button data={props.teams[1]} onHandleButton={onCheckWinner} />
        </section>
    )
}


export default Match;

