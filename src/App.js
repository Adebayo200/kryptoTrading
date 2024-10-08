import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
   <BrowserRouter>
   <Routes>
<Route path='/' element={<Home/>} />
<Route path='/register' element={<Register/>} />
<Route path='/login' element={<Login/>} />
<Route path='/dashboard' element={<Dashboard/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
