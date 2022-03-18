import './App.css';
import Menubar from './component/Menubar/Menubar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProducts from './component/AllProducts/AllProducts';

function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <AllProducts></AllProducts>
    </div>
  );
}

export default App;
