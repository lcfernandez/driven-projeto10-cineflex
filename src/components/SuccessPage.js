import ButtonLarge from "./ButtonLarge";
import HeaderAction from "./HeaderAction";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SuccessPage(props) {
    const {
        cpf,
        name,
        seatsInfo,
        selected,
        setCpf,
        setName,
        setSeatsInfo,
        setSelected
    } = props;

    const navigate = useNavigate();

    function backHome() {
        setCpf(undefined);
        setName(undefined);
        setSeatsInfo(undefined);
        setSelected([]);
        
        navigate("/");
    }

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

                {selected.sort().map(
                    selectedSeat =>
                        <div data-identifier="seat-infos-reserve-finished" key={selectedSeat}>
                            Assento {
                                seatsInfo.seats.find(seat => seat.id === selectedSeat).name
                            }
                        </div>
                )}
            </section>

            <section>
                <h4>Comprador</h4>

                <div data-identifier="buyer-infos-reserve-finished">
                    Nome: {name ? name : "não informado"}
                </div>

                <div data-identifier="buyer-infos-reserve-finished">
                    CPF: {cpf ? cpf : "não informado"}
                </div>
            </section>

            <ButtonLarge dataIdentifier="back-to-home-btn" onClick={backHome} text="Voltar para Home" />
        </SuccessPageContainer>
    );
}

const SuccessPageContainer = styled.div`
    font-size: 22px;
    margin-top: 67px;

    section {
        min-height: 110px;

        div {
            margin: 4px 0;
        }
    }
`;
