import React from 'react'

const ExpenseDate = (props) => {
    return (
        <div className="expense-date">
            <div className="expense-date-day">{props.date.toLocaleString("en-EN", { day: '2-digit' })}</div>
            <div className="expense-date-month">{props.date.toLocaleString("en-EN", { month: 'long' })}</div>
            <div className="expense-date-year">{props.date.getFullYear()}</div>
        </div>
    )
}

export default ExpenseDate