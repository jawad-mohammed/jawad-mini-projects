import './App.css';
import Billing from './pages/Billing';
 import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Apps from './pages/Apps';
import General from './pages/General';
import Invitations from './pages/Invitations';
import Password from './pages/Password';
import Profile from './pages/Profile';
import Layout from './pages/Layout';
import Logout from './components/Logout/Logout';
import Login from './components/Login/Login';


function App() {
  return (
   <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Layout/>}/>
  <Route path='/apps' element={<Apps/>}/>
  <Route path='billing' element={<Billing/>}/>
  <Route path='general' element={<General/>}/>
  <Route path='invitations' element={<Invitations/>}/>
  <Route path='password' element={<Password/>}/>
  <Route path='profile' element={<Profile/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/logout' element={<Logout/>}/>


  
</Routes>
</BrowserRouter>





 
   </>
  );
}

export default App;
