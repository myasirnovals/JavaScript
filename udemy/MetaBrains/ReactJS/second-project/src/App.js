import './App.css';
import {useState} from "react";

function App() {
    const [result, setResult] = useState('');

    const clickHandler = (event) => {
        setResult(result.concat(event.target.value));
    };

    const clearDisplay = () => {
        setResult('');
    }

    const calculate = () => {
        // eslint-disable-next-line no-eval
        setResult(eval(result).toString());
    }

    return (<>
            <div className="calc">
                <input type="text" name="anwer" id="answer" placeholder="0" disabled={true} value={result}/>

                {/*Number*/}
                <input type="button" value="9" className="button buttonCalc" onClick={clickHandler}/>
                <input type="button" value="8" className="button buttonCalc" onClick={clickHandler}/>
                <input type="button" value="7" className="button buttonCalc" onClick={clickHandler}/>
                <input type="button" value="6" className="button buttonCalc" onClick={clickHandler}/>
                <input type="button" value="5" className="button buttonCalc" onClick={clickHandler}/>
                <input type="button" value="4" className="button buttonCalc" onClick={clickHandler}/>
                <input type="button" value="3" className="button buttonCalc" onClick={clickHandler}/>
                <input type="button" value="2" className="button buttonCalc" onClick={clickHandler}/>
                <input type="button" value="1" className="button buttonCalc" onClick={clickHandler}/>
                <input type="button" value="0" className="button buttonCalc" onClick={clickHandler}/>

                {/*Operator*/}
                <input type="button" value="+" className="button buttonOpt" onClick={clickHandler}/>
                <input type="button" value="-" className="button buttonOpt" onClick={clickHandler}/>
                <input type="button" value="/" className="button buttonOpt" onClick={clickHandler}/>
                <input type="button" value="x" className="button buttonOpt" onClick={clickHandler}/>
                <input type="button" value="%" className="button buttonOpt" onClick={clickHandler}/>
                <input type="button" value="." className="button buttonOpt" onClick={clickHandler}/>

                {/*Calculate*/}
                <input type="button" value="Clear" className="button button1 buttonClear" onClick={clearDisplay}/>
                <input type="button" value="=" className="button button1" onClick={calculate}/>
            </div>
        </>);
}

export default App;
