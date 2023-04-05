import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  // state = {
  //   cardName: '',
  //   cardDescription: '',
  //   cardAttr1: '',
  //   cardAttr2: '',
  //   cardAttr3: '',
  //   cardImage: '',
  //   cardRare: '',
  //   cardTrunfo: '',

  // }

  render() {
    // Iniciando o projeto
    return (
      <div>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
