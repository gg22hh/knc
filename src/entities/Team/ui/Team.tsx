import { TeamIcon } from "./TeamIcon"
import s from './Team.module.scss'
import { ITeam } from "../module/types"

type TeamProps = {
  team: ITeam
}

export const Team = ({team}: TeamProps) => {
  return (
    <div className={s.team}><TeamIcon />{team.name}</div>
  )
}
