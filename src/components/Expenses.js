import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    return <div class='expenses'>
            {props.expenses.map((item) => 
                <ExpenseItem id={item.id}
                title={item.title}
                date={item.date}
                amount={item.amount} />)}
        </div>
}

export default Expenses;