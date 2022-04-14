import { useEffect } from 'react'
import './App.css';
import { Home } from './Pages/Home';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration : 1500
    });
  }, []);
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
