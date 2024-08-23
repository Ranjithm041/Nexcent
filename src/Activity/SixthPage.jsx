import React from 'react';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import pana from '../Activity/Images/pana.png';

const SixthPage = () => {
  return (
    <Box 
      sx={{ 
        flexGrow: 1, 
        height: 'auto', 
        marginTop: { xs: '20px', sm: '30px' },
        padding: { xs: '0 16px', sm: '0 32px' },
        fontFamily: 'Inter, sans-serif'
      }}
    >
      <Grid 
        container 
        spacing={2} 
        columns={16} 
        alignItems="center"
        justifyContent="center" // Center content in the grid
      >
        {/* Image Section */}
        <Grid 
          item 
          xs={12} 
          sm={6} 
          sx={{
            display: 'flex',
            justifyContent: 'center', // Center image on all screen sizes
            marginTop: { xs: '10px', sm: '0' }, // Adjust margin for mobile
          }}
        >
          <img 
            src={pana}
            alt="" 
            style={{
              maxWidth: '100%', // Make the image responsive
              height: 'auto'
            }} 
          />
        </Grid>

        {/* Text Section */}
        <Grid 
          item 
          xs={12} 
          sm={10} 
          sx={{
            marginTop: { xs: '20px', sm: '0' }, // Adjust margin for mobile
            paddingLeft: { sm: '150px' }, // Add padding on larger screens
            textAlign: { xs: 'center', sm: 'left' }, // Center text on mobile view
          }}
        >
          <Box>
            <div style={{
              fontSize: '1rem', 
              width: '100%',
            }}>
              <h1 style={{ 
                margin: '10px 0', 
                color: "#4d4d4d",
              }}>
                How to design your site footer like
              </h1>
              <h1 style={{ 
                margin: '10px 0', 
                color: "#4d4d4d",
              }}>
                we did
              </h1>
              
              <p style={{ 
                color: 'gray', 
                fontSize: '1rem', 
                margin: '10px 0',
                textAlign: { xs: 'center', sm: 'left' }, // Center text on mobile view
              }}>
                Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
                massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
                In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus.
                In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
                commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis 
                libero. Donec consectetur faucibus ipsum id gravida.
              </p>
              <Button 
                sx={{ 
                  bgcolor: '#4CAF4F', 
                  color: 'white', 
                  marginTop: '20px', 
                  textTransform: 'none',
                  display: 'block', 
                  mx: 'auto', // Center the button on mobile view
                }} 
                variant="contained"
              >
                Learn More
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SixthPage;
