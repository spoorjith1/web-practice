import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import PageNotFound from './pages/PageNotFound';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className='page'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
export default App;