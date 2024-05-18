import MealsProvider from "./MealsProvider";
import './App.css';
import MealsList from "./MealsList";
import Counter from "./Counter";

function App() {
    return (
        <>
            <h1>Hello</h1>

            <MealsProvider>
                <MealsList></MealsList>
                <Counter></Counter>
            </MealsProvider>
        </>
    );
}


export default App;

