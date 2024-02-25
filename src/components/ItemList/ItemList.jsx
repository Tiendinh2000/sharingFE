import React, {useEffect, useState} from "react";
import itemApi from "../../api/itemApi";
import Category from "./Category";

function ItemList() {
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        const fetchItemList = async () => {
            const response = await itemApi.getAll();

            console.log(response);
            setItemList(response);
        };

        fetchItemList();
    }, []);

    console.log("state: ");

    return (
        <table style={style} className="table">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            {itemList.map((item) => {
                return (
                    <tr key={item.item_id}>
                        <th scope="row">{item.item_id}</th>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <Category category={item.category}/>
        
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

const style = {
    border: "2px solid black",
    width: "100%",
    textAlight: "center",
};

// const Cat=({data})=>{
//     return(<h1 key={data.id}>{data.type}</h1>);
// }

export default ItemList;
