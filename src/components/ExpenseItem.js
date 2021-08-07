// a component in react is just a javasript function
// returns JSX code
// you can only have one return statement per component
// there should only be one root element in a jsx code snippet. 
// for  example a div to wrap everything
/* you can style your JS files by creating another file with the 
same name as the JS file but with a .css at the end of it. Lastly
to render changes you are making to the specific file you have to import
the css file into the JS file and after that just link of the classNames with
the CSS file just like normal HTML + CSS*/
// WE WANT TO BE ABLE TO REUSE OUR COMPONENTS
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";


const ExpenseItem = (props) => {
    const month = props.date.toLocaleString("en-US", {month: "long"});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("en-US", { day : "2-digit" });
    return (
        <div className = "expense-item">
            <ExpenseDate month={month} year={year} day={day}/>
            <div className = "expense-item__description">
                <h2>{props.title}</h2>
                <div className = "expense-item__price">$ {props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
