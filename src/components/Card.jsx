import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Sword from './iconComp/002-sword.png';
import Shild from './iconComp/001-shield.png';
import Brain from './iconComp/003-cerebro-humano.png';
// import Deck from './Deck';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // deck,
    } = this.props;
    return (
      <section className="Cards">
        <h1 className="previewTitle"> Preview of Card </h1>
        <hr />
        <div className="cardPreview">
          <div className="itemCardPrev">
            <p data-testid="name-card">
              { cardName }
            </p>
          </div>
          <div className="contPreviewImage">
            <img
              className="previewImage"
              data-testid="image-card"
              src={ cardImage }
              alt={ cardName }
            />
          </div>
          <div className="cardDescrPrev">
            <p data-testid="description-card">
              { cardDescription }
            </p>
          </div>
          <div className="allAttri">
            <div>
              <img src={ Sword } alt="Ataque" />
            </div>
            <div className="itemAttrPrev">
              <p data-testid="attr1-card">
                { cardAttr1 }
              </p>
            </div>
            <div>
              <img src={ Shild } alt="Escudo" />
            </div>
            <div className="itemAttrPrev">
              <p data-testid="attr2-card">
                { cardAttr2 }
              </p>
            </div>
            <div>
              <img src={ Brain } alt="Inteligencia" />
            </div>
            <div className="itemAttrPrev">
              <p data-testid="attr3-card">
                { cardAttr3 }
              </p>
            </div>
          </div>
          <div className="itemCardPrev">
            <p data-testid="rare-card">
              { cardRare }
            </p>
          </div>
          <div>
            {cardTrunfo && (
              <div className="superTrunfoPreview">
                <p data-testid="trunfo-card">
                  Super
                </p>
              </div>
            )}
          </div>
          {/* <hr />
          <h5> Meu Deck </h5>
          <div>
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
            />
            ))}
          </div> */}
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // deck: PropTypes.arrayOf().isRequired,
}.isRequired;

export default Card;
