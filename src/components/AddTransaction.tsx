import React, { useContext, useRef, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from '../interfaces/interface'

const AddTransaction = () => {
  const textRef = useRef<HTMLInputElement>(null)
  const [amount, setAmount] = useState<number>(0)
  const { addTransaction, dispatch } = useContext(GlobalContext)
  const transaction: Transaction = {
    //id: Math.floor(Math.random() * 100000000),
    amount,
    text: textRef.current?.value!,
  }
  const createNewTrasaction = (e: any) => {
    e.preventDefault()
    if (transaction.text && textRef.current?.value) {
      addTransaction && addTransaction(transaction, dispatch!)
      setAmount(0)
      textRef.current.value = ''
    } else {
      window.alert('please add a description or an amount')
    }
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={createNewTrasaction}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input type='text' ref={textRef} placeholder='Enter text...' />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
