import { Dispatch } from "react";

interface IFieldset{
    labelMessage: string,
    onChangeInput: Dispatch<string>
}
const Fieldset = (props: IFieldset) => {
    return(
        <fieldset className="flex items-center justify-between w-full my-4">
            <label className="font-bold" htmlFor='input-team'>{props.labelMessage}:</label>
            <input 
                className="bg-transparent border-solid border-2 border-black rounded-sm p-1"
                type='text' 
                id='input-team' 
                required 
                onChange={(event) => props.onChangeInput(event.target.value)}
             />
        </fieldset>
    )
}

export default Fieldset;