import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


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


class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    render() {

        const classes = makeStyles();

        return(
            <div className="form">
                <div className = "container">

                <Card className="classes.card">
                <CardContent>
                <div className="user">
                    <img src={`${process.env.PUBLIC_URL}/${this.props.userList[this.props.to_user_id].image}`} className="user-image" alt={this.props.userList[this.props.to_user_id].image} />
                        <div className="user-name">
                            {/* <select onChange={(event) => {this.props.handleToUserChange(event)}}>
                            {this.props.userList.map((user, i) => {
                                    return <option value={i}>{user.name}</option>
                                })};
                            </select> */}

                            <FormControl className={classes.formControl} onChange={(event) => {this.props.handleToUserChange(event)}}>
                            <InputLabel id="demo-simple-select-label">User</InputLabel>
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
                </div>
                <div className="form-text">
                    {/* <textarea type="text" onInput={props.handleAdd} /> */}
                    <form onSubmit={this.props.handleAdd}>
                    <textarea type="text" name="text"/>
                    {/* <button onClick={props.handleAdd}>投稿</button> */}
                    {/* <input type="submit" value="投稿"/> */}
                    <Button type="submit" variant="contained" color="secondary">投稿</Button>
                    </form>
                </div>
                </CardContent>
                {/* <CardActions>
                    <Button >Cancel</Button>
                    <Button variant="raised" color="primary">OK</Button>
                </CardActions> */}
                </Card>

                </div>
            </div>

        );
    }

}


export default Form;