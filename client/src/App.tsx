import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
    const [text, setText] = React.useState("Loading...");

    React.useEffect(() => {
        (async () => {
            const res = await fetch("/api/drawings");
            const text = await res.text();

            setText(text);
        })();
    }, []);

    return (
        <>
            <p>{text}</p>

            <Routes>
                <Route path="/drawings"></Route>
            </Routes>
        </>
    );
}

export default App;
