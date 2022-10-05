import ButtonBox from "./ButtonBox";
import HeaderAction from "./HeaderAction";

import styled from "styled-components";

export default function SuccessPage(props) {
    const {
        cpf,
        date,
        title,
        name,
        seats,
        sessionName
    } = props;

    return (
        <SuccessPageContainer>
            <HeaderAction children={<h3>Pedido feito com sucesso!</h3>}/>

            <section>
                <h4>Filme e sessão</h4>
                {/* {title}
                {date} {sessionName} */}
                <div>Enola Holmes</div>
                <div>24/06/2021 15:00</div>
            </section>

            <section>
                <h4>Ingressos</h4>
                {/* {seats.map(seat => <div key={seat.id} >Assento {seat.id}</div>)} */}
                <div>Assento 15</div>
                <div>Assento 16</div>
            </section>

            <section>
                <h4>Comprador</h4>
                {/*Nome: {name}
                CPF: {cpf} */}
                <div>Nome: João da Silva Sauro</div>
                <div>CPF: 123.456.789-10</div>
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
        height: 110px;

        div {
            margin: 4px 0;
        }
    }
`;
