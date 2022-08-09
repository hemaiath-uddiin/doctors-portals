
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar';
import { Routes, Route, } from "react-router-dom";

import About from './Pages/About';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar> 
    
      <Routes>

        <Route index path="/" element={<Home />}></Route>
          <Route path="about" element={<About></About>}> </Route> 
        


      </Routes>


    </div>
  );
}

export default App;
