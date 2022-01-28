import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card'

const NewExpense = (props) => {

    /**
     * a constante 'saveExpenseDataHandler' tem como parâmetro a propriedade 'enteredExpenseData'.
     * '...enteredExpenseData' faz com que o objeto 'enteredData' seja adicionado neste novo objeto;
     */
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
    /**
     * onSaveExpenseData é uma prop para o componente ExpenseForm, a qual irá receber uma função. Ou seja, irá ser realizada dentro do componente;
    */
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpense;