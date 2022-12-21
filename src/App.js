import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adopt from "./Pages/Adopt"
import Giveaway from "./Pages/Giveaway"
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import DogTable from './Pages/DogTable';
import CatTable from './Pages/CatTable';
import PetList from "./Pages/PetList"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/header" element={<Header/>}/>
          <Route path="/pets" element={<PetList/>}/>
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/adopt" element={<Adopt/>}/>
          <Route path="/giveaway" element={<Giveaway/>}/>
          <Route path="/dogtable" element={<DogTable/>}/>
          <Route path="/cattable" element={<CatTable/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
