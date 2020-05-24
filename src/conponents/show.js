import React, { Component } from 'react';

class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            name: ''
        };
    }

    onInput = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    addTodo = () => {
        const {todos, name} = this.state;
        this.setState({
            todos: [...todos, name]
        });
    }

    removeTodo = (index) => {
        const {todos, name} = this.state;
        this.setState({
            todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
        });
    }

    render() {
        const { todos } = this.state;
        
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
                <div className="show-text">
                    <p>ここにテキストが入ります</p>
                    <p>ここに日付が入ります</p>
                    <i class="fas fa-sign-language fa-3x clap-mark"></i>
                    <p>5</p>
                </div>
            </div>


        );


    }
}

export default Show;