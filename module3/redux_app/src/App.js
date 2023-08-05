
import './App.css';
import Navbar from './Components/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>

    // <div>  
    //   <Navbar/>
    //   <Home/>
    //   <Cart/>
    // </div>
  );
}

export default App;
