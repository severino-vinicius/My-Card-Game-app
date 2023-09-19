import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <section className="formCreateCards">
        <h2> Crie uma nova carta </h2>
        <div className="formContainer">
          <hr className="hrForm" />
          <div>
            <label htmlFor="cardName">
              <h4> Nome </h4>
              <input
                type="text"
                name="cardName"
                id="cardName"
                data-testid="name-input"
                value={ cardName }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor="cardDescription">
              <h4> Descrição </h4>
              <input
                type="textarea"
                name="cardDescription"
                id="cardDescription"
                data-testid="description-input"
                value={ cardDescription }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <hr className="hrForm" />

          <div>
            <label htmlFor="cardAttr1">
              <h4> Força </h4>
              <input
                type="number"
                name="cardAttr1"
                id="cardAttr1"
                data-testid="attr1-input"
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor="cardAttr2">
              <h4> Inteligencia </h4>
              <input
                type="number"
                name="cardAttr2"
                id="cardAttr2"
                data-testid="attr2-input"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor="cardAttr3">
              <h4> Resistencia </h4>
              <input
                type="number"
                name="cardAttr3"
                id="cardAttr3"
                data-testid="attr3-input"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor="cardImage">
              <h4> Imagem </h4>
              <input
                type="text"
                name="cardImage"
                id="cardImage"
                data-testid="image-input"
                value={ cardImage }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <hr className="hrForm" />
          <div>
            <label htmlFor="cardRare">
              <h4> Raridade </h4>
              <select
                name="cardRare"
                id="cardRare"
                data-testid="rare-input"
                value={ cardRare }
                onChange={ onInputChange }
              >
                <option value="normal"> normal </option>
                <option value="raro"> raro </option>
                <option value="muito raro"> muito raro </option>
              </select>
            </label>
          </div>

          {hasTrunfo ? (
            <p>
              Você já tem um Super Trunfo em seu baralho
            </p>
          )
            : (
              <label htmlFor="cardTrunfo">
                <p>
                  Super Trunfo
                </p>
                <input
                  type="checkbox"
                  name="cardTrunfo"
                  id="cardTrunfo"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              </label>)}
          <button
            className="saveBtn"
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
