import { FC } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { State } from "./main"

const App: FC = () => {
  const dispatch = useDispatch()
  const cash = useSelector<State, number>(state => state.cash)

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