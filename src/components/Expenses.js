import React from "react";
import ExpenseItem from "./ExpenseItem.js";

const Expenses = (props) => {
    const expenses = props.expenses

    return (
            expenses.map(contact => (
              <ExpenseItem key={contact.id}
              date={contact.date}
              title={contact.title}
              amount={contact.amount}
              />
            ))
    )
}

export default Expenses;