// https://codezine.jp/article/detail/9878?p=3

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { remaining: this.props.seconds };
  }

  countDown() {
    if (this.state.remaining > 0) {
      this.setState((prevState) => ({
        remaining: prevState.remaining - 1
      }));
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.countDown(), 1000);
  }

  componentWillMount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <h2>{this.state.remaining} seconds remaining.</h2>
      </div>
    );
  }
}

const element = <Timer name='Filange' seconds={180} />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
