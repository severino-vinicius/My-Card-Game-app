import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <section className="formCards">
        <h1> Adicione uma nova carta </h1>
        <hr />
        <form>
          <label htmlFor="">
            <h4> Nome </h4>
            <input
              type="text"
              name=""
              id=""
              data-testid="name-input"
            />
          </label>
          <hr />
          <label htmlFor="">
            <h4> Descrição </h4>
            <input
              type="textarea"
              name=""
              id=""
              data-testid="description-input"
            />
          </label>
          <hr />
          <label htmlFor="">
            Atri 01
            <input
              type="number"
              name=""
              id=""
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="">
            Atri 02
            <input
              type="number"
              name=""
              id=""
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="">
            Atri 03
            <input
              type="number"
              name=""
              id=""
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="">
            <h4> Imagem </h4>
            <input
              type="text"
              name=""
              id=""
              data-testid="image-input"
            />
          </label>
          <label htmlFor="">
            <h4> Raridade </h4>
            <select name="" id="" data-testid="rare-input">
              <option value="normal"> normal </option>
              <option value="raro"> raro </option>
              <option value="muito raro"> muito raro </option>
            </select>
          </label>
          <label htmlFor="">
            <input type="checkbox" name="" id="" data-testid="trunfo-input" />
          </label>
          <br />
          <br />
          <button data-testid="save-button">
            Salvar
          </button>
        </form>
      </section>
    );
  }
}

export default Form;
