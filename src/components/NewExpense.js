import React from 'react'
import { nanoid } from 'nanoid'

const NewExpense = (props) => {

    const [userInput, setUserInput] = React.useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    })

    const titleChangeHandler = (e) => {
        setUserInput(prevInput => {
            return {
                ...prevInput,
                enteredTitle: e.target.value
            }
        })
    }

    const amountChangeHandler = (e) => {
        setUserInput(prevInput => {
            return {
                ...prevInput,
                enteredAmount: parseInt(e.target.value)
            }
        })
    }

    const dateChangeHandler = (e) => {
        setUserInput(prevInput => {
            return {
                ...prevInput,
                enteredDate: e.target.value
            }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
            id: nanoid()
        }
        
        props.addExpenseHandler(expenseData)

        setUserInput({
            enteredTitle: "",
            enteredAmount: "",
            enteredDate: ""
        })
    }

    return (
        <div className="new-expense">

            <form onSubmit={submitHandler}>
                <div className="new-expense-controls">

                    <div className="new-expense-control">
                        <label>Title</label>
                        <input
                            type="text"
                            value={userInput.enteredTitle}
                            onChange={titleChangeHandler}
                        />
                    </div>


                    <div className="new-expense-control">
                        <label>Amount</label>
                        <input
                            type="number"
                            min="0.01"
                            step="0.01"
                            value={userInput.enteredAmount}
                            onChange={amountChangeHandler}
                        />
                    </div>


                    <div className="new-expense-control">
                        <label>Date</label>
                        <input
                            type="date"
                            min="2019-01-01"
                            max="2022-12-31"
                            value={userInput.enteredDate}
                            onChange={dateChangeHandler}
                        />
                    </div>

                </div>

                <div className="new-expense-actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>

        </div>
    )
}

export default NewExpense