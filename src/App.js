import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard';
import Withdrawal from './pages/Withdrawal';
import Deposit from './pages/Deposit';
import AdminControl from './pages/AdminControl';
import AddNewAddress from './pages/AddNewAddress';
import EditAddress from './pages/EditAddress';
import AddNewMinningPlans from './pages/EditAndAddMinningPlans/AddNewMinningPlans';
import EditMinningPlans from './pages/EditAndAddMinningPlans/EditMinningPlans';
import AddNewInvestmentPlans from './pages/EditAndAddInvestmentPlans/AddInvestmentPlans';
import EditInvestmentPlans from './pages/EditAndAddInvestmentPlans/EditInvestmentPlans';
import ChangeMyPassword from './pages/ChangePassword';
import AllPlans from './pages/AllPlans';

function App() {
  return (
   <BrowserRouter>
   <Routes>
<Route path='/' element={<Home/>} />
<Route path='/register' element={<Register/>} />
<Route path='/login' element={<Login/>} />
<Route path='/resetpassword' element={<ChangeMyPassword/>} />
<Route path='/dashboard' element={<Dashboard/>} />
<Route path='/withdrawal' element={<Withdrawal/>} />
<Route path='/deposit/:id' element={<Deposit/>} />
<Route path='/plans' element={<AllPlans/>} />
<Route path='/admincontrol' element={<AdminControl/>} />
<Route path='/addnewaddress' element={<AddNewAddress/>} />
<Route path='/editaddress/:id' element={<EditAddress/>} />
<Route path='/addnewminingplan' element={<AddNewMinningPlans/>} />
<Route path='/editminingplans/:id' element={<EditMinningPlans/>} />
<Route path='/addnewinvestmentplan' element={<AddNewInvestmentPlans/>} />
<Route path='/editinvestmentplans/:id' element={<EditInvestmentPlans/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
