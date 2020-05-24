import React from 'react';
import CurrentUser from './current_user';
import Post from './post';
import Show from './show';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user_list:["Tom", "Mary", "Bob"],
            form_text: [],
            form_date: []
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
    // フォームから受け取ったデータをオブジェクトに挿入して、stateのtodo配列に追加
    this.state.form_text.push({title: e.target.title.value}); // まだ保存されていない
    // setStateを使ってstateを上書き
    this.setState({form_text: this.state.form_text}); // 保存完了
    // inputのvalueを空に
    e.target.title.value = '';

    //現在時刻を追加
    // console.log(this.getNow());
    this.state.form_date.push({title: this.getNow()}); // まだ保存されていない
    this.setState({form_date: this.state.form_date}); // 保存完了
    }


    render() {
    return (
        <div>
            <h1>Handclap App</h1>
            <CurrentUser />
            <Post handleAdd={this.handleAdd}/>
            <Show
            form_texts={this.state.form_text}
            form_dates={this.state.form_date}
            />
        </div>
    );
    }
}

export default App;
