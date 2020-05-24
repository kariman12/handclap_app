import React, { Component } from 'react';

let style = { maxWidth: '700px' };
let btn = { cursor: 'pointer' };

const Show = (props) => (

    <ul className="siimple-list">
        {props.form_texts.map((form_text, i) => {
            return (
                <div className="container">
                <div className="users">
                    <div className="user">
                        <img src={`${process.env.PUBLIC_URL}/panda.jpg`} className="show-user-image" alt="userimage" />
                        <div className="user-name">
                            <p>Aさん</p>
                        </div>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/migi.png`} className="migi-image" alt="migiimage" />
                    <div className="user">
                        <img src={`${process.env.PUBLIC_URL}/neko.jpg`} className="show-user-image" alt="userimage" />
                        <div className="user-name">
                            <p>Bさん</p>
                        </div>
                    </div>
                </div>
                <li key={i} className="siimple-list-item siimple--bg-white" style={style}>{form_text.title} </li>
                <div className="show-text">
                    <p>ここに日付が入ります</p>
                    <i className="fas fa-sign-language fa-3x fa-border clap-mark"></i>
                    <p>5</p>
                </div>
            </div>
            )
        })}
    </ul>


);

export default Show;