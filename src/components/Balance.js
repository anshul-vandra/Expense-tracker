import React from 'react'
import { useSelector } from 'react-redux'

function Balance() {
    const state = useSelector(state => state.transactions)

    const amountArray = state.map(val => val.amount)
    const balance = amountArray.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">{balance}</h1>
        </>
    )
}

export default Balance
