import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

const StMain = styled.main`
  height: 70vh;
`;

function Layout({ children }) {
  return (
    <div>
      <Header />
      <StMain>{children}</StMain>
      <Footer />
    </div>
  );
}

export default Layout;
