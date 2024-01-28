'use server';
import { cookies } from 'next/headers';
import { TDataTeams } from '../types/types';

export async function setForm(teams: Array<TDataTeams>){
    const data = JSON.stringify(teams);
    cookies().set("TEAMS_DATA", data);
}

export async function setAppOption(option: string){
    cookies().set("USER_APP_OPTION", option);
}

export async function getForm(){
    const cookie = cookies();
    const response = cookie.get("TEAMS_DATA");

    if(response){
        return JSON.parse(response.value);
    }
}

export async function getAppOption(){
    const cookie = cookies();
    const response = cookie.get("USER_APP_OPTIONS");

    if(response){
        return response.value;
    }
}