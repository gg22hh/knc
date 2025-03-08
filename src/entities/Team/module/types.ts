import { IPlayer } from "../../Match/module/types";

export interface ITeam {
  name: string;
  place: number;
  players: IPlayer[],
  points: number,
  total_kills: number
}