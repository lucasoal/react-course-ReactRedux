import Card from "../UI/Card";
import GraphBar from "./GraphBar";
import "./Graph.css"

function Graph() {

    return (
        <Card className="graph">
            <select className="year-button">
                <option value="default" selected>Year</option>
                <option value="v1">2021</option>
                <option value="v2">2020</option>
                <option value="v3">2019</option>
            </select>
            <div className="month">Month</div>
            <GraphBar/>
        </Card>
    )
}

export default Graph;