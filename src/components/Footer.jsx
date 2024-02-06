import styled from "styled-components";

const StFooter = styled.footer`
  height: 10vh;
  line-height: 10vh;

  background-color: pink;
`;

function Footer() {
  return (
    <StFooter>
      <h2>Have a nice day</h2>
    </StFooter>
  );
}

export default Footer;
