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

class CurrentUser extends React.Component {    

    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    render() {

        const classes = makeStyles();

        return(
        <div className="current-user">
            <div className="container">
            {/* <Card className={classes.card}> */}
            <Card className="classes.card">
            <CardContent>
            <div className="user">
                    <img src={`${process.env.PUBLIC_URL}/${this.props.userList[this.props.current_user_id].image}`} className="user-image" alt={this.props.userList[this.props.current_user_id].image} />
                    <div className="user-name">
                        {/* <select onChange={(event) => {this.props.handleCurrentUserChange(event)}}>
                        {this.props.userList.map((user, i) => {
                                console.log(user);
                                return <option value={i}>{user.name}</option>
                            })};
                        </select> */}

                        <FormControl className={classes.formControl} onChange={(event) => {this.props.handleCurrentUserChange(event)}}>
                        {/* <FormControl className="{classes.formControl}" onChange={(event) => {this.props.handleCurrentUserChange(event)}}> */}
                            <InputLabel id="demo-simple-select-label">User</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            value={this.props.current_user_id}
                            onChange={(event) => {this.props.handleCurrentUserChange(event)}}
                            >
                            {this.props.userList.map((user, i) => {
                                // return <option value={i}>{user.name}</option>
                                return <MenuItem value={String(i)}>{user.name}</MenuItem>
                            })}
                            </Select>
                        </FormControl>


                        {/* <FormControl className={classes.formControl}>
                        <FormControl className="{classes.formControl}">
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            value="age"
                            // onChange={handleChange}
                            onChange="{handleChange}"
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl> */}

                    </div>
                </div>
                <ul className='clap-list'>
                    <li>{`拍手出来るポイント: ${this.props.getCountClapable(this.props.current_user_id)}`}</li>
                    <li>{`拍手されたポイント: ${this.props.getCountClapped(this.props.current_user_id)}`}</li>
                </ul>
            </CardContent>
            {/* <CardActions>
                <Button >Cancel</Button>
                <Button variant="raised" color="primary">OK</Button>
            </CardActions> */}
            </Card>

                {/* <div className="user">
                    <img src={`${process.env.PUBLIC_URL}/${this.props.userList[this.props.current_user_id].image}`} className="user-image" alt={this.props.userList[this.props.current_user_id].image} />
                    <div className="user-name">
                        <select onChange={(event) => {this.props.handleCurrentUserChange(event)}}>
                        {this.props.userList.map((user, i) => {
                                return <option value={i}>{user.name}</option>
                            })};
                        </select>
                        <p>{this.props.userList.name}</p>
                    </div>
                </div>
                <ul className='clap-list'>
                    <li>{`拍手出来るポイント: ${this.props.getCountClapable(this.props.current_user_id)}`}</li>
                    <li>{`拍手されたポイント: ${this.props.getCountClapped(this.props.current_user_id)}`}</li>
                </ul> */}
            </div>
        </div>
        );
    }
}

export default CurrentUser;