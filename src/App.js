import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";


function App() {
    const [value, setValue] = useState('ТЕКТС В ИНПУТЕ')


    return (
        <div className="App">
            <ClassCounter />
        </div>
    );
}

export default App;
