import { Dispatch, useEffect, useState } from "react"
import { getAppOption, getFormData } from "../storage/localStorage";

export const useLocalStorage = () => {
    const [formMatches, setFormMatches] = useState([]);
    const [appOption, setAppOption] = useState('');

    useEffect(() => {
        const form_data = getFormData();
        setFormMatches(form_data);

        const app_data = getAppOption();
        setAppOption(app_data);
    },[])

    return { formMatches, appOption }
}