import React from 'react';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';

import {TopPage} from './components/ui/pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
