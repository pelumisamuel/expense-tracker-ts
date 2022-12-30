import React from 'react'

export enum ACTION_TYPE {
  delete = 'DELETE_TRANSACTION',
  create = 'CREATE_TRANSACTION',
  get = 'GET_TRANSACTIONS',
  error = 'TRANSACTION_ERROR',
}

export interface Transaction {
  _id?: number
  text: string
  amount: number
}

export interface Actions {
  deleteTrans: (
    payload: Transaction,
    dispatch: React.Dispatch<{
      type: ACTION_TYPE.delete | ACTION_TYPE.error
      payload: Transaction
    }>
  ) => void

  addTrans: (
    payload: Transaction,
    dispatch: React.Dispatch<{
      type: ACTION_TYPE.create | ACTION_TYPE.error
      payload: Transaction
    }>
  ) => void

  getTrans: (
    dispatch: React.Dispatch<{
      type: ACTION_TYPE
      payload: any
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
  error: any
  loading: boolean
}

export interface ContextState extends initState {
  deleteTransaction: Actions['deleteTrans']
  addTransaction: Actions['addTrans']
  getTransactions: Actions['getTrans']
  dispatch?: React.Dispatch<{
    type: ACTION_TYPE
    payload: Transaction
  }>
}
