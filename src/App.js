import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adopt from "./Pages/Adopt"
import Giveaway from "./Pages/Giveaway"
import Pet from './Pages/Pet';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Table from './Pages/Table';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/header" element={<Header/>}/>
          <Route path="/pets" element={<Pet/>}/>
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/adopt" element={<Adopt/>}/>
          <Route path="/giveaway" element={<Giveaway/>}/>
          <Route path="/table" element={<Table/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
