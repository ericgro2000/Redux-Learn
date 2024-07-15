import { FC } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { cashState } from './store/cashReducer'
import { customerState } from './store/customerReducer'
import { Action, Dispatch } from 'redux'

const App: FC = () => {
  const dispatch = useDispatch<Dispatch<Action>>()
  const cash = useSelector<cashState | customerState, number>(state => state.cash.cash)

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