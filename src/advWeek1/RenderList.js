
const topDesserts = [
    {
        id:"1",
        title:"Tiramisu",
        description:"The beset tiramisu in town",
        image:"https://picsum.photos/200/300/?random",
        price:"$5.00"
    },
    {
        id:"2",
        title:"Lemon Ice Cream",
        description:"Mind blowing taste",
        image:"https://picsum.photos/200/300/?random",
        price:"$5.00"
    },
    {
        id:"3",
        title:"Chocolate mousse",
        description:"Unexpected flavour",
        image:"https://picsum.photos/200/300/?random",
        price:"$6.00"
    }
]

const RenderList = () => {

    const listItems = topDesserts.map(dessert=>{
        const itemText= `${dessert.title} - ${dessert.price}`;
        return <li>{itemText}</li>
    });

    return(
        <ul>{listItems}</ul>
    );
}

export default RenderList;