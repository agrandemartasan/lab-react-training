import { useState } from 'react';
import diceEmpty from '../../assets/images/dice-empty.png';
import dice1 from '../../assets/images/dice1.png';
import dice2 from '../../assets/images/dice2.png';
import dice3 from '../../assets/images/dice3.png';
import dice4 from '../../assets/images/dice4.png';
import dice5 from '../../assets/images/dice5.png';
import dice6 from '../../assets/images/dice6.png';
import './Dice.css';

function Dice() {
  const [diceValue, setDiceValue] = useState(diceEmpty);
  const diceSides = [dice1, dice2, dice3, dice4, dice5, dice6];

  function handleDice() {
    let randomDiceSide = diceSides[Math.floor(Math.random() * 6)];
    setDiceValue(randomDiceSide);
  }
  return (
    <div className="dice">
      <img
        src={diceValue}
        alt="dice"
        onClick={handleDice}
        style={{ width: '10%', cursor: 'pointer' }}
      />
    </div>
  );
}

export default Dice;
