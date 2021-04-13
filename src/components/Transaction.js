import React from 'react'
import { useDispatch } from 'react-redux';
import { DELETE_TRANSACTION } from '../Redux/Types';

function Transaction({ text, amount, type, id }) {

    const dispatch = useDispatch();

    const onDeleteClick = (e) => {
        e.preventDefault();
        dispatch({ type: DELETE_TRANSACTION, payload: id })
    }

    return (
        <li className={type}>
            {text} <span>{amount}</span><button onClick={onDeleteClick} className="delete-btn">x</button>
        </li>
    )
}

export default Transaction
