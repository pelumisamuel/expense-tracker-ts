import React from 'react'
import { ACTION_TYPE, Actions, Transaction } from '../interfaces/interface'

// Actions Added the dispatch variable here
const deleteTransaction: Actions['deleteTrans'] = (payload, dispatch) => {
  dispatch({
    type: ACTION_TYPE.delete,
    payload,
  })
}
const addTransaction: Actions['addTrans'] = (payload, dispatch) => {
  dispatch({
    type: ACTION_TYPE.create,
    payload,
  })
}

export { deleteTransaction, addTransaction }
