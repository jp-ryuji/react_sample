import React, { Component } from 'react';
import { Ages } from './Form';

/** 投稿のリスト */
class List extends Component {

  /** 投稿ひとつ分を描画する */
  renderPost(post) {
    return (
      <div>
        <div>名前: {post.name}</div>
        <div>年齢: {this.convertAge(post.age)}</div>
        <div>本文: {post.body}</div>
      </div>
    );
  }

  /** ageを日本語表記に変換する */
  convertAge(age) {
    switch(age) {
      case Ages.TEEN:
        return "10代";
      case Ages.TWENTIES:
        return "20代";
      case Ages.THIRTIES:
        return "30代";
      case Ages.FOURTIES:
        return "40代";
      case Ages.FIFTIES:
        return "50代";
      default:
        throw Error(`不明なageです: ${age}`);
    }
  }

  /** 投稿の間に<hr/>を描画する */
  renderHrIfNotTail(posts, index) {
    const isTail = (posts.length - 1) === index;
    return isTail ? null : <hr />
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        { posts.map((post, index) => {
          return (
            <div key={`${post.id}`}>
              {this.renderPost(post)}
              {this.renderHrIfNotTail(posts, index)}
            </div>
          );
        }) }
      </div>
    )
  }
}

export default List;
