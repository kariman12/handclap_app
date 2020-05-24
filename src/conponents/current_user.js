import React, { Component } from 'react';

const CurrentUser = (props) => (
    <div className="current-user">
        <div className="container">
            <div className="user">
                <img src={`${process.env.PUBLIC_URL}/panda.jpg`} className="user-image" alt="userimage" />
                <div className="user-name">
                    <select>
                        <option value='a'>Aさん</option>
                        <option value='b'>Bさん</option>
                        <option value='c'>Cさん</option>
                    </select>
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