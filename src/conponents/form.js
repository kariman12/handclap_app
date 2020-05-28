import React from 'react';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    render() {
        return(
            <div className="form">
                <div className = "container">

                <Card className="classes.card">
                <CardContent>
                <div className="user">
                    <img src={`${process.env.PUBLIC_URL}/${this.props.userList[this.props.to_user_id].image}`} className="user-image" alt={this.props.userList[this.props.to_user_id].image} />
                        <div className="user-name">
                            <select onChange={(event) => {this.props.handleToUserChange(event)}}>
                            {this.props.userList.map((user, i) => {
                                    return <option value={i}>{user.name}</option>
                                })};
                            </select>
                            {/* <p>{this.props.userList.name}</p> */}
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