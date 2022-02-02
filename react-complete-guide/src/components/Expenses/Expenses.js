import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css';
import Card from '../UI/Card'

function Expenses(props) {

    const filterChangeHandler = (selectedYear) => {
        alert(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpenseFilter onChangeFilter={filterChangeHandler}/>
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date} />
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date} />
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date} />
        </Card>
    )
}

export default Expenses;