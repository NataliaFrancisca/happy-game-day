import { Dispatch } from "react";
import { TTeam, TTeamStatus } from "./types";

export interface IButton{
    data: TTeam,
    onHandleButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IMatch{
    teams: Array<TTeam>,
    onUpdateMatchesState: (teams: TTeamStatus) => void,
    index: number
}

export interface IFieldset{
    labelMessage: string,
    onChangeInput: Dispatch<string>
}
