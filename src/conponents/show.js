import React from 'react';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

class Show extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    render() {

        let style = { maxWidth: '700px' };
        let btn = { cursor: 'pointer' };


        return(
            <ul className="siimple-list">
                {this.props.post_contents.map((post_content, i) => {
                    // console.log(post_content);
                    return (
                            <Card className="classes.card">
                            <CardContent>
                            <div className="users">
                                <div className="user">
                                    <img src={`${process.env.PUBLIC_URL}/${this.props.userList[post_content.current_user_id].image}`} className="show-user-image" alt="userimage" />
                                    <div className="user-name">
                                        <p>{this.props.userList[post_content.current_user_id].name}</p>
                                    </div>
                                </div>
                                <img src={`${process.env.PUBLIC_URL}/migi.png`} className="migi-image" alt="migiimage" />
                                <div className="user">
                                    <img src={`${process.env.PUBLIC_URL}/${this.props.userList[post_content.to_user_id].image}`} className="show-user-image" alt="userimage" />
                                    <div className="user-name">
                                        <p>{this.props.userList[post_content.to_user_id].name}</p>
                                    </div>
                                </div>
                            </div>

                            <li key={i} className="siimple-list-item siimple--bg-white" style={style}>{i + post_content.text} </li>

                            <div className="show-text">
                                <p>{post_content.date}</p>
                                {/* <p> <i className="fas fa-sign-language fa-2x fa-border clap-mark"></i>  5</p> */}
                                {/* <button type="submit" value={i} onClick={(event) => {this.props.handleAddCount(event)}}> */}
                                {/* クリックがボタン上かアイコン上かでイベントの中身が変わってしまうので，とりあえず両方にvalueを与えている */}
                                {/* あとで，button(or icon)の適用範囲を変えることで対応して */}
                                {/* →event.target.valueをevent.currentTarget.valueに変えることで大丈夫になった */}
                                {/* <button type="submit" value={i} onClick={(event) => {console.log(event.currentTarget.value)}}> */}
                                {/* <button type="submit" value={i} onClick={(event) => {this.props.handleAddCount(event, post_content.current_user_id, post_content.to_user_id)}}>
                                    拍手する
                                    <i className="fas fa-sign-language fa-2x clap-mark" value={i} ></i>
                                </button> */}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    // className={classes.button}
                                    className="button2"
                                    endIcon={<Icon className="fas fa-sign-language fa-2x clap-mark" />}  
                                    value={i} 
                                    onClick={(event) => {this.props.handleAddCount(event, post_content.current_user_id, post_content.to_user_id)}}     
                                >
                                    拍手する
                                </Button>
                                <p>{this.props.getCountPost(i)}</p>
                            </div>
                            </CardContent>
                            {/* <CardActions>
                                <Button >Cancel</Button>
                                <Button variant="raised" color="primary">OK</Button>
                            </CardActions> */}
                            </Card>
                    )
                })}
            </ul>

        );
    }


}

    



export default Show;