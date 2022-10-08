import {Link, Outlet} from 'react-router-dom'
import '../css/layout.css'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//icons
import {BiCheckbox} from 'react-icons/bi'
import {RiLockPasswordFill} from 'react-icons/ri'
import {BiEnvelope} from 'react-icons/bi'
import {FaMoneyBill} from 'react-icons/fa'
import {GrApps} from 'react-icons/gr'
import {FiLogOut} from 'react-icons/fi'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Layout = () => {


    return (
    <>
     {/* <CssBaseline />
      <Container  maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh',paddingLeft:'2px' }}> */}
        <nav>
     <ul className='container'>
     <div>
            <Link to='/profile'>Idiko Gasper</Link>
        </div>

          <div style={{paddingTop:'5rem' }}> 
            <Link to='/general' style={{textDecoration:'none',fontFamily:'roboto' }}>
             
               <BiCheckbox/>  General
                </Link>
               
        </div>
        <div style={{paddingTop:'1rem' }}>
            <Link to='/password' style={{textDecoration:'none',fontFamily:'roboto'}}>
           <RiLockPasswordFill/>   Password
                </Link>
        </div>
        <div style={{paddingTop:'1rem' }}>
            <Link to='/invitations' style={{textDecoration:'none',fontFamily:'roboto'}}>
              <BiEnvelope/>   Invitations</Link>
        </div>

        <div style={{paddingTop:'1rem' }}>
            <Link to='/billing' style={{textDecoration:'none',fontFamily:'roboto'}}>
            <FaMoneyBill/>    Billings</Link>
        </div>
        <div style={{paddingTop:'1rem' }}>
            <Link to='/apps' style={{textDecoration:'none',fontFamily:'roboto'}}>
             <GrApps/>   Apps</Link>
        </div>
      
<div style={{paddingTop:'15rem' }}>
    <Link to='/logout' style={{textDecoration:'none',fontFamily:'roboto'}}>
      <FiLogOut/>  Logout</Link>
</div>


     </ul>
    </nav>
    <Outlet/>
        {/* </Box>
      </Container> */}


 
    </>
  )
}

export default Layout