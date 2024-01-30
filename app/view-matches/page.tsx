'use client';
import Match from "../components/match";
import { useHandleMatches } from "../hooks/useHandleMatches"

export default function PageViewMatches(){

    const { matches, onUpdateCurrentMatches, appOption } = useHandleMatches();

    const shouldUpdateTheMatches = (number:number) => {
        if(appOption === 'OP-WINNER-LOOSER'){
            return true;
        }else{
            return number % 2 == 1;
        }
    }

    return(
        <section className="py-5 px-2 bg-transparent w-11/12 min-h-screen h-auto m-auto">
            <h2 className="font-fasterone text-2xl mb-6">MATCHES:</h2>
            {matches != undefined && 
                matches.map((match, key) => (
                    <section key={key+1} className="mb-10 rounded-md border-4 border-solid border-black">
                        <Match data={match.roundOne} updateState={onUpdateCurrentMatches} shouldUpdateValues={shouldUpdateTheMatches(key+1)} />
                        <Match data={match.roundTwo} updateState={onUpdateCurrentMatches} shouldUpdateValues={shouldUpdateTheMatches(key+1)} />
                        {/* {(shouldUpdateTheMatches(key+1) && key+1 > 1) && <div className="h-10 bg-slate-300 w-full my-10"></div>} */}
                    </section>
                ))
            }
        </section>
    )
}