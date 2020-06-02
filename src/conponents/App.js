import React from 'react';

import {MuiThemeProvider} from '@material-ui/core/styles';
import {theme} from '../theme';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import CurrentUser from './current_user';
import Form from './form';
import Show from './show';

// css
const styles = (theme) => ({
    appbar: {
        alignItems: 'center',
      },
      
    root: {
      padding: theme.spacing.unit * 5,
      backgroundColor: "#efebe9",
    },

    content: {
      maxWidth: 900,
      marginLeft  : 'auto',
      marginRight : 'auto',
      
    },

    textfield: {
          margin: theme.spacing(1),
          width: '1000px',
        },
  })

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            current_user_id: "0",
            to_user_id: "0",
            post_content:[],
            clap_event:[]
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleAddCount = this.handleAddCount.bind(this);
        this.handleCurrentUserChange = this.handleCurrentUserChange.bind(this);
        this.handleToUserChange = this.handleToUserChange.bind(this);
        this.getCountPost = this.getCountPost.bind(this);
        this.getCountClapable = this.getCountClapable.bind(this);
        this.getCountClapped = this.getCountClapped.bind(this);
        this.getClapDetail = this.getClapDetail.bind(this);
    }

    // currentuserの変更に対応
    handleCurrentUserChange(event) {
        const inputValue = event.target.value;
        this.setState({
          current_user_id: inputValue
        });
    }

    // メッセージを送る相手の変更に対応
    handleToUserChange(event) {
        const inputValue = event.target.value;
        this.setState({
          to_user_id: inputValue
        });
    }

    // 現在時刻を取得
    getNow() {
        const now = new Date();
        const year = now.getFullYear();
        const mon = now.getMonth()+1;
        const day = now.getDate();
        const hour = now.getHours();
        const min = now.getMinutes();
        const sec = now.getSeconds();
        //出力用
        const s = year + "/" + mon + "/" + day + " " + hour + ":" + min + ":" + sec ; 
        return s;
    }
    
    // 投稿されたメッセージを保存
    handleAdd(e) {
        // リダイレクト防止
        e.preventDefault();
        if ((e.target.text.value.length) > 4) {
            // フォームから受け取ったデータと現在時刻をオブジェクトに挿入して、stateのposts配列に追加
            this.state.post_content.push({text: e.target.text.value, date: this.getNow(), current_user_id: this.state.current_user_id, to_user_id: this.state.to_user_id}); // まだ保存されていない
            // setStateを使ってstateを上書き
            this.setState({post_content: this.state.post_content});
            // inputのvalueを空に
            e.target.text.value = '';
            //localstrageにwrite
            var setjson = JSON.stringify(this.state.post_content);
            localStorage.setItem('post_content', setjson);

        }
    }

    // あるユーザのある投稿に対する拍手数をカウント
    getCountUserPostClap(user_id, current_post_id) {
        const filteredCounts = this.state.clap_event.filter((clap_event) => 
        {
            return (clap_event.clap_user_id === String(user_id) && clap_event.post_id === String(current_post_id))
        });

        return filteredCounts.length;
    }

    // 拍手された情報を保存
    handleAddCount(event, from_user_id, to_user_id) {
        if (!(this.state.current_user_id === from_user_id || this.state.current_user_id === to_user_id) &&
            (this.getCountUserPostClap(this.state.current_user_id, event.currentTarget.value) < 15)) {
            // リダイレクト防止
            event.preventDefault();
            // ボタンを押された時のcurrent_user_idと投稿のpost_idとfrom_user_idとto_user_idをオブジェクトに挿入して、stateのclap_event配列に追加
            this.state.clap_event.push({clap_user_id: this.state.current_user_id, post_id: event.currentTarget.value, from_user_id: from_user_id, to_user_id}); // まだ保存されていない
            // setStateを使ってstateを上書き
            this.setState({clap_event: this.state.clap_event});
            //localstrageにwrite
            var setjson = JSON.stringify(this.state.clap_event);
            localStorage.setItem('clap_event', setjson);
        }
    }

    // ある投稿への拍手数をカウント
    getCountPost(current_post_id) {
        const filteredCounts = this.state.clap_event.filter((clap_event) => 
        {
            return clap_event.post_id === String(current_post_id)
        });
        return filteredCounts.length;
    }

    //　currentuserの拍手できる数をカウント
    getCountClapable(current_user_id) {
        // 100-拍手した数*2+拍手された数
        const filteredCounts = this.state.clap_event.filter((clap_event) => 
        {
            return clap_event.clap_user_id === String(current_user_id)
        });
        return (100 - filteredCounts.length * 2 + this.getCountClapped(current_user_id));
    }

    // currentuserの拍手された数をカウント
    getCountClapped(current_user_id) {
        const filteredCounts = this.state.clap_event.filter((clap_event) => 
        {
            return (clap_event.from_user_id === String(current_user_id) || clap_event.to_user_id === String(current_user_id))
        });
        return filteredCounts.length;
    }

    // あるユーザがある与えられた投稿群(投稿)について拍手した回数をカウント
    getCountUserClap(user_id, filteredlist) {     
        const filteredCounts = filteredlist.filter((clap_event) => 
        {
            return (clap_event.clap_user_id === String(user_id))
        });
        return filteredCounts.length;
    }

    // ある投稿に対するユーザごとの拍手数をカウント
    getClapDetail(current_post_id, userList) {
        // 投稿のidを持つclapdataを取ってくる
        const filteredlist = this.state.clap_event.filter((clap_event) => 
        {
            return clap_event.post_id === String(current_post_id)
        });

        // ユーザごとに並び替えするための新たな配列を定義
        const return_list = [];

        // 配列にnameとcountを追加
        for (let i=0; i<userList.length; i++) {
            if (this.getCountUserClap(i, filteredlist) > 0) {
                return_list.push({name: userList[i].name, count: this.getCountUserClap(i, filteredlist)});
            }
        }

        // count順に並び替え
        return_list.sort(function(a, b) {
            if (a.count < b.count) {
              return 1;
            } else {
              return -1;
            }
          })

        // 並び替えた結果を出力
        const list = return_list.map((user) => 
        {
            return (
                <li>
                    {user.name} : {user.count}
                </li>
            );
        });
        return <ul>{list}</ul>;
    }


    render() {

        let userList = [
            {name: "ぱんだ", image: "panda.jpg"},
            {name: "ねこ" , image: "neko.jpg"},
            {name: "はりねずみ", image: "harinezumi.jpg"},
            {name: "いぬ", image: "inu.jpg"},
            {name: "りす", image: "risu.jpg"}
        ];

        // userListをlocalstrageにwrite,read
        // localstrageにwrite
        var setjson = JSON.stringify(userList);
        localStorage.setItem('userList', setjson);
        // localstrageからread
        var obj = localStorage.getItem('userList');
        userList = JSON.parse(obj);
        // console.log(userList);

        // // post_contentをlocalstrageにwrite,read
        // // localstrageからread
        // var obj2 = localStorage.getItem('post_content');
        // this.state.post_content = JSON.parse(obj2);
        // console.log(this.state.post_content);

        // // clap_eventをlocalstrageにwrite,read
        // // localstrageからread
        // var obj3 = localStorage.getItem('clap_event');
        // this.state.clap_event = JSON.parse(obj3);
        // console.log(this.state.clap_event);


        return (
                <div>
                    <MuiThemeProvider theme={theme}>
                        <AppBar position="static" color='primary' className={this.props.classes.appbar}>
                            <Toolbar >
                                <Typography variant="h4" color="inherit" >
                                Handclap App
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <Paper>
                            <div className={this.props.classes.root}>  
                                <div className={this.props.classes.content}>
                                    <CurrentUser
                                    current_user_id={this.state.current_user_id}
                                    userList={userList}
                                    handleCurrentUserChange={this.handleCurrentUserChange}
                                    getCountClapable={this.getCountClapable}
                                    getCountClapped={this.getCountClapped}
                                    />

                                    <Form
                                    to_user_id={this.state.to_user_id}
                                    userList={userList}
                                    handleToUserChange={this.handleToUserChange}
                                    handleAdd={this.handleAdd}
                                    />

                                    <Show
                                    post_contents={this.state.post_content}
                                    userList={userList}
                                    clap_events={this.state.clap_event}
                                    handleAddCount={this.handleAddCount}
                                    getCountPost={this.getCountPost}
                                    getClapDetail={this.getClapDetail}
                                    />
                                </div>
                            </div>
                        </Paper> 
                    </MuiThemeProvider>
                </div>
        );
        }
}

// export default App;
export default withStyles(styles)(App);