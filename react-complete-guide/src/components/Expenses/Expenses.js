import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilterYear from './ExpenseFilterYear';
import './Expenses.css';

const Expenses = (props) => {

    const setSelectedYear = (selectedYear) => {
        console.log("Expenses.js → prop = " + selectedYear)
    }

    return (
        <Card className="expenses">
            <ExpenseFilterYear className="graph-expenses" onSelectYear={setSelectedYear}/>
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date} />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date} />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date} />
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date} />
        </Card>
    )
}

export default Expenses;