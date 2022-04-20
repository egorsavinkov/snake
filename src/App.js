import './App.css';
import Main from "./components/Main";
import {useSelector} from "react-redux";
import {pageBackground} from "./utils/Constants";

function App() {
    const page = useSelector(state => state.page);

    return (
        <div className={pageBackground[page]}>
            <Main/>
        </div>
    );
}

export default App;