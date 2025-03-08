import { Team } from '../../Team';
import { Score } from '../../Score';
import s from './Match.module.scss'
import { IMatch } from '../module/types';

type MatchProps = {
  match: IMatch
}

export const Match = ({ match }: MatchProps) => {
  return (
    <div className={s.match}>
      <Team team={match.homeTeam} />
      <Score awayScore={match.awayScore} homeScore={match.homeScore} status={match.status} />
      <Team team={match.awayTeam}/>
    </div>
  );
}
