import ChooseMoviePage from "./ChooseMoviePage";
import GlobalStyle from "../assets/css/GlobalStyle";
import HeaderApp from "./HeaderApp";
import MoviePage from "./MoviePage";
import SessionPage from "./SessionPage";
import SuccessPage from "./SuccessPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function App() {
    const [cpf, setCpf] = useState(undefined);
    const [name, setName] = useState(undefined);
    const [seatsInfo, setSeatsInfo] = useState(undefined);
    const [selected, setSelected] = useState([]);

    return (
        <BrowserRouter>
            <HeaderApp />

            <Routes>
                <Route path="/" element={<ChooseMoviePage />} />
				<Route path="/sessoes/:idFilme" element={<MoviePage />}/>
                <Route path="/assentos/:idSessao" element={
                    <SessionPage
                        cpf={cpf}
                        name={name}
                        seatsInfo={seatsInfo}
                        selected={selected}
                        setCpf={setCpf}
                        setName={setName}
                        setSeatsInfo={setSeatsInfo}
                        setSelected={setSelected}
                    />
                } />
                <Route path="/sucesso" element={
                    <SuccessPage
                        cpf={cpf}
                        name={name}
                        seatsInfo={seatsInfo}
                        selected={selected}
                    />
                }/>
            </Routes>

            <GlobalStyle />
        </BrowserRouter>
    );
}
