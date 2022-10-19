import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
    return <Card className='expenses'>
            {props.expenses.map((item) => 
                <ExpenseItem id={item.id}
                title={item.title}
                date={item.date}
                amount={item.amount} />)}
        </Card>
}

export default Expenses;