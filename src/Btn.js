function Btn(props) {
    const clickHandler = () => console.log('Clicked')


    return (
        <p>
            <h1>Hello {props.name}</h1>
            <button onClick={clickHandler}>Click Me</button>
            <button onMouseOver={clickHandler}>Mouse Over Me</button>
        </p>
    )
}

export default Btn;