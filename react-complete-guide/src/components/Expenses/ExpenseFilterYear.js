import Card from "../UI/Card";
import "./ExpenseFilterYear.css"

function ExpenseFilterYear(props) {

    const selectedYear = (event) => {
        event.onChangeFilter(event.target.value);
    }

    return (
        <Card className="graph-expenses">
            <select className="year-button" onChange={selectedYear}>
                <option value="Year">Year</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
            <div className="progressBar-group">
            </div>
        </Card>
    )
}

export default ExpenseFilterYear;