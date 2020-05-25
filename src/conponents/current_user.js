import React from 'react';

const CurrentUser = (props) => (
    <div className="current-user">
        <div className="container">
            <div className="user">
                <img src={`${process.env.PUBLIC_URL}/panda.jpg`} className="user-image" alt="userimage" />
                <div className="user-name">
                    <select>
                    {props.userList.map((user, i) => {
                            return <option value={i} >{user.name} </option>
                        })};
                    </select>
                    <p>{props.userList.name}</p>
                </div>
            </div>
            <ul className='clap-list'>
                <li>拍手できる：70</li>
                <li>拍手された：20</li>
            </ul>
        </div>
    </div>
    );


export default CurrentUser;