import './DateFormatter.css'

const DateFormatter = (props) => {
   const month = props.date.toLocaleString('en-US', {month: "long"});
   const day = props.date.toLocaleString('en-US', {day: '2-digit'});
   const year = props.date.getFullYear();
    return (
        <div className="date">
            <div className="date__month">{month}</div>
            <div className="date__day">{day}</div>
            <div className="date__year">{year}</div>
        </div>
    );
}
export default DateFormatter;
