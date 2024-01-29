import { FormEvent } from "react"
import { useRouter } from "next/navigation";
import { setAppOption, setFormData } from "../storage/localStorage";

export const useHandleForm = (inputValues: Array<string>, appOptionChoosed: string) => {
    const router = useRouter();

    const onSubmitForm = (event: FormEvent) => {
        event.preventDefault();

        const [first, second, third, fourth] = inputValues;

        if(inputValues.includes('')){
            return;
        }

        const startMatches = {
            "roundOne": [{id: 1, name: first}, {id:2, name: second}],
            "roundTwo": [{id: 1, name: third}, {id:2, name: fourth}]
        }

        setFormData([startMatches]);
        setAppOption(appOptionChoosed);
        router.push("/view-matches");
    }

    return { onSubmitForm }
}