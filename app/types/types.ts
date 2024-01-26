export type TDataTeams = {
    "round_one": Array<TTeam>,
    "round_two": Array<TTeam>
}


export type TTeam = {
    id: number;
    name: string;
}

export type TState = {
    'form': {
        'value': TDataTeams
    }
}

export type TTeamStatus = {
    'winner': TTeam,
    'looser': TTeam
}

export type TMatch = {
    id: number,
    name: string
}