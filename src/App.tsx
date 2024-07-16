import { FC } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from './store/store'
import { Customer, CustomerState } from './store/customerReducer'

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const cash = useSelector<RootState, number>(state => state.cash.cash)
  const customers = useSelector<RootState, Customer[]>(state => state.customers.customers);

  const addCash = (cash: number) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }

  const getCash = (cash: number) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }

  const addCustomer = (name:string) => {
    const customer = {
    name,
    id: Date.now(),
    }
    dispatch({type: "ADD_CUSTOMER", payload: customer})
    }
  
    const removeClient = (customer:Customer) => {
      dispatch({type: "REMOVE_CUSTOMERS", payload: customer.id})
      }

  return (
    <div className={'app'}>
      <div style={{ fontSize: "2rem" }}>Amount:{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}>Deposit</button>
        <button onClick={() => getCash(Number(prompt()))}>Withdraw</button>
        <button onClick={() => addCustomer(String(prompt()))}>Add client</button>
        {/* <button onClick={() => removeClient(String(prompt()))}>Remove client</button> */}
      </div>
      {customers.length >0?
      <div>
        {customers.map(customer =>
           <div key={customer.id} onClick={()=>removeClient(customer)}>{customer.name}</div>
        )}
      </div>:
      <div style={{fontSize:"2rem",marginTop:"5px"}}>

      </div>
      }
    </div>
  )
}

export default App