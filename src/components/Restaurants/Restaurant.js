import React from 'react';

const Restaurant =(props)=> {

    return (   
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.cuisines}</td>
            <td>{props.avg_cost}</td>
            <td>{props.currency}</td>
            <td>{props.table_booking}</td>
            <td>{props.online_delivery}</td>
            <td>{props.rating}</td>
            <td>{props.color}</td>
            <td>{props.text}</td>
            <td>{props.votes}</td>
        </tr>
       )  
}

export default Restaurant;


