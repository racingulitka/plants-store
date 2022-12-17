import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header.jsx"
import Slider from "./Slider/Slider.jsx"
import Main from "./Main/Main.jsx"
import Footer from "./Footer/Footer.jsx"

function App() {
  return (
    <div className="App">
      <Header />
      <Slider/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
