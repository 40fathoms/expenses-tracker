import React from 'react'

import ExpenseDate from './ExpenseDate'
import Card from './Card'

const ExpenseItem = (props) => {

  return (
    <Card className="expenses-item">

      <ExpenseDate
        date={props.date}
      />

      <div className="expenses-item-description">
        <h2>{props.title}</h2>
        <div className="expenses-item-price">$ {props.amount}</div>
      </div>

    </Card>
  )
}

export default ExpenseItem