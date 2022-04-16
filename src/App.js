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
      <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0"/>
      <Home/>
    </div>
  );
}

export default App;