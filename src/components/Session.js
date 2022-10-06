import Button from "./Button";

export default function Session({ date, showtimes, weekday }) {
    return (
        <>
            <h6 data-identifier="session-date">{weekday} - {date}</h6>
            {showtimes.map(showtime => <Button dataIdentifier="hour-minute-btn" key={showtime.id} link={`/assentos/${showtime.id}`} text={showtime.name} />)}
        </>
    );
}
