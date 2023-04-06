import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    isSaveButtonDisabled: true,
    cardTrunfo: false,
  };

  verify = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const maxAtri = 90;
    const maxSom = 210;
    const valCardName = cardName.length > 0;
    const valCardDescription = cardDescription.length > 0;
    const valCardImage = cardImage.length > 0;
    const valCardRare = cardRare.length > 0;
    const valSomAttri = ((+cardAttr1) + (+cardAttr2) + (+cardAttr3) <= maxSom);
    const valNegAttribs = (+cardAttr1 >= 0) && (+cardAttr2 >= 0) && (+cardAttr3 >= 0);
    const valAttri = ((cardAttr1 <= maxAtri)
      && (cardAttr2 <= maxAtri) && (cardAttr3 <= maxAtri)
    );
    this.setState({
      isSaveButtonDisabled: !(valCardName && valCardDescription && valCardImage
        && valCardRare && valAttri && valSomAttri && valNegAttribs),
    });
  };

  onInputChange = ({ target }) => {
    // Caso for checkBox
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.verify);
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      isSaveButtonDisabled,
      cardTrunfo,
    } = this.state;
    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
