import React from 'react';
import CurrentUser from './current_user';
import Post from './post';
import Show from './show';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          form_text: [],
          form_date: []
        };
        // ?
        this.handleAdd = this.handleAdd.bind(this);
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
      }


    render() {
    return (
        <div>
            <h1>Handclap App</h1>
            <CurrentUser />
            <Post handleAdd={this.handleAdd}/>
            <Show form_texts={this.state.form_text}/>
        </div>
    );
    }
}

export default App;
