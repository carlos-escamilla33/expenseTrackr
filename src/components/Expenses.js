import React from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css"

const Expenses = (props) => {
    const expenses = props.items

    return (
            expenses.map(contact => (
                <div className="expenses">
                    <ExpenseItem key={contact.id}
                    date={contact.date}
                    title={contact.title}
                    amount={contact.amount}
                    />
                </div>
            ))
    )
}

export default Expenses;