import React, { useState } from "react";
import DateFormatter from "../Utility/DateFormatter";
import Card from "../UI/Card";
import './ExpenseItem.css';
import EditExpense from "../UpdateExpense/EditExpense";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const [showExpenseItem, setShowExpenseItem] = useState(false);

    const showExpenseItemHandler = () => {
        setShowExpenseItem(true);
    }

    const hideExpenseItemHandler = () => {
        setShowExpenseItem(false);
    }

    const updateExpenseDataHandler = (updatedExpenseData) => {
        const expenseData = {
            ...updatedExpenseData
        //    TODO
        }
        props.onUpdateExpense(expenseData);
        setShowExpenseItem(false);
    }

    const removeExpenseItemHandler = expenseItemData => {
        props.key.remove(expenseItemData);
    //    TODO
    }


    const clickHandler = () => {
        setTitle("Title Changed...");
    }
    return(
        <>
            <Card className="expense-item">
                {/*<div>{props.date.toLocaleDateString('en-US',{month: 'long'})}</div>*/}
                <DateFormatter date={props.date}/>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                </div>
                <div className="expense-item__price">${props.amount}</div>
                <EditExpense onUpdateExpense={updateExpenseDataHandler} onRemoveExpense={removeExpenseItemHandler}
                             key={props.key} title={props.title} date={props.date} amount={props.amount}/>
                {/*<button onClick={clickHandler}>Change Title</button>*/}
            </Card>
        </>
    );
}
export default ExpenseItem;
