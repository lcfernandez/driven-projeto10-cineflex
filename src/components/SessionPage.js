import ButtonBox from "./ButtonBox";
import Footer from "./Footer";
import HeaderAction from "./HeaderAction";
import Seat from "./Seat";

import styled from "styled-components";

export default function SessionPage() {
    return (
        <SessionPageContainer>
            <Main>
                <HeaderAction children={<h5>Selecione o(s) assento(s)</h5>} />

                <Seats>
                    {[
                        {
                            "id": 1,
                            "name": "1",
                            "isAvailable": false,
                        },
                        {
                            "id": 2,
                            "name": "2",
                            "isAvailable": true,
                        },
                        {
                            "id": 3,
                            "name": "3",
                            "isAvailable": true,
                        },
                        {
                            "id": 4,
                            "name": "4",
                            "isAvailable": true,
                        },
                        {
                            "id": 5,
                            "name": "5",
                            "isAvailable": true,
                        },
                        {
                            "id": 6,
                            "name": "6",
                            "isAvailable": true,
                        },
                        {
                            "id": 7,
                            "name": "7",
                            "isAvailable": true,
                        },
                        {
                            "id": 8,
                            "name": "8",
                            "isAvailable": true,
                        },
                        {
                            "id": 9,
                            "name": "9",
                            "isAvailable": true,
                        },
                        {
                            "id": 10,
                            "name": "10",
                            "isAvailable": true,
                        },
                        {
                            "id": 11,
                            "name": "11",
                            "isAvailable": true,
                        },
                        {
                            "id": 12,
                            "name": "12",
                            "isAvailable": true,
                        },
                        {
                            "id": 13,
                            "name": "13",
                            "isAvailable": true,
                        },
                        {
                            "id": 14,
                            "name": "14",
                            "isAvailable": true,
                        },
                        {
                            "id": 15,
                            "name": "15",
                            "isAvailable": true,
                        },
                        {
                            "id": 16,
                            "name": "16",
                            "isAvailable": true,
                        },
                        {
                            "id": 17,
                            "name": "17",
                            "isAvailable": true,
                        },
                        {
                            "id": 18,
                            "name": "18",
                            "isAvailable": true,
                        },
                        {
                            "id": 19,
                            "name": "19",
                            "isAvailable": true,
                        },
                        {
                            "id": 20,
                            "name": "20",
                            "isAvailable": true,
                        },
                        {
                            "id": 21,
                            "name": "21",
                            "isAvailable": true,
                        },
                        {
                            "id": 22,
                            "name": "22",
                            "isAvailable": true,
                        },
                        {
                            "id": 23,
                            "name": "23",
                            "isAvailable": true,
                        },
                        {
                            "id": 24,
                            "name": "24",
                            "isAvailable": true,
                        },
                        {
                            "id": 25,
                            "name": "25",
                            "isAvailable": true,
                        },
                        {
                            "id": 26,
                            "name": "26",
                            "isAvailable": true,
                        },
                        {
                            "id": 27,
                            "name": "27",
                            "isAvailable": true,
                        },
                        {
                            "id": 28,
                            "name": "28",
                            "isAvailable": true,
                        },
                        {
                            "id": 29,
                            "name": "29",
                            "isAvailable": true,
                        },
                        {
                            "id": 30,
                            "name": "30",
                            "isAvailable": true,
                        },
                        {
                            "id": 31,
                            "name": "31",
                            "isAvailable": true,
                        },
                        {
                            "id": 32,
                            "name": "32",
                            "isAvailable": true,
                        },
                        {
                            "id": 33,
                            "name": "33",
                            "isAvailable": true,
                        },
                        {
                            "id": 34,
                            "name": "34",
                            "isAvailable": true,
                        },
                        {
                            "id": 35,
                            "name": "35",
                            "isAvailable": true,
                        },
                        {
                            "id": 36,
                            "name": "36",
                            "isAvailable": true,
                        },
                        {
                            "id": 37,
                            "name": "37",
                            "isAvailable": true,
                        },
                        {
                            "id": 38,
                            "name": "38",
                            "isAvailable": true,
                        },
                        {
                            "id": 39,
                            "name": "39",
                            "isAvailable": true,
                        },
                        {
                            "id": 40,
                            "name": "40",
                            "isAvailable": true,
                        },
                        {
                            "id": 41,
                            "name": "41",
                            "isAvailable": true,
                        },
                        {
                            "id": 42,
                            "name": "42",
                            "isAvailable": true,
                        },
                        {
                            "id": 43,
                            "name": "43",
                            "isAvailable": true,
                        },
                        {
                            "id": 44,
                            "name": "44",
                            "isAvailable": true,
                        },
                        {
                            "id": 45,
                            "name": "45",
                            "isAvailable": true,
                        },
                        {
                            "id": 46,
                            "name": "46",
                            "isAvailable": true,
                        },
                        {
                            "id": 47,
                            "name": "47",
                            "isAvailable": true,
                        },
                        {
                            "id": 48,
                            "name": "48",
                            "isAvailable": true,
                        },
                        {
                            "id": 49,
                            "name": "49",
                            "isAvailable": true,
                        },
                        {
                            "id": 50,
                            "name": "50",
                            "isAvailable": true,
                        },
                    ].map(
                        seat =>
                            <Seat
                                colorBack={seat.isAvailable ? "#C3CFD9" : "#FBE192"}
                                colorBorder={seat.isAvailable ? "#808F9D" : "#F7C52B"}
                                key={seat.id}
                                name={seat.name}
                            />
                    )
                    }
                </Seats>

                <Legend>
                    <span>
                        <Seat colorBack={"#1AAE9E"} colorBorder={"#0E7D71"} />

                        <div>Selecionado</div>
                    </span>

                    <span>
                        <Seat colorBack={"#C3CFD9"} colorBorder={"#808F9D"} />

                        <div>Disponível</div>
                    </span>

                    <span>
                        <Seat colorBack={"#FBE192"} colorBorder={"#F7C52B"} />

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
            
            <Footer src={"https://image.tmdb.org/t/p/w500/riYInlsq2kf1AWoGm80JQW5dLKp.jpg"} showtimeName={"15:00"} title={"Enola Holmes"} weekday={"Quinta-feira"} />
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
