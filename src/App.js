import styled from "styled-components";
import Header from "./components/Header";
import Converter from "./components/Converter";

function App() {
  return (
    <>
      <AppWrapper>
        <Header />
        <Converter />
      </AppWrapper>
    </>
  );
}

const AppWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export default App;
