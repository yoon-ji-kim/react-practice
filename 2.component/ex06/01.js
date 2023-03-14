import fs from 'fs'; //file system

//const data = fs.readFileSync('./json/data.json', 'utf-8');
//const order = JSON.parse(data);

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}

/*
    좋지 않은 방법
*/
const updateOrderProducts1 = state.order.products;
updateOrderProducts1.push({
    no: 'c002-003',
    name: '블루양말',
    price: 2000,
    amount:1
});

//true
console.log(state.order.products, updateOrderProducts1, state.order.products === updateOrderProducts1);
console.log('================================')

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}
// concat을 사용하는 방법
const updateOrderProducts2 = state.order.products.concat({
    no: 'c002-003',
    name: '블루양말',
    price: 2000,
    amount:1
})

//false
console.log(state.order.products, updateOrderProducts2, state.order.products === updateOrderProducts2);

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}

//...연산자 사용하는 방법
const updateOrderProducts3 = [...state.order.products, {
    no: 'c002-003',
    name: '블루양말',
    price: 2000,
    amount:1
}]
//false
console.log(state.order.products, updateOrderProducts3, state.order.products === updateOrderProducts3);