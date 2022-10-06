import ButtonBox from "./ButtonBox";
import HeaderAction from "./HeaderAction";

import styled from "styled-components";

export default function SuccessPage(props) {
    const {
        cpf,
        name,
        seatsInfo,
        selected
    } = props;

    return (
        <SuccessPageContainer>
            <HeaderAction children={<h3>Pedido feito com sucesso!</h3>}/>

            <section>
                <h4>Filme e sessão</h4>
                <div data-identifier="movie-session-infos-reserve-finished">
                    {seatsInfo.movie.title}
                </div>
                <div data-identifier="movie-session-infos-reserve-finished">
                    {seatsInfo.day.date} {seatsInfo.name}
                </div>
            </section>

            <section>
                <h4>Ingressos</h4>
                {selected.map(selectedSeat =>
                    <div data-identifier="seat-infos-reserve-finished" key={selectedSeat}>
                        Assento {
                            seatsInfo.seats
                                .filter(seat => seat.id === selectedSeat)
                                .map(seat => seat.name)
                        }
                    </div>
                )}
            </section>

            <section>
                <h4>Comprador</h4>
                <div data-identifier="buyer-infos-reserve-finished">
                    Nome: {name}
                </div>
                <div data-identifier="buyer-infos-reserve-finished">
                    CPF: {cpf}
                </div>
            </section>

            <ButtonBox dataIdentifier="back-to-home-btn" link="/" text="Voltar para Home" />
        </SuccessPageContainer>
    );
}

const SuccessPageContainer = styled.div`
    font-size: 22px;
    margin-top: 67px;

    button {
        margin: 62px 0;
    }

    section {
        min-height: 110px;

        div {
            margin: 4px 0;
        }
    }
`;
