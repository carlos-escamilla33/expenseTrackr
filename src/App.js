import React from 'react';
import Expenses from "./components/Expenses.js";


function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </>
  )
}

export default App;
// JSX combines html css and js
// react lets us build custom html element aka components
// using innerHTML is an imperative way of programming
// react is declarative
// component files and components in general should have a capital first letter