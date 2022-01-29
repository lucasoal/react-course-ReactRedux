import Card from "../UI/Card";
import GraphBar from "./GraphBar";
import "./Graph.css"

function Graph() {

    return (
        <Card className="graph">
            <button className="year-button">Year</button>
            <GraphBar/>
        </Card>
    )
}

export default Graph;