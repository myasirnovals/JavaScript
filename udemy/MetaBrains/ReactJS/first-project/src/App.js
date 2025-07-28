import React, {useEffect, useState} from 'react';
import './App.css';
import './Counter.css';
import Header from './Components/Header';
import Counter from './Components/Counter';

function App() {
    return (<>
        <div className="main">
            <Header/>
            <Counter/>
        </div>
    </>);
}

export default App;
