import './ExpenseItem.css';

function ExpenseItem(props) { 
    return (
        <div id={props.id} className='expense-item'>
            <div>{props.date.toDateString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount.toString()}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;