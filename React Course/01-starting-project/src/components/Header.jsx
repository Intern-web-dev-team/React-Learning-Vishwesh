import React from 'react';
import headerImage from '../assets/react-core-concepts.png';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import './Header.css'

function randomDescription(){
  return reactDescriptions[Math.floor(Math.random() * reactDescriptions.length)];
}

function Header() {
    const dex = randomDescription();
    console.log(reactDescriptions.indexOf(dex)); 
    return (
      <header>
        <img src={headerImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {dex} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }

export default Header;