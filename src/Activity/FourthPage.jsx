import React from 'react';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Frame3 from '../Activity/Images/Frame3.png';

const FourthPage = () => {
  return (
    <Box 
      sx={{ 
        flexGrow: 1, 
        height: 'auto',
        marginTop: { xs: '20px', sm: '30px' },
        padding: { xs: '0 16px', sm: '0 32px' },
        fontFamily: 'Inter, sans-serif',
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
            src={Frame3}
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
              fontSize: '1rem', // Adjust font size for responsiveness
              width: '100%', 
            }}>
              <h1 style={{ 
                margin: '10px 0', 
                color: "#4d4d4d",
              }}>
                The unseen of spending three
              </h1>
              <h1 style={{ 
                margin: '10px 0', 
                color: "#4d4d4d",
              }}>
                years at Pixelgrade
              </h1>
              
              <p style={{ 
                color: 'gray', 
                fontSize: '1rem', // Adjust font size for responsiveness
                margin: '10px 0',
                textAlign: { xs: 'center', sm: 'left' }, // Center text on mobile view
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae 
                est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. 
                Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. 
                Donec elementum pulvinar odio.
              </p>
              <Button 
                sx={{ 
                  bgcolor: '#4CAF4F', 
                  color: 'white', 
                  marginTop: '20px', 
                  textTransform: 'none',
                  display: 'block', // Ensure the button is centered
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

export default FourthPage;
