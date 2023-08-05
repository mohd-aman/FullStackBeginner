
import './App.css';
import Navbar from './Components/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Provider } from 'react-redux';
import store from './Store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    

    // <div>  
    //   <Navbar/>
    //   <Home/>
    //   <Cart/>
    // </div>
  );
}

export default App;
