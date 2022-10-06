import styled from "styled-components";

export default function Seat({legend, seat, selected, setSelected}) {
    function deSelect() {
        if (!legend) {
            if (seat.isAvailable) {
                if (selected.includes(seat.id)) {
                    setSelected(selected.filter(selectedSeat => selectedSeat !== seat.id),);
                } else {
                    setSelected([...selected, seat.id]);
                }
            } else {
                alert("Esse assento não está disponível.");
            }
        }
    }

    function selectColorBack() {
        let color;

        if (seat.isAvailable) {
            color = selected.includes(seat.id) ? "#1AAE9E" : "#C3CFD9";
        } else {
            color = "#FBE192";
        }

        return color;
    }

    function selectColorBorder() {
        let color;

        if (seat.isAvailable) {
            color = selected.includes(seat.id) ? "#0E7D71" : "#808F9D";
        } else {
            color = "#F7C52B";
        }

        return color;
    }

    return (
        <SeatContainer
            colorBack={selectColorBack}
            colorBorder={selectColorBorder}
            legend={legend}
            onClick={() => deSelect()}
        >
            {(Number(seat.name) < 10) ? "0" + seat.name : seat.name}
        </SeatContainer>
    );
}

const SeatContainer = styled.button`
    background-color: ${({colorBack}) => colorBack};
    border: 1px solid ${({colorBorder}) => colorBorder};
    border-radius: 50%;
    cursor: ${({legend}) => legend ? "default" : "pointer"};
    font-family: inherit;
    font-size: 11px;
    height: 26px;
    letter-spacing: 0.04em;
    line-height: 13px;
    margin: 0 3px 18px 3px;
    width: 26px;
`;
