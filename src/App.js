import logo from './logo.svg';
import './App.css';
import Design from './components/Design';
import NavbarEle from './components/NavbarEle';

function App() {
  return (
    <div className="w-full h-screen bg-banner-bg bg-no-repeat bg-center bg-cover relative overflow-hidden">
      <div>
        <NavbarEle/>
      </div>
      <div className="w-full h-screen absolute top-0 left-0">
        <Design />
      </div>
    </div>
  );
}

export default App;
