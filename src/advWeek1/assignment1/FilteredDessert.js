const FilteredDessert= (props) => {
    console.log(props.data)
    const filteredDesserts = props.data.filter(dessert=>{
       return dessert.calories<=400
    }).sort((a, b) => a.calories - b.calories)
        .map(dessert => {
        const displayVal =  `${dessert.name} - ${dessert.calories} cal`;
        return <li>{displayVal}</li>
    });
    return (
        <ul>{filteredDesserts}</ul>
    )
}

export default FilteredDessert;