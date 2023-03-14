import fs from 'fs';
import update from 'react-addons-update';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}

const updateOrder = update(state.order, {
    //변경할 내용 [WHERE] : { [WHAT]: updateValue }
    //해당 패스의 값 변경 1 
    receive : {
        $set: '부산시 해운대구 우동'
    },
    
    //해당 패스의 값 변경 2
    payment : {
        method : {
            $set : 'Mobile'
        }
    },

    products: {
        //배열 요소(객체) 변경
        0: {
            amount: {
                $set: 100
            }
        },
        //배열 요소에 추가
        products: {
            $push: [{
                no: 'c002-003',
                name: '블루양말',
                price: 2000,
                amount:1
            }]
        }
    },

});


console.log(updateOrder, state.order === updateOrder)
