import { useEffect } from 'react'
import { MainContent } from '../pages/MainContent'
import { Header } from '../widgets/Header'
import './App.css'
import { useAppDispatch } from './store'
import { getMatches } from './store/slices/Matches'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMatches())
  }, [])

  return (
    <>
      <Header />
      <MainContent />
    </>
  )
}

export default App
