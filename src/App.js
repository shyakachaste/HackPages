import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Library from './components/Library';
import BookDetailPage from '../src/components/pages/BookDetailPage';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <HowItWorks />
              <Library />
              <Footer />
            </>
          } />
          <Route path="/books/:id" element={<BookDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
