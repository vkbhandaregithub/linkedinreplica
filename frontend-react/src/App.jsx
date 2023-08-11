import "./App.css";
import Rightsidebar from "./components/RightSidebar/Rightsidebar";
import Feed from "./components/feed/Feed";
import Navbar from "./components/navbar/Navbar";
import Post from "./components/post/Post";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="main d-flex justify-content-between align-items-start">
        <div className="sidebarContainer__main">
          <Sidebar />
        </div>
        <div className="main__center">
          <Feed />
          <Post />
          {/* <Post /> for testing */}
        </div>
        <div className="sidebarContainer__main">
          <Rightsidebar />
        </div>
      </div>
    </>
  );
}

export default App;
