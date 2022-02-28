import Navbar from './Components/Navbar/Navbar';
import HomeCarousel from './Components/HomeCarousel.js';
import Content from './Components/Content';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <>
      <div className='container' style={{marginLeft:'60px',marginRight:'60px', marginBottom:'40px'}}>
        <div>
          <img src="./srm-career-center-logo.png"></img>
        </div>
        <Navbar />
        <HomeCarousel />
        <div style={{height:'40px', color: '#777777', backgroundColor: '#f8f8f8', display: "flex", alignItems:"center", marginBottom: '30px'}}>
          Placement / Placement
        </div>
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
