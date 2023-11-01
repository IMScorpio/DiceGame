import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import styled from "styled-components";
import { useState } from "react";
import TotalScore from "./TotalScore";

const GameStart = () => {
    const [selectedNum, setSelectedNum ] =useState(0);
    const [CurrentDice, setCurrentDice] = useState(1);
    const [Score, setScore] = useState(0);
    const [Error, setError] = useState("");

    const generateRandomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
        
    };
    const rollDice = () =>{
        if (!selectedNum){
            setError("*You have not selected any number");
            return;
        }
        setError("");

        const randomNum = generateRandomNum(1,7);
        setCurrentDice(() => randomNum);

        if(selectedNum === randomNum){
            setScore((prev) => prev + randomNum);
        }else{
            setScore((prev) => prev - 2);
        }
        selectedNum(undefined);
    }
    const resetScore = () =>{
        setScore(0);
        
    }



    return (
        <MainContainer>
            <div className="top-section">
                <TotalScore Score={Score}/>
                <RollDice 
                    resetScore = {resetScore}
                    CurrentDice={CurrentDice}
                    rollDice={rollDice}
                />
                
                <NumberSelector 
                    Error={Error}
                    setError={setError}
                    selectedNum={selectedNum}
                    setSelectedNum={setSelectedNum}
                />
                
            </div>
        
        </MainContainer>
    );
}

export default GameStart

const MainContainer = styled.main`
    .top-section{
        display: flex;
        justify-content: space-around;
        height: 100vh;
   }
`;

