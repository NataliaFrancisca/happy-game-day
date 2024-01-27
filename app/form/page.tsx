'use client';
import { useState } from "react";
import Fieldset from "../components/fieldset";
import { useHandleForm } from "../hooks/useHandleForm";

export default function PageForm (){
    const [teamOne, setTeamOne] = useState('');
    const [teamTwo, setTeamTwo] = useState('');
    const [teamThree, setTeamThree] = useState('');
    const [teamFour, setTeamFour] = useState('');

    const [appOption, setAppOption] = useState('');

    const { onSubmitForm } = useHandleForm([teamOne, teamTwo, teamThree, teamFour], appOption);

    return(
        <section className="bg-white w-11/12 h-5/6 my-auto font-inter m-auto border-4 border-solid border-black p-5 rounded-md">
            
            <form onSubmit={(event) => onSubmitForm(event)}>
                <legend className="font-bold font-familjen text-xl">teams:</legend>

                <Fieldset labelMessage="team 1" onChangeInput={setTeamOne} />
                <Fieldset labelMessage="team 2" onChangeInput={setTeamTwo} />
                <Fieldset labelMessage="team 3" onChangeInput={setTeamThree} />
                <Fieldset labelMessage="team 4" onChangeInput={setTeamFour} />

                <legend className="font-bold font-familjen text-xl mt-8 mb-4">what type do you choose:</legend>
 
                <fieldset className="mb-2">
                    <input 
                        id="option-value-one" 
                        value="OP-ONE" 
                        type="radio" 
                        name="app-option" 
                        className="mr-2"
                        required
                        onChange={(event) =>  setAppOption(event.target.value)}
                    />
                    <label 
                        htmlFor="option-value-one" 
                        className="font-familjen font-medium text-lg">
                            winner/ looser <b className="text-red-500 italic font-bold">against</b> winner/looser
                    </label>
                </fieldset>
            
                <fieldset className="mb-2">
                    <input 
                        id="option-value-two" 
                        value="OP-TWO" 
                        type="radio" 
                        name="app-option" 
                        className="mr-2"
                        required
                    />
                    <label htmlFor="option-value-two" className="font-familjen font-medium text-lg">winner/ looser <b className="text-red-500 italic font-bold">against</b> winner/looser and <b className="text-red-500 italic font-bold">cross</b> matches</label>
                </fieldset>

                <button 
                    className="bg-[#3656FF] text-white p-4 w-full font-bold font-inter rounded-md my-5 hover:bg-blue-600"
                    type="submit"
                >
                    CREATE
                </button>
              
            </form>

        </section>
    )
}