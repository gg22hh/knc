import { ITeam } from "../../Team/module/types";

export type MathcStatus = 'Finished' | 'Ongoing' | 'Scheduled'

// temporary 
export interface IPlayer {
  username: string,
  kills: number;
}

export interface IMatch {
  title: string,
  status: MathcStatus,
  time: string,
  homeTeam: ITeam,
  awayTeam: ITeam,
  homeScore: number,
  awayScore: number
}