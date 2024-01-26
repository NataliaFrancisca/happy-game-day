import { FormEvent } from "react"
import { useRouter } from "next/navigation";
import { setForm } from "../storage/cookies";

export const useHandleForm = (inputValues: Array<string>) => {
    const router = useRouter();

    const onSubmitForm = (event: FormEvent) => {
        event.preventDefault();

        const [first, second, third, fourth] = inputValues;

        if(inputValues.includes('')){
            return;
        }

        const startMatches = {
            "round_one": [{id: 1, name: first}, {id:2, name: second}],
            "round_two": [{id: 1, name: third}, {id:2, name: fourth}]
        }

        setForm([startMatches]);
        router.push("/view-matches");
    }

    return { onSubmitForm }
}