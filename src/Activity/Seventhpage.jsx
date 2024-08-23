import { East } from '@mui/icons-material';

import React from 'react';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import image9 from '../Activity/Images/image9.png';
import Logo7 from '../Activity/Images/Logo7.png';
import Logo1 from '../Activity/Images/Logo1.png';
import Logo2 from '../Activity/Images/Logo2.png';
import Logo3 from '../Activity/Images/Logo3.png';
import Logo4 from '../Activity/Images/Logo4.png';
import Logo5 from '../Activity/Images/Logo5.png';
const Seventhpage = () => {
  return (
    <Box 
            sx={{ 
                flexGrow: 1, 
                height: 'auto', // Set to auto for responsive height
                marginTop: { xs: '20px', sm: '30px' },
                padding: { xs: '0 16px', sm: '0 32px' },
                fontFamily: 'Inter, sans-serif'
                 // Add padding for mobile screens
            }}
        >
            <Grid container spacing={2} columns={16} alignItems="center">
                {/* Image Section */}
                <Grid 
                    item 
                    xs={12} 
                    sm={6} 
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'center', sm: 'flex-start' }, // Center image on mobile
                        marginTop: { xs: '10px', sm: '0' }, // Adjust margin for mobile
                    }}
                >
                    <img 
                        src={image9}
                        alt="" 
                        style={{
                            maxWidth: '100%', // Make the image responsive
                            height: 'auto'
                        }} />
                </Grid>

                {/* Text Section */}
                <Grid 
                    item 
                    xs={12} 
                    sm={10} 
                    sx={{
                        marginTop: { xs: '20px', sm: '0' }, // Adjust margin for mobile
                        paddingLeft: { sm: '150px' }, // Add padding on larger screens
                    }}
                >
                    <Box>
                        <div style={{
                            textAlign: 'left', 
                            fontSize: '1rem', // Adjust font size for responsiveness
                            width: '100%', 
                        }}>
                            
                            <p style={{ 
                                color: '#969191d5', 
                                textAlign: 'left', 
                                fontSize: '1rem', // Adjust font size for responsiveness
                                margin: '10px 0' 
                            }}>
                                Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
                                massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
                                In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus.
                                In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
                                commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis 
                                libero. Donec consectetur faucibus ipsum id gravida.
                            </p>
                            <h1 style={{ margin: '10px 0',fontSize:'1.1rem' ,color:"#4CAF4F"}}>
                                Tim Smith 
                            </h1>
                            < p style={{ margin: '10px 0' ,color:'#969191d5'}}>
                                British dragon Boat Racing Association
                            </p>
                            
                        </div>
                    </Box>
                    <Box 
                                display='flex' 
                                sx={{ 
                                    flexDirection: { xs: 'column', sm: 'row' }, // Stack items on mobile
                                    alignItems: { xs: 'center', sm: 'flex-start' },
                                    marginTop: '30px' 
                                }}
                            >
                                <Box
  display="grid"
  gridTemplateColumns={{
    xs: 'repeat(6, 1fr)', // 3 images per row on extra small screens
    sm: 'repeat(6, 1fr)', // 6 images per row on small screens
    md: 'repeat(12, 1fr)' // 12 images per row on medium screens and up
  }}
  gap={1}
  sx={{
    alignContent: 'center',
    marginTop: '30px',
    width: '100%'
  }}
>
  <Box gridColumn="span 2" >
    <img src={Logo7} alt=""  />
  </Box>
  <Box gridColumn="span 2">
    <img src={Logo1} alt="" />
  </Box>
  <Box gridColumn="span 2">
    <img src={Logo2} alt=""  />
  </Box>
  <Box gridColumn="span 2">
    <img src={Logo3} alt=""  />
  </Box>
  <Box gridColumn="span 2">
    <img src={Logo4} alt="" />
  </Box>
  <Box gridColumn="span 2">
    <img src={Logo5} alt="" />
  </Box>
</Box>

                                <Box 
                                    sx={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        marginTop: '34px',
                                        marginLeft: { sm: '2px' }
                                    }}
                                >
                                    <Button sx={{ color: 'green', whiteSpace: 'nowrap', textTransform: 'none' }}>Meet All Customers</Button>
                                    <East fontSize="large" sx={{ color: 'green', marginLeft: '5px' }} />
                                </Box>
                            </Box>
                </Grid>
            </Grid>
        </Box>
  )
}

export default Seventhpage