import Card from "../UI/Card";
import ProgressBar from "./ProgressBar";
import "./Graph.css"

function Graph() {

    const chosenYear = (event) => {
        alert(event.target.value);
    }

    return (
        <Card className="graph-expenses">
            <select className="year-button" onChange={chosenYear}>
                <option value="Year">Year</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
            <div className="progressBar-group">
                <ProgressBar num={0} />
                <ProgressBar num={1} />
                <ProgressBar num={2} />
                <ProgressBar num={3} />
                <ProgressBar num={4} />
                <ProgressBar num={5} />
                <ProgressBar num={6} />
                <ProgressBar num={7} />
                <ProgressBar num={8} />
                <ProgressBar num={9} />
                <ProgressBar num={10} />
                <ProgressBar num={11} />
            </div>
        </Card>
    )
}

export default Graph;