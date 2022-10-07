import ButtonLarge from "./ButtonLarge";
import Footer from "./Footer";
import HeaderAction from "./HeaderAction";
import Seat from "./Seat";

import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function SessionPage(props) {
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
    
    const { idSessao } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
		axios
            .get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
            .then(res => setSeatsInfo(res.data))
            .catch(err => console.error(err.response.data));

        /* the commentary below is necessary to fix the
        "React Hook useEffect has a missing dependency" warning: */
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function reserveSeats(e) {
        e.preventDefault(); // prevent form redirect
        
        const body = {
            ids: selected,
            name,
            cpf
        };

        axios
            .post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`, body)
            .then(navigate("/sucesso"))
            .catch(err => console.error(err.response.data));
    }

    if (!seatsInfo) {
        return (
            <SessionPageContainer>
                Carregando...
            </SessionPageContainer>
        );
    }

    return (
        <SessionPageContainer>
            <Main>
                <HeaderAction children={<h5>Selecione o(s) assento(s)</h5>} />

                <Seats>
                    {seatsInfo.seats.map(
                        seat =>
                            <Seat
                                dataIdentifier="seat"
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
                        <Seat
                            dataIdentifier="seat-selected-subtitle"
                            legend={true}
                            seat={{id: 0, isAvailable: true}}
                            selected={[0]}
                        />

                        <div>Selecionado</div>
                    </span>

                    <span>
                        <Seat
                            dataIdentifier="seat-available-subtitle"
                            legend={true}
                            seat={{id: 0, isAvailable: true}}
                            selected={[]}
                        />

                        <div>Disponível</div>
                    </span>

                    <span>
                        <Seat
                            dataIdentifier="seat-unavailable-subtitle"
                            legend={true}
                            seat={{id: 0, isAvailable: false}}
                            selected={[]}
                        />

                        <div>Indisponível</div>
                    </span>
                </Legend>

                <Form onSubmit={reserveSeats}>
                    <label htmlFor="nome">Nome do comprador:</label>
                    <input
                        data-identifier="buyer-name-input"
                        id="nome"
                        onChange={e => setName(e.target.value)}
                        type="text"
                        placeholder="Digite seu nome..."
                    />

                    <label htmlFor="cpf">CPF do comprador:</label>
                    <input
                        data-identifier="buyer-cpf-input"
                        id="cpf"
                        onChange={e => setCpf(e.target.value)}
                        type="text"
                        placeholder="Digite seu CPF..."
                    />

                    <ButtonLarge
                        dataIdentifier="reservation-btn"
                        text="Reservar assento(s)"
                        type="submit"
                    />
                </Form>
            </Main>
            
            <Footer
                showtimeName={seatsInfo.name}
                src={seatsInfo.movie.posterURL}
                title={seatsInfo.movie.title}
                weekday={seatsInfo.day.weekday}
            />
        </SessionPageContainer>
    );
}

const Form = styled.form`
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
