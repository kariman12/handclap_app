import React from 'react';
import CurrentUser from './current_user';
import Form from './form';
import Show from './show';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            post_content:[]
        };
        // ?
        this.handleAdd = this.handleAdd.bind(this);
    }

    getNow() {
        const now = new Date();
        const year = now.getFullYear();
        const mon = now.getMonth()+1; //１を足すこと
        const day = now.getDate();
        const hour = now.getHours();
        const min = now.getMinutes();
        const sec = now.getSeconds();

        //出力用
        const s = year + "/" + mon + "/" + day + " " + hour + ":" + min + ":" + sec ; 
        return s;
    }
    
    // データ保存
    handleAdd(e){
    // リダイレクト防止(?)
    e.preventDefault();
    // フォームから受け取ったデータと現在時刻をオブジェクトに挿入して、stateのposts配列に追加
    this.state.post_content.push({text: e.target.text.value, date: this.getNow()}); // まだ保存されていない
    // setStateを使ってstateを上書き
    this.setState({post_content: this.state.post_content}); // 保存完了
    // inputのvalueを空に
    e.target.text.value = '';

    }


    render() {

        const userList = [
            {name: "ぱんだ", image: "`${process.env.PUBLIC_URL}/panda.jpg`"},
            {name: "ねこ" , image: "`${process.env.PUBLIC_URL}/neko.jpg`"},
            {name: "はりねずみ", image: "`${process.env.PUBLIC_URL}/neko.jpg`"}
        ];


        return (
            <div>
                <h1>Handclap App</h1>
                <CurrentUser userList={userList}/>
                <Form handleAdd={this.handleAdd}/>
                <Show
                post_contents={this.state.post_content}
                />
            </div>
        );
        }
}

export default App;
