import React from 'react'

const ExpenseDate = (props) => {
    return (
        <div className="expenses-date">
            <div className="expenses-date-day">{props.date.toLocaleString("en-EN", { day: '2-digit' })}</div>
            <div className="expenses-date-month">{props.date.toLocaleString("en-EN", { month: 'long' })}</div>
            <div className="expenses-date-year">{props.date.getFullYear()}</div>
        </div>
    )
}

export default ExpenseDate