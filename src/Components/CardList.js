import React from "react";
import Card from "./Card";

const CardList = ({cyborgs}) => {

    return(
        <div>
            {
            cyborgs.map((user, i) => {
                return (
                <Card 
                key={i} 
                id={cyborgs[i].id} 
                name={cyborgs[i].name} 
                email={cyborgs[i].email}
                />
                );
            })
            }
        </div>
    );
}

export default CardList;