import { useState } from 'react';
import styled from 'styled-components';

import d4 from '../assets/images/d4.png';
import d6 from '../assets/images/d6.png';
import d8 from '../assets/images/d8.png';
import d10 from '../assets/images/d10.png';
import d12 from '../assets/images/d12.png';
import d20 from '../assets/images/d20.png';

import { ButtonRegular } from './buttons/ButtonRegular';

const DiceContainer = styled.div`
  margin: 0 10px;
  display: inline-block;
`;

const DiceImgContainer = styled.img`
width: 100%;
max-wdith: 100%;
display: block;
margin: 10px 0 0 0;

&:hover {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  animation-iteration-count: infinite;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
`;

const DicePack = () => {
  let info, diceRoll;
  
  const [resultD4, setResultD4] = useState(0);
  const [resultD6, setResultD6] = useState(0);
  const [resultD8, setResultD8] = useState(0);
  const [resultD10, setResultD10] = useState(0);
  const [resultD12, setResultD12] = useState(0);
  const [resultD20, setResultD20] = useState(0);

  const rollDice4 = () => rollDice(4);
  const rollDice6 = () => rollDice(6);
  const rollDice8 = () => rollDice(8);
  const rollDice10 = () => rollDice(10);
  const rollDice12 = () => rollDice(12);
  const rollDice20 = () => rollDice(20);

  const rollDice = (max) => {
    diceRoll = 1 + Math.floor(Math.random() * max);
    
    if (max === 4) setResultD4(diceRoll);
    else if (max === 6) setResultD6(diceRoll);
    else if (max === 8) setResultD8(diceRoll);
    else if (max === 10) setResultD10(diceRoll);
    else if (max === 12) setResultD12(diceRoll);
    else if (max === 20) setResultD20(diceRoll);
    else prompt("Error! Dice don't exist");
  };
 
  info =
    <> 
      <DiceContainer>
        <ButtonRegular onClick={rollDice4} color="#278cd4" btnHover="#e0b700" btnText="Roll D4">
          <DiceImgContainer src={d4} alt="4 sided dice" />
        </ButtonRegular>
        <p>You have rolled: {resultD4}</p>
      </DiceContainer>
      <DiceContainer>
        <ButtonRegular onClick={rollDice6} color="#278cd4" btnHover="#e0b700" btnText="Roll D6">
          <DiceImgContainer src={d6} alt="6 sided dice" />
        </ButtonRegular>
        <p>You have rolled: {resultD6}</p>
      </DiceContainer>
      <DiceContainer>
        <ButtonRegular onClick={rollDice8} color="#278cd4" btnHover="#e0b700" btnText="Roll D8">
          <DiceImgContainer src={d8} alt="6 sided dice" />
        </ButtonRegular>
        <p>You have rolled: {resultD8}</p>
      </DiceContainer>
      <DiceContainer>
        <ButtonRegular onClick={rollDice10} color="#278cd4" btnHover="#e0b700" btnText="Roll D10">
          <DiceImgContainer src={d10} alt="6 sided dice" />
        </ButtonRegular>
        <p>You have rolled: {resultD10}</p>
      </DiceContainer>
      <DiceContainer>
        <ButtonRegular onClick={rollDice12} color="#278cd4" btnHover="#e0b700" btnText="Roll D12">
          <DiceImgContainer src={d12} alt="6 sided dice" />
        </ButtonRegular>
        <p>You have rolled: {resultD12}</p>
      </DiceContainer>
      <DiceContainer>
        <ButtonRegular onClick={rollDice20} color="#278cd4" btnHover="#e0b700" btnText="Roll D20">
          <DiceImgContainer src={d20} alt="6 sided dice" />
        </ButtonRegular>
        <p>You have rolled: {resultD20}</p>
      </DiceContainer>
    </>
  ;

  return info;
};

export default DicePack;