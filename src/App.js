import './App.css';

const Button = ({children,backgroundColor}) => {
  return <button style={{backgroundColor}}>{children}</button>
}

const Alert = ({children})=>{
  return(
      <>
        <div className="Overlay"></div>
        <div className="Alert">{children}</div>
      </>
  )
}

const DeleteButton = () => {
  return <Button backgroundColor="red">Delete</Button>
}

function App() {
  return (
    <div className="App">
      <header>Little Lemon Restaurent</header>
      <Alert>
        <h4>Delete Account</h4>
        <p>
          Are you sure?
        </p>
        <DeleteButton/>
      </Alert>
    </div>
  );
}

export default App;
