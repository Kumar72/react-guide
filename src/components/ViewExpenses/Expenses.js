import React,{useState} from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const showExpenseItem = () => {

    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onFilteredYear={filterChangeHandler}/>
                <ExpenseItem title={props.data[0].title} amount={props.data[0].amount} date={props.data[0].date}/>
                <ExpenseItem title={props.data[1].title} amount={props.data[1].amount} date={props.data[1].date}/>
                <ExpenseItem title={props.data[2].title} amount={props.data[2].amount} date={props.data[2].date}/>
            </Card>
        </div>
    );
}
export default Expenses;
