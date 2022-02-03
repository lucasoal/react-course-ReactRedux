import './ExpenseFilter.css'

const ExpenseFilter = (props) => {

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler} className="expenses-filter__select">
                    <option value='Year'>Year</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;

/**
 * ExpenseFilter deve passar uma prop do child (ele próprio) para o pai, que no caso é o Expenses
 * Quando vai se passar props do child para o pai, faz-se os seguintes passos:
 * - Cria a função no componente filho - ela irá capturar o evento
 * - Define ela dentro do componente filho (nesse caso, onChange)
 * - Cria a função equivalente no componente pai
 * - Quando o componente filho for executado no componente pai, passar como argumento para o componente
 */