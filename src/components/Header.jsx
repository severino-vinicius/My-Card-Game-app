import React, { Component } from 'react';
import './App.css';
import ImageIcon from './ImageIcon';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          Rei do Mares Card Game
        </h1>
        <ImageIcon />
      </header>
    );
  }
}

export default Header;
