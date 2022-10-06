import Button from "./Button";

export default function Session({date, showtimes, weekday}) {
    return (
        <>
            <h6>{weekday} - {date}</h6>
            {showtimes.map(showtime => <Button key={showtime.id} link={`/assentos/${showtime.id}`} text={showtime.name} />)}
        </>
    );
}
