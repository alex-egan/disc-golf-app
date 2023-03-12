import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Map from './components/Map';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="page">
      <header className="header">
        <ResponsiveAppBar></ResponsiveAppBar>
      </header>
      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/map" element={<Map></Map>} />
          </Routes>
        </BrowserRouter>
      </div>
      <footer className="footer">
        <div>
          <span>{`Copyright Alex Egan ${new Date(Date.now()).getFullYear()}`}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
