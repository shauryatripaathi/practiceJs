import './App.css';
import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
        <nav>
          <ul className='navbar'>
            <Link to='/' className='navLink' >Home</Link>
            <Link to='/about' className='navLink' >About</Link>
            <Link to='/contact' className='navLink' >Contact</Link>
          </ul>
        </nav>

    <Routes>
       <Route path='/' element =  {<Home />}/>
       <Route path='/about' element = { <About />} />
       <Route path='/contact' element = {<Contact />} />        
    </Routes>
    </div>
  );
}

export default App;
