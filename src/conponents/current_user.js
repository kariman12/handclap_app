import React, { Component } from 'react';

class CurrentUser extends Component {

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


        );


    }
}

export default CurrentUser;