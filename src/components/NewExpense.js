import React from 'react'
import { nanoid } from 'nanoid'

const NewExpense = (props) => {

    const [addingExpense, setAddingExpense] = React.useState(false)

    const handleAddingExpense = () => {
        setAddingExpense(previous => !previous)
    }

    const [userInput, setUserInput] = React.useState({
        title: "",
        amount: "",
        date: ""
    })

    const titleChangeHandler = (e) => {
        setUserInput(prevInput => {
            return {
                ...prevInput,
                title: e.target.value
            }
        })
    }

    const amountChangeHandler = (e) => {
        setUserInput(prevInput => {
            return {
                ...prevInput,
                amount: parseInt(e.target.value)
            }
        })
    }

    const dateChangeHandler = (e) => {
        setUserInput(prevInput => {
            return {
                ...prevInput,
                date: e.target.value
            }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const addExpense = {
            ...userInput,
            date: new Date(userInput.date),
            id: nanoid()
        }

        props.addExpenseHandler(addExpense)

        setUserInput({
            title: "",
            amount: "",
            date: ""
        })

        setAddingExpense(false)
    }

    return (

        addingExpense ?

            <div className="new-expense">

                <form onSubmit={submitHandler}>
                    <div className="new-expense-controls">

                        <div className="new-expense-control">
                            <label>Title</label>
                            <input
                                type="text"
                                value={userInput.title}
                                onChange={titleChangeHandler}
                            />
                        </div>


                        <div className="new-expense-control">
                            <label>Amount</label>
                            <input
                                type="number"
                                min="0.01"
                                step="0.01"
                                value={userInput.amount}
                                onChange={amountChangeHandler}
                            />
                        </div>


                        <div className="new-expense-control">
                            <label>Date</label>
                            <input
                                type="date"
                                min="2019-01-01"
                                max="2022-12-31"
                                value={userInput.date}
                                onChange={dateChangeHandler}
                            />
                        </div>

                    </div>

                    <div className="new-expense-actions">

                        <button
                            type="submit"
                            onClick={handleAddingExpense}
                        >Cancel</button>

                        <button type="submit">Add Expense</button>

                    </div>
                </form>

            </div>

            :

            <div className="new-expense">
                <button
                    onClick={handleAddingExpense}
                    className="new-expense-actions"
                >Add New Expense</button>
            </div>
    )
}

export default NewExpense