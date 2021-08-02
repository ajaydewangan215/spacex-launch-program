import './App.css'
import Footer from './components/Footer'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>spacEx Lunch Programs</h1>
      </header>
      <div className="main">
        <LeftSection />
        <RightSection />        
      </div>
      <Footer />
    </div>
  );
}

export default App;
