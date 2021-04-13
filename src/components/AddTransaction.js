import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TRANSACTION } from '../Redux/Types';

function AddTransaction() {

    const dispatch = useDispatch();
    const state = useSelector(state => state.transactions)

    const [Name, setName] = useState('');
    const [Amount, setAmount] = useState(0);

    const onAddTransactionClick = (e) => {
        e.preventDefault();
        if (Amount !== 0 && Name !== '')
            dispatch({ type: ADD_TRANSACTION, payload: { id: state.length + 1, text: Name, amount: parseInt(Amount) } })

        document.getElementById("name").value = "";
        document.getElementById("amount").value = "";
        setAmount(0)
        setName('')
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id='name' onChange={(e) => setName(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
            (negative - expense, positive - income)</label>
                    <input type="number" id='amount' onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button onClick={onAddTransactionClick} className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
