import React from 'react';

class CurrentUser extends React.Component {    

    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    render() {
        return(
        <div className="current-user">
            <div className="container">
                <div className="user">
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
                </ul>
            </div>
        </div>
        );
    }
}

export default CurrentUser;