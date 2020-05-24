import React, { Component } from 'react';

class Post extends Component {

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
            <div className = "container">
                <div className="user">
                <img src={`${process.env.PUBLIC_URL}/neko.jpg`} className="user-image" alt="userimage" />
                <div className="user-name">
                <select>
                    <option value='a'>Aさん</option>
                    <option value='b'>Bさん</option>
                    <option value='c'>Cさん</option>
                </select>
                </div>
                </div>
                <div className="post-text">
                <textarea type="text" onInput={this.onInput} />
                <button onClick={this.addTodo}>投稿</button>
                <ul>
                    {todos.map((todo, index) => <li key={index}>{todo}
                    <button onClick={() => {this.removeTodo(index)}}>削除</button>
                    </li>)}
                </ul>
                </div>
            </div>


        );


    }
}

export default Post;