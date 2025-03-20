import React from 'react'
import { Box, useColorModeValue } from "@chakra-ui/react"
import Navbar from './components/Navbar.jsx'
import CreatePage from './pages/CreatePage.jsx'
import HomePage from './pages/HomePage.jsx'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Box h={"100vh"} bg={useColorModeValue("rgb(216, 232, 234)", "rgb(50, 49, 73)")} >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App