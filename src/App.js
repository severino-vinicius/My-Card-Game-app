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
    hasTrunfo: false,
    cardTrunfo: false,
    deck: [],
  };

  onSaveButtonClick = () => {
    const cards = this.state;
    if (cards.cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
    this.setState((prev) => ({
      hasTrunfo: prev.hasTrunfo ? true : prev.hasTrunfo,
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      deck: [...prev.deck, cards],
    }));
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
      hasTrunfo,
      deck,
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
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
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
          deck={ deck }
        />
      </div>
    );
  }
}

export default App;
