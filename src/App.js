import React from 'react'
//Header
import Header from './components/Header'
//Balance
import Balance from './components/Balance'
//css
import './css/App.css'
import IncomeExpense from './components/IncomeExpense'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <div className="inc-exp-container">
          <IncomeExpense />
        </div>
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  )
}

export default App
