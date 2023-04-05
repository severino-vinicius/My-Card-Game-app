import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    } = this.props;
    return (
      <section className="Cards">
        <h1> Card </h1>
        <hr />
        <div>
          <div>
            <p data-testid="name-card">
              { cardName }
            </p>
          </div>
          <div>
            <img
              data-testid="image-card"
              src={ cardImage }
              alt={ cardName }
            />
          </div>
          <div>
            <p data-testid="description-card">
              { cardDescription }
            </p>
          </div>
          <div>
            <p data-testid="attr1-card">
              { cardAttr1 }
            </p>
          </div>
          <div>
            <p data-testid="attr2-card">
              { cardAttr2 }
            </p>
          </div>
          <div>
            <p data-testid="attr3-card">
              { cardAttr3 }
            </p>
          </div>
          <div>
            <p data-testid="rare-card">
              { cardRare }
            </p>
          </div>
          <div>
            {cardTrunfo && (
              <p data-testid="trunfo-card">
                Super Trunfo
              </p>
            )}

          </div>
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
};

export default Card;
