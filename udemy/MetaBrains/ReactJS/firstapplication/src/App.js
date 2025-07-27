import React, {useEffect, useState} from "react";
import User from "./User";
import Test from "./Test";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";
import ErrorPage from "./Components/ErrorPage";
import "./App.css";
import {Routes, Route} from "react-router-dom";

function App() {
    return (<>
        <Routes>
            <Route
                path='/'
                element={
                    <>
                        <Header/>
                        <Home/>
                    </>
                }
            />
            <Route
                path='/about'
                element={
                    <>
                        <Header/>
                        <About/>
                    </>
                }
            />

            <Route
                path='*'
                element={
                    <>
                        <ErrorPage/>
                    </>
                }
            />
        </Routes>
    </>);
}

export default App;

