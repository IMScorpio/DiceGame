import styled from "styled-components"
// eslint-disable-next-line react/prop-types
const RollDice = ({ resetScore, CurrentDice, rollDice }) => {
    return (
        <DiceContainer>
            <div className="dice" onClick={rollDice}>
                <img src={`/images/dice/dice_${CurrentDice}.png`} alt={`Dice with value ${CurrentDice}`} aria-label={`Dice with value ${CurrentDice}`} />

            </div>
            <p>Click on Dice to role</p>
            <div className="btn">
                <Button onClick={resetScore}>Reset</Button>
            </div>
            <RulesContainer>
                <h2>How to play dice game</h2>
                <div className="text">
                    <p>Select any number</p>
                    <p>Click on dice image</p>
                    <p>
                    after click on dice if selected number is equal to dice number you
                    will get same point as dice{" "}
                    </p>
                    <p>if you get wrong guess then 2 point will be dedcuted </p>
                </div>
            </RulesContainer>
        </DiceContainer>
    )
}

export default RollDice





const DiceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction : column;
    
    img{
        display: flex;
        width: 150px;
        height: 150px;

    }
    p{
        font-size: 18px;
        font-weight: 500;
    }
    .dice{
        cursor: pointer;

    }
    .btn{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 25px;
    }
`;

const Button = styled.button`
    padding: 10px 18px;
    background: #2337c6;
    cursor: pointer;
    color: #fff;
    min-width: 220px;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid transparent;
    letter-spacing: 1px;
    border-radius: 5px;
    transition: 0.4s background ease-in;

    &:hover{
        background-color: #fff;
        color: #2337c6;
        border: 1px solid #2337c6;
        transition: 0.3s background ease-in;
    }
    
`;
const RulesContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 14px;
  }
  .text {
    margin-top: 24px;
   
  }
  p{
    font-size: 10px;
  }
`;