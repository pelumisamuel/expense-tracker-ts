import { ACTION_TYPE, Transaction } from '../interfaces/interface'
import { initialState } from './GlobalState'

const appReducer = (
  state: typeof initialState,
  action: { type: ACTION_TYPE; payload: Transaction }
) => {
  switch (action.type) {
    case ACTION_TYPE.get:
      return {
        ...state,
        loading: false,
        transactions: [action.payload].flat(),
      }
    case ACTION_TYPE.delete:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload._id
        ),
      }
    case ACTION_TYPE.create:
      return { ...state, transactions: [...state.transactions, action.payload] }
    case ACTION_TYPE.error:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default appReducer
