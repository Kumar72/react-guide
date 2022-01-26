import React, {useState} from "react";
import './EditExpense.css';
import UpdateForm from "./UpdateForm";
import DeleteExpense from "../DeleteExpense/DeleteExpense";

const EditExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const showFormHandler = () => {
        setShowForm(true);
    }
    const cancelFormHandler = () => {
        setShowForm(false);
    }
    const updateExpenseDataHandler = (updatedExpenseData) => {
        const expenseData = {
            ...updatedExpenseData
        }
        props.onUpdateExpense(expenseData);
        setShowForm(false);
    }
    const deleteExpenseItem = () => {

    }
    return (
        <div className='gap'>
            {!showForm && <button onClick={showFormHandler}>Edit</button> }
            {showForm && <UpdateForm onUpdateExpenseData={updateExpenseDataHandler}
                                     onCancelForm={cancelFormHandler}
                                     onDelete={deleteExpenseItem}
                                     key={props.key} title={props.title} date={props.date} amount={props.amount}/>}
        </div>
    );
}

export default EditExpense;
