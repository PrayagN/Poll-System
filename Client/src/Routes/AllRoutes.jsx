import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import VoteModal from '../components/VoteModal'

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/vote' element={<VoteModal/>} />
    </Routes>
  )
}

export default AllRoutes
