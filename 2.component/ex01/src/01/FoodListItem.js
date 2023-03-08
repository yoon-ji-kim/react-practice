import React from 'react';

//function FoodListItem(props) {
//프로퍼티 분해
function FoodListItem({name, count}) {
    return (
        <li>{name}: {count}</li>
    );
}

export default FoodListItem;