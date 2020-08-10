import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Repo from './pages/Repo';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />}/>
        <Route path="/:username/:reponame" element={<Repo />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
