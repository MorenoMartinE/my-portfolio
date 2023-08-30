import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import Menu from './Components/Menu/Menu.jsx';

import Home from './Routes/Home/Home.jsx';
import WhoIm from './Routes/WhoIm/WhoIm.jsx';
import MyWork from './Routes/MyWork/MyWork.jsx';

function App() {


  const [onLoading, setOnLoading] = useState(true);

 

  return (
    <BrowserRouter>
    {
      onLoading ?
      <></>
      :
      <Menu />
    }
    

    <Routes>
        <Route path='/' element={<Home setOnLoading={setOnLoading}/>} />          
        <Route path='/whoim' element={<WhoIm />} />
        <Route path='/mywork' element={<MyWork />} />
          



        <Route path='/myskills'>
          
        </Route>

        <Route path='/myprofile'>
          
        </Route>

        <Route path='/contact'>
          
        </Route>

        <Route path='/about'>
          
        </Route>
    </Routes>




    </BrowserRouter>
  )
}

export default App
