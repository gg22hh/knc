import Logo from '../../../shared/assets/logo.svg'
import { RefreshButton } from '../../../features/RefreshButton'
import s from './Header.module.scss'
import { Error } from './Error'
import { useAppSelector } from '../../../app/store'
import { selectMatchesState } from '../../../app/store/slices/Matches'

export const Header = () => {
  const {error} = useAppSelector(selectMatchesState)

  return (
    <div className={s.header}>
      <div>
        <a href="/"><img src={Logo} alt="Logo" /></a> 
      </div>
      <div className={s.info}>
        {error && <Error />}
        <RefreshButton />
      </div>
    </div>
  )
}
