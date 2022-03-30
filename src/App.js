import React from 'react'

import NewExpense from './components/NewExpense'
import ExpensesChart from './components/ExpensesChart';
import ExpensesFilter from './components/ExpensesFilter';
import ExpensesList from './components/ExpensesList';
import Card from './components/Card';

import expenseItems from './expenseItems';

function App() {

  const [expenses, setExpenses] = React.useState(expenseItems)

  const [filteredYear, setFilteredYear] = React.useState('2020')

  const addExpenseHandler = (addExpense) => {
    setExpenses(prevExpenses => [addExpense, ...prevExpenses])
  }

  const handleChange = (e) => {
    setFilteredYear(e.target.value)
  }
console.log(expenses)
  const filteredExpenses = expenses.filter(item => item.date.getFullYear().toString() === filteredYear)

  return (
    <>

      <NewExpense addExpenseHandler={addExpenseHandler} />

      <Card className="expenses">

        <ExpensesFilter
          handleChange={handleChange}
          filteredYear={filteredYear}
        />

        <ExpensesChart
          expenses={filteredExpenses}
        />

        <ExpensesList
          expenses={filteredExpenses}
          filteredYear={filteredYear}
        />

      </Card>

    </>
  );
}

export default App;