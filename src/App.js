import './App.css';
import Design from './components/Design';
import NavbarEle from './components/NavbarEle';
import Home from './components/Home';

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-10"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-banner-bg bg-no-repeat bg-center bg-cover z-0"></div>

      {/* Particle Design */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <Design />
      </div>

      {/* Navbar */}
      <div className="relative">
        <NavbarEle />
      </div>
      
      {/* Main Content */}
      <div className="relative z-30 w-full">
        <Home />
      </div>
    </div>
  );
}

export default App;
