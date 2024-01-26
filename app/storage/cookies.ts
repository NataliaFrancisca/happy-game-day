'use server';
import { cookies } from 'next/headers';
import { TDataTeams } from '../types/types';

export async function setForm(teams: Array<TDataTeams>){
    const data = JSON.stringify(teams);
    cookies().set('TEAMS_DATA', data);
}

export async function getForm(){
    const cookie = cookies();
    const response = cookie.get('TEAMS_DATA');

    if(response){
        return JSON.parse(response.value);
    }
}