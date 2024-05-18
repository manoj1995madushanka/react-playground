import React from "react";

const MealsContext = React.createContext();

const todayMeals = ["Baked Beans", "Chicken", "Bread"];

const MealsProvider = ({children}) => {
    const [meals, setMeals] = React.useState(todayMeals)

    return (
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    )
}

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;