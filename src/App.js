import React, { Suspense, lazy } from 'react';
import './App.css'
import Footer from './components/Footer'
const LeftSection = lazy(() => import('./components/LeftSection'))
const RightSection = lazy(() => import('./components/RightSection'))

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>spacEx Launch Programs</h1>
      </header>
      <div className="main">
        <Suspense fallback={<div>Loading...</div>}>
          <LeftSection />
          <RightSection />
        </Suspense>     
      </div>
      <Footer />
    </div>
  );
}

export default App;
