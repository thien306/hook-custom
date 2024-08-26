import userClock from "../hooks/useClock"

function MyClock() {
    const [time, ampm] = userClock();
    return(
        <div id="clock-style">
        {time}
        <span>{ampm}</span>
        </div>
    );
}

export default MyClock;

