export enum ACTION_TYPE {
  delete = 'DELETE_TRANSACTION',
  create = 'CREATE_TRANSACTION',
}

export interface Transaction {
  id: number
  text: string
  amount: number
}

export interface Actions {
  deleteTrans: (
    payload: Transaction,
    dispatch: React.Dispatch<{
      type: ACTION_TYPE
      payload: Transaction
    }>
  ) => void
  addTrans: (
    payload: Transaction,
    dispatch: React.Dispatch<{
      type: ACTION_TYPE
      payload: Transaction
    }>
  ) => void
}

// type for initial state and also creating the state

//THIS BEFORE SEPERATING THE ACTIONS FROM THE  GLOBAL STATE

// export interface ContextState {
//   transactions: Transaction[]
//   user: {}
//   deleteTransaction?: Actions['deleteTrans']
//   addTransaction?: Actions['addTrans']
// }
export interface initState {
  transactions: Transaction[]
  user: {}
}

export interface ContextState extends initState {
  deleteTransaction: Actions['deleteTrans']
  addTransaction: Actions['addTrans']
  dispatch?: React.Dispatch<{
    type: ACTION_TYPE
    payload: Transaction
  }>
}
