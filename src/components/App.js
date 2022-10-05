import ChooseMoviePage from "./ChooseMoviePage";
import GlobalStyle from "../assets/css/GlobalStyle";
import HeaderApp from "./HeaderApp";
import MoviePage from "./MoviePage";
import SessionPage from "./SessionPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <HeaderApp />

            <Routes>
                <Route path="/" element={<ChooseMoviePage />} />
				<Route path="/filme" element={<MoviePage /> }/>
                <Route path="/sessao" element={<SessionPage /> }/>
            </Routes>

            <GlobalStyle />
        </BrowserRouter>
    );
}
