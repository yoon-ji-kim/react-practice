import fs from 'fs';
//객체 안의 객체가 있으면 copy가 되지 않음

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}

let updateOrder1 = state.order;
updateOrder1.receive = '부산시 해운대구 우동';

//true
console.log(updateOrder1, state.order, state.order === updateOrder1);

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}

Object.assign({})