import React from 'react'

import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {

    if (props.expenses.length === 0) {
        return (
            <h2 className="expenses-list-fallback">
                Found no expenses.
            </h2>
        )
    }

    return (
        <ul className="expenses-list">
            {props.expenses.map(item => {
                return (
                    <ExpenseItem
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                        key={item.id}
                    />
                )
            })}
        </ul>
    )
}

export default ExpensesList