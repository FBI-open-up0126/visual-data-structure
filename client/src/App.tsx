import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Drawing from "./pages/Drawing";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/drawings" element={<Drawing />}></Route>
            </Routes>
        </>
    );
}

export default App;
