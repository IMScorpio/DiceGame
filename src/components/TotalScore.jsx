import styled from "styled-components"

// eslint-disable-next-line react/prop-types
const TotalScore = ({Score}) => {
  return (
    <ScoreContainer>
        <h1>{Score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
    min-width: 200px;
    align-items: center;
    text-align: center;
    h1{
        font-size: 100px;
        line-height: 100px;
    }p{
        color: #2337c6;
        font-weight: 500;
        font-size: 24px;
    }
`;