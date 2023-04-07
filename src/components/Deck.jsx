import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Deck extends Component {
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
    } = this.props;
    return (
      <div>
        <div>
          <p>
            { cardName }
          </p>
        </div>
        <div>
          <img
            src={ cardImage }
            alt={ cardName }
          />
        </div>
        <div>
          <p>
            { cardDescription }
          </p>
        </div>
        <div>
          <p>
            { cardAttr1 }
          </p>
        </div>
        <div>
          <p>
            { cardAttr2 }
          </p>
        </div>
        <div>
          <p>
            { cardAttr3 }
          </p>
        </div>
        <div>
          <p>
            { cardRare }
          </p>
        </div>
        <div>
          <p>
            { cardTrunfo }
          </p>
        </div>
      </div>
    );
  }
}

Deck.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Deck;
