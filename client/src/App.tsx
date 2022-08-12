import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/hi" element={<p>Hello</p>} />
            </Routes>
        </>
    );
}

export default App;
