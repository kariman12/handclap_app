import React from 'react';
import CurrentUser from './current_user';
import Post from './post';
import Show from './show';

class App extends React.Component {
  render() {
    return (
      <div>
        <CurrentUser />
        <Post />
        <Show />
      </div>
    );
  }
}

export default App;
