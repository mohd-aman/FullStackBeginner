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
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import TheatresForMovie from "./pages/TheatresForMovie";
import BookShow from "./pages/BookShow";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
                        <ProtectedRoute>
                          <Home/>
                        </ProtectedRoute>
        }/>
        <Route path="/movie/:id"
          element={
            <ProtectedRoute>
              <TheatresForMovie/>
            </ProtectedRoute>
          }
        />
        <Route path="/book-show/:id"
            element={
              <ProtectedRoute>
                {/* <BookShow/> */}
              </ProtectedRoute>
        }/>
        <Route path='/admin' element={
                        <ProtectedRoute>
                          <Admin/>
                        </ProtectedRoute>
        }/>
        <Route path='/profile' element={
                        <ProtectedRoute>
                          <Profile/>
                        </ProtectedRoute>
        }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
