import React,{useState} from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import './Expenses.css';
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = (props.data.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    }));

    const updateExpenseItem = (props.data.filter(expense => {
        // return expense.id
    }))

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onFilteredYear={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses}/>

                {/*{props.data.filter((expenseYear) => (expenseYear.date.getFullYear().toString() === filteredYear)).map((expense) => (*/}

                {/*{filteredExpenses.length === 0 ?*/}
                {/*    (<p>No Expenses found.</p>) :*/}
                {/*    (filteredExpenses.map((expense) => (*/}
                {/*            <ExpenseItem*/}
                {/*                key={expense.id}*/}
                {/*                title={expense.title}*/}
                {/*                amount={expense.amount}*/}
                {/*                date={expense.date}*/}
                {/*            />))*/}
                {/*    )*/}
                {/*}*/}

                {/*{filteredExpenses.length === 0 && (<p>No Expenses found.</p>)} */}
                {/*{filteredExpenses.length > 0 && filteredExpenses.map((expense) => (*/}
                {/*    <ExpenseItem*/}
                {/*        key={expense.id}*/}
                {/*        title={expense.title}*/}
                {/*        amount={expense.amount}*/}
                {/*        date={expense.date}*/}
                {/*    />))}*/}

                {/*<ExpenseItem title={props.data[0].title} amount={props.data[0].amount} date={props.data[0].date}/>*/}
                {/*<ExpenseItem title={props.data[1].title} amount={props.data[1].amount} date={props.data[1].date}/>*/}
                {/*<ExpenseItem title={props.data[2].title} amount={props.data[2].amount} date={props.data[2].date}/>*/}
            </Card>
        </div>
    );
}
export default Expenses;
