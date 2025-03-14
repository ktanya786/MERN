
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store.jsx";
import { useState } from "react";

function App() {
  
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
    <PostListProvider>
      <div className="app-container">
        <div className="sidebar-content">
          <Sidebar selectedTab ={selectedTab} setSelectedTab={setSelectedTab}/>
        </div>
        <div className="content">
          <Header></Header>
          { (selectedTab==="Home") ? <PostList /> : <CreatePost /> }
        </div>
        <Footer></Footer>
      </div>
    </PostListProvider>
    </>
  )
}

export default App
