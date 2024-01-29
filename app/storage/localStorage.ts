import { TDataTeams } from "../types/types";

export function setFormData(teams: Array<TDataTeams>){
    const data = JSON.stringify(teams);
    localStorage.setItem('TEAMS_DATA', data);
}

export function getFormData(){
    const data = localStorage.getItem('TEAMS_DATA');

    if(data){
        return JSON.parse(data);
    }
}

export function setAppOption(appOption: string){
    const data = JSON.stringify(appOption);
    localStorage.setItem('USER_APP_OPTION', data);
}

export function getAppOption(){
    const data = localStorage.getItem('USER_APP_OPTION');

    if(data){
        return JSON.parse(data);
    }
}