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
                <div>{seatsInfo.movie.title}</div>
                {seatsInfo.day.date} {seatsInfo.name}
            </section>

            <section>
                <h4>Ingressos</h4>
                {selected.map(selectedSeat =>
                    <div key={selectedSeat}>
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
                <div>Nome: {name}</div>
                CPF: {cpf}
            </section>

            <ButtonBox link="/" text="Voltar para Home" />
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
