// Take functions that return React elements and call them inside their render logic

import {useEffect, useState} from "react";

const DataFetcher = ({render, url}) => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        if (url.includes("desserts")){
            setData(["cake","ice cream","pie","brownie"])
        }else{
            setData(["water","soda","juice"])
        }
    },[])

    return render(data);
}

const DessertCount = () => {
    return (
        <DataFetcher url="https://littlelemon/deserts" render={(data)=> <p>{data.length} desserts</p>}/>
    )
}

const DrinksCount = () => {
    return (
        <DataFetcher url="https://littlelemon/deserts" render={(data)=> <p>{data.length} drinks</p>}/>
    )
}


const RenderPropsPattern = () => {
    return (
        <div className="App">
            <header className="Header">Render Props Pattern Example</header>
            <DessertCount/>
            <DrinksCount/>
        </div>
    )
}

export default RenderPropsPattern;