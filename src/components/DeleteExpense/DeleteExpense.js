import React, {useState} from "react";
import './DeleteExpense.css';

const DeleteExpense = (props) => {
    const [item, setItem] = useState(props.itemId);
    const removeExpense = () => {
    //    add remove Expense logic

    }
    return (
        <div>
            <button onClick={removeExpense}>Delete Expense</button>
        </div>
    );
}

export default DeleteExpense;
