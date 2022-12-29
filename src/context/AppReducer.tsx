import { ACTION_TYPE, Transaction } from '../interfaces/interface'
import { initialState } from './GlobalState'

const appReducer = (
  state: typeof initialState,
  action: { type: ACTION_TYPE; payload: Transaction }
) => {
  switch (action.type) {
    case ACTION_TYPE.delete:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload.id
        ),
      }
    case ACTION_TYPE.create:
      return { ...state, transactions: [action.payload, ...state.transactions] }
    default:
      return state
  }
}

export default appReducer
