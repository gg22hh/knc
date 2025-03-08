import clsx from 'clsx'
import s from './Score.module.scss'
import { MathcStatus } from '../../Match/module/types'

type ScoreProps = {
  awayScore: number,
  homeScore: number,
  status: MathcStatus
}

export const Score = ({ awayScore, homeScore, status }: ScoreProps) => {
    
  return (
    <div className={s.scoreBox}>
      <div className={s.score}>{homeScore} : {awayScore}</div>
      <div className={clsx(s.status, s[status.toLowerCase()])}>
        {status === 'Ongoing' && <>Live</>}
        {status === 'Finished' && <>Finished</>}
        {status === 'Scheduled' && <>Match preparing</>}
      </div>
    </div>
  )
}
