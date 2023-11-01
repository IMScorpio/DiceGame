import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const NumberSelector = ({ setError, Error, selectedNum, setSelectedNum }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNum(value); // Corrected from setSelectedNumber to setSelectedNum
    setError("");
  };

  return (
    <NumSelectorContainer>
      <p className="error">{Error}</p>
      <div className="flex">
        <p>Select Number</p>
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNum}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
    </NumSelectorContainer>
  );
};

export default NumberSelector;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 2px solid #233763;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background: ${(props) => (props.isSelected ? "#233763" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#333")};
`;

const NumSelectorContainer = styled.div`
  margin: 20px;

  .flex {
    display: flex;
    align-items: center; // Align items in the center vertically
    justify-content: center; // Center the content horizontally
    flex-direction: column;
    gap: 15px;
    margin: 0 auto; // Center the container using auto margins
  }

  .flex p {
    font-weight: 700;
    color: #2337c6;
  }

  .error {
    color: red;
  }
`;
