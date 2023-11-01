import styled from "styled-components"
// eslint-disable-next-line react/prop-types
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dice.png" alt="logo" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Game</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    gap: 50px;
    .content h1{
        font-size: 98px;
        white-space: nowrap;
        font-weight: 600;
    }
    img{
        height: 300px;
        width: 300px;
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
