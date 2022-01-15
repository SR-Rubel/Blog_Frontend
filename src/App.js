import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Login from './component/Login';
import Blog from './container/Blog';
import FullPost from './component/FullPost';
import Edit from "./component/Edit";
import CreatePost from "./component/CreatePost";
function App() {
  return (
    <>
    <div className="App">
      {/* <Login /> */}
     
      <Routes>
          <Route  path="/" element={<Blog />}/>
          <Route  path="/login" element={<Login />}/>
          <Route  path="/create" element={<CreatePost />}/>
          <Route  path="/edit/:id" element={<Edit />}/>
          <Route path="post/:id" element={<FullPost />} />
      </Routes>

      {/* <Blog /> */}
    </div>
    </>
  );
}

export default App;
