import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transactions from './Transactions'

const TransactionList = () => {
  const { transactions, getTransactions, dispatch } = useContext(GlobalContext)
  useEffect(() => {
    return () => {
      getTransactions(dispatch!)
      console.log(transactions)
    }
  }, [])

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map((transaction) => {
          return (
            <Transactions key={transaction._id} transaction={transaction} />
          )
        })}
      </ul>
    </>
  )
}

export default TransactionList
