import PlayArea from "./PlayArea";
import styled from "styled-components";
import "./App.css";

const S = {
  AreaContainer: styled.div`
    background: #1e824c;
    min-height: 100vh;
    padding: 50px;
  `,
};

const App = () => (
  <S.AreaContainer>
    <header>
      <h1>JockMKT Frontend Take Home Assignment</h1>
    </header>
    <PlayArea />
  </S.AreaContainer>
);

export default App;
