import styled from "styled-components";
import { MembersList, AddMember } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Root = styled.main`
  height: 100vh;
  width: 100%;
`;

const App = () => (
  <Root>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MembersList />}></Route>
        <Route path="/addNewMember" element={<AddMember />}></Route>
      </Routes>
    </BrowserRouter>
  </Root>
);

export default App;
