import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from '../interfaces/interface'

const Transactions = ({ transaction }: { transaction: Transaction }) => {
  const { deleteTransaction, dispatch } = useContext(GlobalContext)

  //const checkAmount = list.amount >= 0 ? ['plus', '+'] : ['minus', '-']
  const amount =
    transaction.amount >= 0
      ? { style: 'plus', sign: '+' }
      : { style: 'minus', sign: '-' }
  return (
    <li className={amount.style}>
      {transaction.text}{' '}
      <span>
        {amount.sign}₦{Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() =>
          deleteTransaction && deleteTransaction(transaction, dispatch!)
        }
        className='delete-btn'
      >
        x
      </button>
    </li>
  )
}

export default Transactions
