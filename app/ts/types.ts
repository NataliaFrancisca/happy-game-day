export type TDataTeams = {
    roundOne: Array<TTeam>,
    roundTwo: Array<TTeam>
}

export type TTeam = {
    id: number;
    name: string;
}

export type TState = {
    form: {
        'value': TDataTeams
    }
}

export type TTeamStatus = {
    winner: TTeam,
    looser: TTeam
}

export type TMatch = {
    id: number,
    name: string
}