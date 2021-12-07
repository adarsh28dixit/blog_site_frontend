import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/navbar';
import Blog from './pages/blog';
import SingleBlog from './pages/singleBlog';
import AddBlog from './pages/addBlog';
import Login from './pages/login';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>

        <Route path="/" element={<Home />} exact />
          <Route path="/blog" element={<Blog />} />
          <Route path="/singleblog/:id" element={<SingleBlog />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
