import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles'


import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'  
import ListItemText from '@material-ui/core/ListItemText'  
import Avatar from '@material-ui/core/Avatar'  
import ListItemAvatar from '@material-ui/core/ListItemAvatar'

import Popover from '@material-ui/core/Popover';

const styles = (theme) => ({  // #1

    textfield: {
          margin: theme.spacing(1),
          width: '1000px',
        },

    card: {
        margin: "10px",
        // backgroundColor: "#30c8d6",
    },

    users: {
        padding: "0px",
        float: "left",
    },

    user: {
        padding: "0px",
        float: "left",
    },

    avatar: {
        width: theme.spacing(8),
        height: theme.spacing(8),
    },

    migi: {
        width: "50px",
        float: "left",
        padding: "25px 10px",
    },

    postContents: {
        width: "400px",
        margin: "10px",
        padding: "10px",
        float: "left",
        // backgroundColor: "#30c8d6",
    },

    dates: {
        textAlign: "right",

    },

    popover: {
        pointerEvents: 'none',
      },

    clapCount: {
        margin: "10px",
        padding: "10px",
        display: 'inline-block',
    },
    
  })

class Show extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            popover_id: null,
     
        };
    }

    render() {

        let style = { maxWidth: '700px' };
        let btn = { cursor: 'pointer' };

        const classes = makeStyles();

        // const anchorEl = React.useState(null);
        // const setAnchorEl = React.useState(null);

        const handlePopoverOpen = (event, i) => {
            // setAnchorEl(event.currentTarget);
            this.setState({
                anchorEl: event.currentTarget,
                popover_id: i
            });
        };

        const handlePopoverClose = () => {
            // setAnchorEl(null);
            this.setState({
                anchorEl: null,
                popover_id: null
            });
        };

  const open = Boolean(this.state.anchorEl);

        return(
            <Card className={this.props.classes.card}>
                <CardContent>
                {/* <p>投稿一覧</p> */}
                <Typography variant="h5" color='primary'>投稿一覧</Typography>
            <List>
                {this.props.post_contents.map((post_content, i) => {
                    // console.log(post_content);
                    return (
                            <div>
                                <ListItem divider></ListItem>
                                <ListItem key={i} className="siimple-list-item siimple--bg-white" style={style}>
                                    <div className={this.props.classes.users}>
                                        <div className={this.props.classes.user}>
                                            <Avatar src={`${process.env.PUBLIC_URL}/${this.props.userList[post_content.current_user_id].image}`} alt="userimage" variant='circle' className={this.props.classes.avatar}/>
                                            {/* <img src={`${process.env.PUBLIC_URL}/${this.props.userList[post_content.current_user_id].image}`} className="show-user-image" alt="userimage" /> */}
                                                {/* <p>{this.props.userList[post_content.current_user_id].name}</p> */}
                                                <Typography variant="p" color='primary'>{this.props.userList[post_content.current_user_id].name}</Typography>
                                        </div>
                                        <img src={`${process.env.PUBLIC_URL}/migi.png`} className={this.props.classes.migi} alt="migiimage" />
                                        <div className={this.props.classes.user}>
                                            <Avatar src={`${process.env.PUBLIC_URL}/${this.props.userList[post_content.to_user_id].image}`} alt="userimage" variant='circle' className={this.props.classes.avatar}/>
                                            {/* <img src={`${process.env.PUBLIC_URL}/${this.props.userList[post_content.to_user_id].image}`} className="show-user-image" alt="userimage" /> */}
                                                {/* <p>{this.props.userList[post_content.to_user_id].name}</p> */}
                                                <Typography variant="p" color='primary'>{this.props.userList[post_content.to_user_id].name}</Typography>
                                        </div>
                                    </div>

                                    <div className={this.props.classes.postContents}>
                                    <ListItemText>
                                        {post_content.text} 
                                    </ListItemText>

                                    <ListItemText secondary={post_content.date} className={this.props.classes.dates}>
                                    </ListItemText>
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
                                        endIcon={<Icon className="fas fa-sign-language fa-2x clap-mark" />}  
                                        value={i} 
                                        onClick={(event) => {this.props.handleAddCount(event, post_content.current_user_id, post_content.to_user_id)}}     
                                    >
                                        拍手する
                                    </Button>
                                    {/* <p>{this.props.getCountPost(i)}</p> */}

                                    <div className={this.props.classes.clapCount}>
                                        <Typography
                                            aria-owns={open ? 'mouse-over-popover' : undefined}
                                            aria-haspopup="true"
                                            onMouseEnter={(event) => handlePopoverOpen(event, i)}
                                            onMouseLeave={handlePopoverClose}
                                        >
                                            {this.props.getCountPost(i)}
                                        </Typography>
                                        <Popover
                                            id="mouse-over-popover"
                                            className={this.props.classes.popover}
                                            classes={{
                                            paper: classes.paper,
                                            }}
                                            open={open && i===this.state.popover_id}
                                            anchorEl={this.state.anchorEl}
                                            // anchorOrigin={{
                                            // vertical: 'top',
                                            // horizontal: 'left',
                                            // }}
                                            // transformOrigin={{
                                            // vertical: 'top',
                                            // horizontal: 'left',
                                            // }}
                                            anchorReference={this.state.anchorEl}
                                            onClose={handlePopoverClose}
                                            disableRestoreFocus
                                        >
                                            <Typography>拍手一覧</Typography>
                                            <Typography>{this.props.getClapDetail(i, this.props.userList)}</Typography>
                                        </Popover>
                                    </div>


                                    </div>
                                </ListItem>

                           </div>
                    )
                })}
            </List>
            </CardContent>
            </Card>

        );
    }


}

    



// export default Show;
export default withStyles(styles)(Show);