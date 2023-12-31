import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';
import Header from './components/Header';
import './components/App.css';

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

  // deleteItem = (itemToDelete) => {
  //   const { deck } = this.state;
  //   const findItemTodelete = decclassName={ k.filter((card) => {
  //     if (card.cardName !== itemToDelete && card.cardTrunfo) {
  //       this.setState({
  //         deck: findItemTodelete,
  //         hasTrunfo: false,
  //       });
  //     } else {
  //       this.setState({
  //         deck: findItemTodelete,
  //         hasTrunfo: true,
  //       });
  //     }
  //   });
  // };
  deleteItem = (itemToDelete) => {
    this.setState((prev) => {
      const updatedDeck = prev.deck.filter((card) => card.cardName !== itemToDelete);
      const verifyTrunfo = updatedDeck.some((card) => card.cardTrunfo);
      return {
        deck: updatedDeck,
        hasTrunfo: verifyTrunfo,
      };
    });
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
      <>
        <Header />
        <div className="Container-Cards-e-Prev">
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
        <hr />
        <h5> Meu Deck </h5>
        <div className="Deck">
          {deck.map((card) => (<Deck
            key={ card.cardName }
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
            deleteItem={ this.deleteItem }
          />
          ))}
        </div>
      </>
    );
  }
}

export default App;
