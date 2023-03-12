import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Map from './components/Map';
import Course from './components/Course';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="page">
      <header className="header">
        <NavBar></NavBar>
      </header>
      <div className="m-2 body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/courses/:id" element={<Course></Course>} />
            <Route path="/map" element={<Map></Map>} />
          </Routes>
        </BrowserRouter>
      </div>
      <footer className="footer align-items-center justify-content-center">
        <span>{`Copyright Alex Egan ${new Date(Date.now()).getFullYear()}`}</span>
      </footer>
    </div>
  );
}

export default App;
