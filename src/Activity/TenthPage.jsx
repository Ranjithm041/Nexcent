import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material/';

const TenthPage = () => {
    return (
        <Box>
            <Grid container direction="column" alignItems="center" spacing={2}>
                <Grid item>
                    <Typography 
                        variant="h3" 
                        textAlign="center" 
                        sx={{ fontFamily: 'Inter, sans-serif' ,color:"#4d4d4d" }}
                    >
                        Pellentesque suscipit <br/>
                        fringilla libero eu.
                    </Typography>
                </Grid>
                <Grid item>
                    <Button 
                        sx={{ 
                            bgcolor: '#4CAF4F', 
                            color: 'white', 
                            marginTop: '20px', 
                            textTransform: 'none' 
                        }} 
                        variant="contained"
                    >
                        Get A Demo
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default TenthPage;
