import React from 'react'
import { useSelector } from 'react-redux'
import Transaction from './Transaction'

function TransactionList() {

    const state = useSelector(state => state.transactions)

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {state.map((val, i) => <Transaction text={val.text}
                    amount={val.amount}
                    key={i}
                    id={val.id}
                    type={val.amount > 0 ? 'plus' : 'minus'} />)}
            </ul>
        </>
    )
}

export default TransactionList
