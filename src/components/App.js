import ChooseMovie from "./ChooseMovie";
import GlobalStyle from "../assets/css/GlobalStyle";
import HeaderApp from "./HeaderApp";
import Movie from "./Movie";

export default function App() {
    return (
        <>
            <HeaderApp />
            <ChooseMovie />
            {/* <Movie /> */}
            <GlobalStyle />
        </>
    );
}
