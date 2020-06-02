import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Avatar from '@material-ui/core/Avatar';

// css
const styles = (theme) => ({
    appbar: {
        alignItems: 'center',
      },
      
    root: {
      padding: theme.spacing.unit * 5,
    },

    content: {
      maxWidth: 1000,
      marginLeft  : 'auto',
      marginRight : 'auto',
    },

    textfield: {
          margin: theme.spacing(1),
          width: '1000px',
        },

    card: {
        margin: "10px",
    },

    user: {
        padding: theme.spacing.unit * 5,
        float: "left",
    },

    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
      },

    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120
    },

    clapList: {
        padding: "80px",
    },


  })


class CurrentUser extends React.Component {    

    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    render() {
        return(
            <Card className={this.props.classes.card}>
                <CardContent>
                    <Typography variant="h5" color='primary'>あなたのプロフィール</Typography>
                    <div className={this.props.classes.user}>
                        <Avatar
                        src={`${process.env.PUBLIC_URL}/${this.props.userList[this.props.current_user_id].image}`}
                        alt={this.props.userList[this.props.current_user_id].image}
                        variant='circle'
                        className={this.props.classes.avatar}
                        />                    
                        <FormControl className={this.props.classes.formControl} onChange={(event) => {this.props.handleCurrentUserChange(event)}}>
                            <InputLabel id="demo-simple-select-label">ユーザを選択</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.props.current_user_id}
                            onChange={(event) => {this.props.handleCurrentUserChange(event)}}
                            >
                            {this.props.userList.map((user, i) => {
                                // return <option value={i}>{user.name}</option>
                                return <MenuItem value={String(i)}>{user.name}</MenuItem>
                            })}
                            </Select>
                        </FormControl>
                    </div>
                    <div className={this.props.classes.clapList}> 
                        <Typography variant="h6" color='primary'>{`拍手出来るポイント : ${this.props.getCountClapable(this.props.current_user_id)}`}</Typography>
                        <Typography variant="h6" color='primary'>{`拍手されたポイント : ${this.props.getCountClapped(this.props.current_user_id)}`}</Typography>
                    </div>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(CurrentUser);