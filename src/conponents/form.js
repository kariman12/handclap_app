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

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import TextField from '@material-ui/core/TextField';

import Avatar from '@material-ui/core/Avatar'  

const styles = (theme) => ({  // #1

    textfield: {
        width: "500px",
        padding: "10px",
        float: "left",
        },

    card: {
        margin: "10px",
        // backgroundColor: "#30c8d6",
    },

    user: {
        padding: theme.spacing.unit * 5,
        float: "left",
    },

    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
      },

    formArea: {
        margin: "50px 0px",
        float: "left",
        width: "520px",
        // backgroundColor: "#30c8d6",
    },

    formControl: {
        margin: theme.spacing.unit,
        minWidth: "120px"
    },

    submitButton: {
        margin: "0 10px",
        float: "right",
    }
  })


class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    render() {

        const classes = makeStyles();

        return(
                <Card className={this.props.classes.card}>
                <CardContent>
                {/* <p>投稿する</p> */}
                <Typography variant="h5" color='primary'>投稿する</Typography>
                <div className={this.props.classes.user}>
                    <Avatar src={`${process.env.PUBLIC_URL}/${this.props.userList[this.props.to_user_id].image}`} alt={this.props.userList[this.props.to_user_id].image} variant='circle' className={this.props.classes.avatar}/>

                        <FormControl className={this.props.classes.formControl} onChange={(event) => {this.props.handleToUserChange(event)}}>
                            <InputLabel id="demo-simple-select-label">ユーザを選択</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            value={this.props.to_user_id}
                            onChange={(event) => {this.props.handleToUserChange(event)}}
                            >
                            {this.props.userList.map((user, i) => {
                                return <MenuItem value={String(i)}>{user.name}</MenuItem>
                            })}
                            </Select>
                        </FormControl>
                </div>
                    {/* <textarea type="text" onInput={props.handleAdd} /> */}
                    <div className={this.props.classes.formArea}>
                    <form onSubmit={this.props.handleAdd} >
                    {/* <textarea type="text" name="text"/> */}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="text"
                        label="褒めるメッセージを送ろう！"
                        name="text"
                        // autoComplete="email"
                        autoFocus
                        className={this.props.classes.textfield}
                    />
                    {/* <button onClick={props.handleAdd}>投稿</button> */}
                    {/* <input type="submit" value="投稿"/> */}
                    <Button className={this.props.classes.submitButton} type="submit" variant="contained" color="secondary">投稿</Button>
                    </form>
                    </div>
                </CardContent>
                {/* <CardActions>
                    <Button >Cancel</Button>
                    <Button variant="raised" color="primary">OK</Button>
                </CardActions> */}
                </Card>
        );
    }

}


// export default Form;
export default withStyles(styles)(Form);