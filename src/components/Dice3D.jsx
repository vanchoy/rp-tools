import { useState } from 'react';
import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';

import { ButtonRegular } from './buttons/ButtonRegular';

const Dice3D = () => {
  const [result, setResult] = useState(36);

  const handleChange = (e) => setResult(e.target.result);

  let rollDoneCallback = (num) => {
    setResult(num);
    return num;
  }; 

  const rollAll = () => {
    return ReactDice.ReactDice.rollAll();
  };

  return (
    <>
      <div>
        <ReactDice
          numDice={6}
          rollDone={rollDoneCallback}
          ref={dice => ReactDice.ReactDice = dice}
          defaultRoll={6}
          margin={10}
          dieSize={200}
          disableIndividual={false}
          faceColor={'#278cd4'}
          dotColor={'#fff'}
          outline={false}
          outlineColor={'#fff'}
        />
      </div>
      
      <p onChange={handleChange}>You have rolled a total of: {result}</p>
      <ButtonRegular onClick={rollAll} color="#278cd4" btnHover="#e0b700" btnText="Roll all">
        <FontAwesomeIcon className="right icon-center" icon={faDice} size="1x" />
      </ButtonRegular>
    </>
  );
};

export { Dice3D };