import React from 'react'
import { ACTION_TYPE, Actions, Transaction } from '../interfaces/interface'
import axios, { AxiosError } from 'axios'

const baseUrl = 'http://localhost:9000'

// Actions Added the dispatch variable here

// delete a transaction
const deleteTransaction: Actions['deleteTrans'] = async (payload, dispatch) => {
  try {
    await axios.delete(`${baseUrl}/api/v1/transactions/${payload._id}`)
    dispatch({
      type: ACTION_TYPE.delete,
      payload,
    })
  } catch (error: any) {
    dispatch({
      type: ACTION_TYPE.error,
      payload: error.response.data.error,
    })
  }
}

// create a new transaction
const addTransaction: Actions['addTrans'] = async (payload, dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/api/v1/transactions`, payload)
    dispatch({
      type: ACTION_TYPE.create,
      payload: response.data.data,
    })
  } catch (error: any) {
    dispatch({
      type: ACTION_TYPE.error,
      payload: error.response.data.error,
    })
  }
}
// get all transactions
const getTransactions: Actions['getTrans'] = async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/api/v1/transactions`)
    dispatch({
      type: ACTION_TYPE.get,
      payload: response.data.data,
    })
  } catch (error: any) {
    dispatch({
      type: ACTION_TYPE.error,
      payload: error.response.data.error,
    })
  }
}

export { deleteTransaction, addTransaction, getTransactions }
