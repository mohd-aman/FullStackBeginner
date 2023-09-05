import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';

import './stylesheets/alignments.css'
import './stylesheets/sizes.css'
import './stylesheets/form-elements.css'
import './stylesheets/theme.css'
import './stylesheets/custom.css'


import Home from "./pages/Home"
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
                        <ProtectedRoute>
                          <Home/>
                        </ProtectedRoute>
        
        }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
