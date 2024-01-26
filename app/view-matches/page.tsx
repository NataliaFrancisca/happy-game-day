'use client';
import Match from "../components/match";
import { useHandleMatches } from "../hooks/useHandleMatches"

export default function PageViewMatches(){

    const { matches, onUpdateCurrentMatches } = useHandleMatches();

    const shouldUpdateTheMatches = (number:number) => {
        return number % 2 == 1;
    }

    return(
        <section className="p-5 bg-white w-11/12 min-h-screen h-auto m-auto">
            {matches != undefined && 
                matches.map((match, key) => (
                    <section key={key+1} className="mb-10">
                        <p>{key+1}</p>
                        <Match data={match.round_one} updateState={onUpdateCurrentMatches} shouldUpdateValues={shouldUpdateTheMatches(key+1)} />
                        <Match data={match.round_two} updateState={onUpdateCurrentMatches} shouldUpdateValues={shouldUpdateTheMatches(key+1)} />
                    </section>
                ))
            }
        </section>
    )
}