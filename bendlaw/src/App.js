
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import { Blog } from './Pages/Blog';
import { Homepage } from './Pages/Homepage';
import { Service } from './Pages/Service';
import { Client } from './Pages/Client';

function App() {
  return (
  <div>
    <BrowserRouter>
   
    <Routes>
      <Route path='/' Component={Homepage}></Route>
      <Route path='/about' Component={About}></Route>
      <Route path='/blog' Component={Blog}></Route>
      <Route path='/service' Component={Service}></Route>
      <Route path='/client' Component={Client}></Route>
    </Routes>
    </BrowserRouter>
    
  </div>    
  );
}

export default App;
