import { TMatch } from "./types";

export interface IButton{
    data: TMatch,
    onHandleButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
