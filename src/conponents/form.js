import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';

// css
const styles = (theme) => ({

    textfield: {
        width: "500px",
        padding: "10px",
        float: "left",
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

    formArea: {
        margin: "50px 0px",
        float: "left",
        width: "520px",
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
        return(
                <Card className={this.props.classes.card}>
                    <CardContent>
                        <Typography variant="h5" color='primary'>投稿する</Typography>
                        <div className={this.props.classes.user}>
                            <Avatar
                            src={`${process.env.PUBLIC_URL}/${this.props.userList[this.props.to_user_id].image}`}
                            alt={this.props.userList[this.props.to_user_id].image}
                            variant='circle'
                            className={this.props.classes.avatar}
                            />
                            <FormControl className={this.props.classes.formControl} onChange={(event) => {this.props.handleToUserChange(event)}}>
                                <InputLabel id="demo-simple-select-label">ユーザを選択</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.props.to_user_id}
                                onChange={(event) => {this.props.handleToUserChange(event)}}
                                >
                                {this.props.userList.map((user, i) => {
                                    return <MenuItem value={String(i)}>{user.name}</MenuItem>
                                })}
                                </Select>
                            </FormControl>
                        </div>
                            <div className={this.props.classes.formArea}>
                                <form onSubmit={this.props.handleAdd} >
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="text"
                                    label="賞賛メッセージを送ろう！"
                                    name="text"
                                    autoFocus
                                    className={this.props.classes.textfield}
                                />
                                <Button className={this.props.classes.submitButton} type="submit" variant="contained" color="secondary">投稿</Button>
                                </form>
                            </div>
                    </CardContent>
                </Card>
        );
    }
}

export default withStyles(styles)(Form);