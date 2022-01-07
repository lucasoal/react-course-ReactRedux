import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card'

const NewExpense = () => {
    return(
        <div className="new-expense">
            <ExpenseForm/>
        </div>
    )
};

export default NewExpense;