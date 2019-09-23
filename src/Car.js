import React, { Component } from 'react';

class Car extends Component {
  state = {
    velocidade: 0,
    peso: 3466,
    cavalo: 3434
  };

  acelerar() {
    this.setState(state => {
      return {
        velocidade: state.velocidade + 10
      };
    });
  }

  desacelerar() {
    // TODO tarefa de casa
  }

  render() {
    const { velocidade } = this.state;
    const { name } = this.props;

    return (
      <div>
        {name} e estou a {velocidade} km/h
        <button onClick={() => this.acelerar()}>Acelerar</button>
      </div>
    );
  }
}

export default Car;
