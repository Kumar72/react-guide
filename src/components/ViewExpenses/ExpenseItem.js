import React, { useState } from "react";
import DateFormatter from "../Utility/DateFormatter";
import Card from "../UI/Card";
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Shopping");
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
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </>
    );
}
export default ExpenseItem;
