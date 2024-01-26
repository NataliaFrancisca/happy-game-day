'use client';
import { useState } from "react";
import Fieldset from "../components/fieldset";
import { useHandleForm } from "../hooks/useHandleForm";

export default function PageForm (){
    const [teamOne, setTeamOne] = useState('');
    const [teamTwo, setTeamTwo] = useState('');
    const [teamThree, setTeamThree] = useState('');
    const [teamFour, setTeamFour] = useState('');

    const { onSubmitForm } = useHandleForm([teamOne, teamTwo, teamThree, teamFour]);

    return(
        <section className="bg-white min-h-screen p-6 w-full font-inter">
            
            <form onSubmit={(event) => onSubmitForm(event)}>
                <legend className="font-bold">SET THE TEAMS NAMES:</legend>

                <Fieldset labelMessage="Team 1" onChangeInput={setTeamOne} />
                <Fieldset labelMessage="Team 2" onChangeInput={setTeamTwo} />
                <Fieldset labelMessage="Team 3" onChangeInput={setTeamThree} />
                <Fieldset labelMessage="Team 4" onChangeInput={setTeamFour} />

                <button 
                    className="bg-green-400 p-4 w-full font-bold font-inter rounded-sm hover:bg-green-600"
                    type="submit"
                >
                    SAVE
                </button>
            </form>

        </section>
    )
}