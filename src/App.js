import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Getusers from './Pages/Getusers'
import Adduser from './Pages/Adduser'
import Updateusers from './Pages/Updateusers'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Getusers/>}></Route>
      <Route path='/add' element={<Adduser/>}></Route>
      <Route path='/edit/:id' element={<Updateusers/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App