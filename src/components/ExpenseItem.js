import './ExpenseItem.css';

function ExpenseItem() {
    const items = [
        {
            "date": new Date(2022, 2, 21),
            "title": "Gift for Dad",
            "amount": 20.0
        },
        {
            "date": new Date(2022, 3, 20),
            "title": "Gift for Mom",
            "amount": 23
        }
    ];

    const output = items.map((item) =>
        <div className='expense-item'>
            <div>{item.date.toDateString()}</div>
            <div className='expense-item__description'>
                <h2>{item.title}</h2>
                <div className='expense-item__price'>${item.amount.toString()}</div>
            </div>
        </div>
    );

    return (
        <div>{output}</div>
    )
}

export default ExpenseItem;