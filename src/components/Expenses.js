import React from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css"
import Card from "./Card";

const Expenses = (props) => {
    const expenses = props.items

    return (
            expenses.map(contact => (
                <Card className="expenses">
                    <ExpenseItem key={contact.id}
                    date={contact.date}
                    title={contact.title}
                    amount={contact.amount}
                    />
                </Card>
            ))
    )
}

export default Expenses;