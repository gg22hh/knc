import { useAppSelector } from '../../../app/store'
import { selectMatchesState } from '../../../app/store/slices/Matches'
import { Match } from '../../../entities/Match'
import LoadingIcon from './LoadingIcon.svg'
import s from './MainContent.module.scss'

export const MainContent = () => {
  const { data, isLoading } = useAppSelector(selectMatchesState)

  const matches = data?.data.matches.map(match => {
    return (
      <Match
        key={match.title}
        match={match}
      />
    )
  })
  return (
    <div className={s.main}>
      {isLoading ? <div><img src={LoadingIcon} alt="Loading Icon" /></div> : matches}
    </div>
  )
}
