import { useRef } from "react"
import { IButton } from "../ts/interface";

const Button = (button: IButton) => {
    const refButton = useRef<HTMLButtonElement | null>(null);
    
    return(
        <button 
            className="py-3 text-base font-familjen font-bold cursor-pointer bg-slate-300 w-full rounded uppercase"
            onClick={(event) => button.onHandleButton(event)}
            value={button.data.id}
            ref={refButton}
        >
            {button.data.name}
        </button>
    )
}

export default Button;