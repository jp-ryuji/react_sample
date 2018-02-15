// https://codezine.jp/article/detail/10593?p=2

import React, { Component } from 'react';

/** 投稿フォーム */
class Form extends Component {

  state = {
    ...this.createInitialForm()
  }

  /** フォームの初期表示内容を構築する */
  createInitialForm() {
    return {
      name: "名無しさん",
      age: Ages.TEEN,
      body: "こんにちは"
    };
  }

  /** 名前への入力を処理する */
  handleChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }

  /** 年齢への入力を処理する */
  handleChangeAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  /** 本文への入力を処理する */
  handleChangeBody(event) {
    this.setState({
      body: event.target.value
    });
  }

  /** 投稿処理を行う */
  handleSubmit(event) {
    // submitのデフォルト動作では
    // 画面が再描画されてしまうので阻止する
    event.preventDefault();

    const { name, age, body } = this.state;

    // 名前のバリデーション
    if ( !name || name.length === 0 ) {
      alert("名前が未入力です");
      return;
    }

    // 本文のバリデーション
    if ( !body || name.body === 0 ) {
      alert("本文が未入力です");
      return;
    }

    // 投稿内容を作成する
    const newPost = {
      name,
      age,
      body,
    };

    // 投稿する
    this.props.onSubmitNewPost(newPost);

    // フォームの内容をリセットする
    this.setState({
      ...this.createInitialForm()
    });
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        {/* 単一行テキスト */}
        <div>
          <label>
            名前:　
            <input
              type="text"
              value={this.state.name}
              onChange={(event) => this.handleChangeName(event)} />
          </label>
        </div>
        {/* セレクトボックス */}
        <div>
          <label>
            年齢:　
            <select
              value={this.state.age}
              onChange={(event) => this.handleChangeAge(event)}>
              <option value={Ages.TEEN}>10代</option>
              <option value={Ages.TWENTIES}>20代</option>
              <option value={Ages.THIRTIES}>30代</option>
              <option value={Ages.FOURTIES}>40代</option>
              <option value={Ages.FIFTIES}>50代</option>
            </select>
          </label>
        </div>
        {/* 複数行テキスト */}
        <div>
          <label>
            本文:　
            <textarea
              value={this.state.body}
              onChange={(event) => this.handleChangeBody(event)} />
          </label>
        </div>
        <input type="submit" value="送信" />
      </form>
    );
  }
}

export const Ages = {
  TEEN: "teen",
  TWENTIES: "twenties",
  THIRTIES: "thirties",
  FOURTIES: "fourties",
  FIFTIES: "fifties",
}

export default Form;
