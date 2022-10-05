import ButtonBox from "./ButtonBox";
import Footer from "./Footer";
import HeaderAction from "./HeaderAction";
import Seat from "./Seat";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function SessionPage() {
    const { sessionId } = useParams();
    const [seatsInfo, setSeatsInfo] = useState(undefined);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
		axios
            .get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)
            .then(res => setSeatsInfo(res.data))
            .catch(err => console.error(err))
    }, []);

    if (!seatsInfo) {
        return "Carregando...";
    }

    return (
        <SessionPageContainer>
            <Main>
                <HeaderAction children={<h5>Selecione o(s) assento(s)</h5>} />

                <Seats>
                    {seatsInfo.seats.map(
                        seat =>
                            <Seat
                                key={seat.id}
                                legend={false}
                                seat={seat}
                                selected={selected}
                                setSelected={setSelected}
                            />
                    )}
                </Seats>

                <Legend>
                    <span>
                        <Seat legend={true} seat={{id: 0, isAvailable: true}} selected={[0]} />

                        <div>Selecionado</div>
                    </span>

                    <span>
                        <Seat legend={true} seat={{id: 0, isAvailable: true}} selected={[]} />

                        <div>Disponível</div>
                    </span>

                    <span>
                        <Seat legend={true} seat={{id: 0, isAvailable: false}} selected={[]} />

                        <div>Indisponível</div>
                    </span>
                </Legend>

                <Info>
                    Nome do comprador:
                    <input placeholder="Digite seu nome..." />

                    CPF do comprador:
                    <input placeholder="Digite seu CPF..."/>
                </Info>

                <ButtonBox link="/sucesso" text="Reservar assento(s)" />
            </Main>
            
            <Footer src={seatsInfo.movie.posterURL} showtimeName={seatsInfo.name} title={seatsInfo.movie.title} weekday={seatsInfo.day.weekday} />
        </SessionPageContainer>
    );
}

const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px auto;
    max-width: 375px;

    input {
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        font-family: inherit;
        height: 51px;
        margin-bottom: 10px;
        padding-left: 14px;

        ::placeholder {
            color: #AFAFAF;
            font-size: 18px;
            font-style: italic;
            line-height: 21px;
        }
    }
`;

const Legend = styled.div`
    display: flex;
    font-size: 13px;
    justify-content: space-around;
    letter-spacing: -0.013em;
    line-height: 15px;
    margin: 0 auto;
    max-width: 375px;
    padding: 0 20px;
    text-align: center;

    div {
        margin-top: -12px;
    }
`;

const Main = styled.div`
    height: calc(100% - 117px);
    margin-bottom: 147px;
`;

const Seats = styled.div`
    margin: 0 auto;
    max-width: 375px;
    text-align: center;    
`;

const SessionPageContainer = styled.div`
    font-size: 18px;
    line-height: 21px;
    margin-top: 67px;
`;
