import styled from "styled-components";

const StyledBody = styled.main`
  background: linear-gradient(45deg, #222, #111, #000);
  color: #fff;
  height: 100%;
`;

const Body = () => {
  return (
    <StyledBody>
      <h1>Body</h1>
    </StyledBody>
  );
};

export default Body;
