import {useState} from "react";

function InputComponent() {
    const [inputText, setText] = useState('Hello')

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <>
            <input value={inputText} onChange={handleChange}/>
            <p>You typed {inputText}</p>
            <button onClick={() => setText('hello')}>Reset</button>
        </>
    )
}

export default InputComponent;