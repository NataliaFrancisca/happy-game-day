'use client';
import Match from "../components/match";
import { useHandleMatches } from "../hooks/useHandleMatches"

export default function PageViewMatches(){

    const { matches, onUpdateCurrentMatches } = useHandleMatches();

    return(
        <section className="py-5 px-2 bg-transparent w-11/12 min-h-screen h-auto m-auto">
            <h2 className="font-fasterone text-2xl mb-6">MATCHES:</h2>
            {matches != undefined && 
                matches.map((match, key) => (
                    <section key={key+1} className="mb-10 rounded-md border-4 border-solid border-black">
                        <Match teams={match.roundOne} onUpdateMatchesState={onUpdateCurrentMatches} index={key+1} />
                        <Match teams={match.roundTwo} onUpdateMatchesState={onUpdateCurrentMatches} index={key+1} />
                    </section>
                ))
            }
        </section>
    )
}