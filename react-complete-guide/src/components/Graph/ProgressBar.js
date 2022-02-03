import "./ProgressBar.css"

function ProgressBar(prop) {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    return (
        <div>
            <div className="progressBar" />
            <div>{months[prop.num]}</div>
        </div>
    );
}

export default ProgressBar;