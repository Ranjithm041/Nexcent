

import * as React from "react";
import Box from "@mui/material/Box";
import Logo7 from '../Activity/Images/Logo7.png';
import Logo1 from '../Activity/Images/Logo1.png';
import Logo2 from '../Activity/Images/Logo2.png';
import Logo3 from '../Activity/Images/Logo3.png';
import Logo4 from '../Activity/Images/Logo4.png';
import Logo5 from '../Activity/Images/Logo5.png';
import './App.css'


function SecondPage() {
    return (
        <div className="App">
            <Box>
                <h1 style={{margin: 0,marginTop:'20px',fontFamily: 'Inter, sans-serif',color:"#4d4d4d"}}>
                    Our Clients
                </h1>
                <p xs={{margin: 0,fontFamily: 'Inter, sans-serif',fontSize:'4 em',color:"#4d4d4d"}}>
                    We have been working with some Fortune 500+ clients
                </p>
            </Box>
            <Box display="grid" gridTemplateColumns="repeat(10, 1fr)" gap={1} sx={{alignContent:'center',marginTop:'30px',width:'100%' }}> 
                <Box gridColumn="span 2">
                    <img src={Logo7} alt=""/>
                </Box>
                <Box gridColumn="span 1.5">
                    <img src={Logo1} alt=""/>
                </Box>
                <Box gridColumn="span 2">
                    <img src={Logo2} alt=""/>
                </Box>
                <Box gridColumn="span 1.5">
                    <img src={Logo3} alt=""/>
                </Box>
                <Box gridColumn="span 2">
                    <img src={Logo4} alt=""/>
                </Box>
                <Box gridColumn="span 1.5">
                    <img src={Logo5} alt=""/>
                </Box>
                
            </Box>
            
            <Box style={{marginTop:'35px'}}>
                <h2 xs={{margin: 0,fontFamily: 'Inter, sans-serif'}} style={{color:'#4d4d4d'}}>
                    Manage your entire community

                </h2>
                <h2 xs={{margin: 0,fontFamily: 'Inter, sans-serif' }} style={{color:'#4d4d4d'}}>
                    in a single system
                </h2>
                <p xs={{margin: 0,fontFamily: 'Inter, sans-serif'}} style={{color:'#4d4d4d'}}>
                    Who is Nextcent suitable for?

                </p>

            </Box>


        </div>

    );
}

export default SecondPage;
