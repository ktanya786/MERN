import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextprovider from "./context/UserContextProvider";

function App() {
  return (
    <>
      <UserContextprovider>
        {" "}
        <h1> React with Context API</h1>
        <Login />
        <Profile />
      </UserContextprovider>
    </>
  );
}

export default App;
