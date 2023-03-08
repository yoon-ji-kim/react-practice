import React from 'react';
import FoodListItem from './FoodListItem';

function FoodList({foods}) {
    // const foodItems = [];

    // foods.forEach(function(foods){
    //     foodItems.push(<FoodListItem name={foods.name} count={foods.count} />)
    // });

    // const a1 = [1, 2, 3, 4];
    // const a2= a1.map(function(e){
    //     return e*e;
    // })

    // const a3 = foods.map(function(food){
    //     return <FoodListItem name={foods.name} count={foods.count} />;
    // })

    //console.log(a3);

    return (
         <ul>
            {foods.map((food) =><FoodListItem name={food.name} count={food.count} />)}
        </ul>
    );
}

export default FoodList;