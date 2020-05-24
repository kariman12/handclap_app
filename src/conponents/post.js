import React from 'react';

const Post = (props) => (
    <div className="post">
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
            {/* <textarea type="text" onInput={props.handleAdd} /> */}
            <form onSubmit={props.handleAdd}>
            <textarea type="text" name="title"/>
            {/* <button onClick={props.handleAdd}>投稿</button> */}
            <input type="submit" value="投稿"/>
            </form>
            {/* <ul>
                {todos.map((todo, index) => <li key={index}>{index + todo}
                <button onClick={() => {this.removeTodo(index)}}>削除</button>
                </li>)}
            </ul> */}
            </div>
        </div>
    </div>
);


export default Post;