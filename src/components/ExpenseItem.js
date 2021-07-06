import './ExpenseItem.css';
import DateFormatter from "./DateFormatter";
import Card from "./Card";

function ExpenseItem(props) {
    return(
        <>
            <Card className="expense-item">
                {/*<div>{props.date.toLocaleDateString('en-US',{month: 'long'})}</div>*/}
                <DateFormatter date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                </div>
                <div className="expense-item__price">${props.amount}</div>
            </Card>
        </>
    );
}
export default ExpenseItem;
