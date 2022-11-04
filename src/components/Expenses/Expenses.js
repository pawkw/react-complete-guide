import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
        const [filterYear, setFilterYear] = useState('2020');

        const onChangeYearHandler = enteredYear => {
                setFilterYear(enteredYear);
                console.log("Expenses changed filter year.");
                console.log(filterYear);
        };

        return <div>
                <Card className='expenses'>
                        <ExpensesFilter selected={filterYear} onChangeYear={onChangeYearHandler} />
                        {props.expenses.map((item) =>
                                <ExpenseItem id={item.id}
                                        title={item.title}
                                        date={item.date}
                                        amount={item.amount} />)}
                </Card>
        </div>
}

export default Expenses;