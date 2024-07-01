import {useRef} from "react";

function ExUseRefHook() {
    const formInputRef = useRef(null);

    const focusInput = () => {
        formInputRef.current.focus();
    }

    return (
        <>
            <h1>Using useRef to access underlying DOM</h1>
            <input ref={formInputRef} type="text"/>
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}

export default ExUseRefHook;