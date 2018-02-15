// https://codezine.jp/article/detail/10593

import React, { Component } from 'react';
import Form from './Form';
import List from './List';

class App extends Component {
  state = {
    posts: []
  }

  // Formが作成した投稿を保存する処理
  saveNewPost(newPost) { // (2)
    // 投稿にidを付与する
    const newPostWithId = {
      ...newPost,
      id: Date.now()
    }
    // state内の投稿リストに加える
    this.setState({
      posts: [...this.state.posts, newPostWithId] // (4)
    });
  }

  render() {
    return (
      <div className="App">
        <Form onSubmitNewPost={(newPost) => this.saveNewPost(newPost)} />
        <hr />
        <List posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
