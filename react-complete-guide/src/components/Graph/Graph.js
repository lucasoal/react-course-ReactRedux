import Card from "../UI/Card";
import ProgressBar from "./ProgressBar";
import "./Graph.css"

function Graph() {

    var root = document.querySelector(':root');

    function setBar(){
        // root.style.setProperty('--progress','3');
        alert("aloww");
    }

    return (
        <Card className="graph-expenses">
            <select className="year-button">
                <option value="default" selected>Year</option>
                <option value="v1">2021</option>
                <option value="v2">2020</option>
                <option value="v3">2019</option>
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