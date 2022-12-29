import React, { createContext, useReducer } from 'react'
import appReducer from './AppReducer'
import {
  ACTION_TYPE,
  Actions,
  ContextState,
  initState,
} from '../interfaces/interface'
import { addTransaction, deleteTransaction } from './Actions'

const initialState: initState = {
  transactions: [],
  user: {},
}

// creating the context state
// const GlobalContext = createContext<ContextState>(initialState)
const GlobalContext = createContext<ContextState>({
  ...initialState,
  addTransaction,
  deleteTransaction,
})

// provider that serves the state
const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  // previously USED Actions It has now been moved to Actions.tsx

  //   const deleteTransaction: Actions['deleteTrans'] = (payload) => {
  //     dispatch({
  //       type: ACTION_TYPE.delete,
  //       payload,
  //     })
  //   }
  //   const addTransaction: Actions['addTrans'] = (payload) => {
  //     dispatch({
  //       type: ACTION_TYPE.create,
  //       payload,
  //     })
  //   }

  // dispatch passed down as one of the value for context provider
  deleteTransaction
  addTransaction

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        user: state.user,
        deleteTransaction,
        addTransaction,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { initialState, GlobalContext, GlobalProvider }
