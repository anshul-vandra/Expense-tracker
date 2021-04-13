import React from 'react'
import { useSelector } from 'react-redux'

function IncomeExpense() {

    const state = useSelector(state => state.transactions)

    const amountArray = state.map(val => val.amount)

    const incomeArray = amountArray.filter(val => val > 0);
    const income = incomeArray.length > 0 && incomeArray.reduce((acc, element) => (acc += element)).toFixed(2)

    const expenseArray = amountArray.filter(val => val < 0);
    const expense = expenseArray.length > 0 && expenseArray.reduce((acc, element) => (acc += element)).toFixed(2)

    return (
        <>
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">{expense}</p>
            </div>
        </>
    )
}

export default IncomeExpense
