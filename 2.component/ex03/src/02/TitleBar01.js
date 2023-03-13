import React, {Component} from 'react';

//class
export default class TitelBar01 extends Component {
    constructor(props) {
        super(props);
        //this.no vs this.state.no
        //변수          state(상속)
        this.no = 0;
        this.state = {no: 0}
    }
    onClickHandler() { //클래스 block 안에서는 onClick:function()을 줄일 수 있음
        this.no++;
        console.log(`TitleBar01 Clicked: ${this.no}`);

        //state는 함수를 통해서 변화시키는 방법으로 쓰기
        this.setState({
            no: this.state.no +1
        })
        console.log(`TitleBar01 Clicked: ${this.state.no}`)
    }

    render() {
        return (
          <div>
            <h1
                onClick={this.onClickHandler.bind(this)}
                style={{
                    cursor: 'pointer'
                }}
                >Function Handler
            <br />
            {
                ////this.no vs this.state.no
                `${this.no} VS ${this.state.no}`
            }
            </h1>
          </div>  
        );
    }
}