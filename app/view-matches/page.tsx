'use client';
import Match from "../components/match";
import { useHandleMatches } from "../hooks/useHandleMatches"

export default function PageViewMatches(){

    const { matches, onUpdateCurrentMatches } = useHandleMatches();

    const shouldUpdateTheMatches = (number:number) => number % 2 == 1;

    return(
        <section className="p-5 bg-transparent w-11/12 min-h-screen h-auto m-auto">
            {matches != undefined && 
                matches.map((match, key) => (
                    <section key={key+1} className="mb-10">
                        <Match data={match.round_one} updateState={onUpdateCurrentMatches} shouldUpdateValues={shouldUpdateTheMatches(key+1)} />
                        <Match data={match.round_two} updateState={onUpdateCurrentMatches} shouldUpdateValues={shouldUpdateTheMatches(key+1)} />
                        {(shouldUpdateTheMatches(key+1) && key+1 > 1) && <div className="h-10 bg-slate-300 w-full my-10"></div>}
                    </section>
                ))
            }
        </section>
    )
}