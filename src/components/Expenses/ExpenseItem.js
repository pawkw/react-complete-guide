import React, {useState} from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => { 
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        console.log(title);
        setTitle("Updated!");
    }

    return (
        <Card id={props.id} className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount.toString()}</div>
            </div>
            <div>
                <button onClick={clickHandler}>Change title.</button>
            </div>
        </Card>
    )
}

export default ExpenseItem;