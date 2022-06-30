import './Time.css';

function Time() {
    return (
        <div className="time-container">
            <h2 className="title">Current time</h2>
            <div className="time-content">
                <p className="time-value">{time.hours}</p>
                <p className="time-space">:</p>
                <p className="time-value">{time.minutes}</p>
                <p className="time-space">:</p>
                <p className="time-value">{time.second}</p>
            </div>
        </div>
    )
}

const date = new Date();
const time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    second: String(date.getSeconds()).padStart(2, '0')
}

export default Time;