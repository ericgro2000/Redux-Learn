import { FC } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from './store/store'

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const cash = useSelector<RootState, number>(state => state.cash.cash)

  const addCash = (cash: number) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }

  const getCash = (cash: number) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }

  return (
    <div className={'app'}>
      <div style={{ fontSize: "2rem" }}>Amount:{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}>Deposit</button>
        <button onClick={() => getCash(Number(prompt()))}>Withdraw</button>
      </div>
    </div>
  )
}

export default App