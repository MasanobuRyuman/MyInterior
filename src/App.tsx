import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ARPage, TopPage, ContentPage } from './components/ui/pages'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/content" element={<ContentPage />} />
          <Route path="/AR" element={<ARPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
