import styled from "styled-components";

const StHeader = styled.header`
  height: 20vh;
  line-height: 20vh;

  background-color: pink;
`;

function Header() {
  return (
    <StHeader>
      <h1>TODO LIST</h1>
    </StHeader>
  );
}

export default Header;
