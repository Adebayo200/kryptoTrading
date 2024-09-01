import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login/Login';

function App() {
  return (
   <BrowserRouter>
   <Routes>
<Route path='/' element={<Home/>} />
<Route path='/register' element={<Register/>} />
<Route path='/login' element={<Login/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
