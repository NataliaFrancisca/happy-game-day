import { Dispatch } from "react";

interface IFieldset{
    labelMessage: string,
    onChangeInput: Dispatch<string>
}
const Fieldset = (props: IFieldset) => {
    return(
        <fieldset className="flex justify-between font-familjen items-center w-full my-4">
            <label className="font-bold w-fit text-lg" htmlFor='input-team'>{props.labelMessage}:</label>
            <input 
                className="bg-[#1E1E1E;] w-9/12 border-solid border-1 p-1 text-white"
                type='text' 
                id='input-team' 
                required 
                onChange={(event) => props.onChangeInput(event.target.value)}
             />
        </fieldset>
    )
}

export default Fieldset;