import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import LoginInfo from "./components/LoginInfo";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
      <AppContainer>
        <div className="main">
          <div className="details"><LoginInfo/></div>
          <div className="form"><AccountBox /></div>
        </div>
    </AppContainer>
  );
}

export default App;
