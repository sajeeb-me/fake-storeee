import './App.css';
import Menubar from './component/Menubar/Menubar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProducts from './component/AllProducts/AllProducts';
import Footer from './component/Footer/Footer';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(0)
  const cartClicked = () => {
    setNum(num + 1);
  }
  return (
    <div className="App">
      <Menubar num={num}></Menubar>
      <AllProducts cartClicked={cartClicked}></AllProducts>
      <Footer></Footer>
    </div>
  );
}

export default App;
