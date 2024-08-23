import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Icon1 from '../Activity/Images/Icon1.png';
import Icon2 from '../Activity/Images/Icon2.png';
import Icon3 from '../Activity/Images/Icon3.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // Reduced size of the boxes
    maxWidth: 300,
    margin: '0 auto', // Centering the boxes
}));


const ThirdPage = () => {
  return (
    <Box sx={{ fontFamily: 'Inter, sans-serif',flexGrow: 1, mx: { xs: 1, sm: 2, md: 4 }, my: { xs: 2, sm: 4, md: 6 } }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid xs={12} sm={4} display="flex" justifyContent="center">
                    <Item>
                        <Box>
                            <img src={Icon1} alt="" style={{ width: '80px', height: 'auto' }} />
                            <h1 style={{ margin: '10px 0 0', fontSize: '1.2rem',fontWeight:'bold' }}>
                                MemberShip
                            </h1>
                            <h1 style={{ margin: '10px 0', fontSize: '1.2rem',fontWeight:'bold' }}>
                                Organisations
                            </h1>
                            <p style={{ margin: '0 0 10px', fontSize: '0.9rem' }}>
                                Our membership management software
                                provides full automation of membership
                                renewals and payments
                            </p>
                        </Box>
                    </Item>
                </Grid>
                <Grid xs={12} sm={4} display="flex" justifyContent="center">
                    <Item>
                        <Box>
                            <img src={Icon2} alt="" style={{ width: '80px', height: 'auto' }} />
                            <h1 style={{ margin: '10px 0 0', fontSize: '1.2rem' }}>
                                National
                            </h1>
                            <h1 style={{ margin: '10px 0', fontSize: '1.2rem' }}>
                                Associations
                            </h1>
                            <p style={{ margin: '0 0 10px', fontSize: '0.9rem' }}>
                                Our membership management software
                                provides full automation of membership
                                renewals and payments
                            </p>
                        </Box>
                    </Item>
                </Grid>
                <Grid xs={12} sm={4} display="flex" justifyContent="center">
                    <Item>
                        <Box>
                            <img src={Icon3} alt="" style={{ width: '80px', height: 'auto' }} />
                            <h1 style={{ margin: '10px 0 0', fontSize: '1.2rem' }}>
                                Clubs
                            </h1>
                            <h1 style={{ margin: '10px 0', fontSize: '1.2rem' }}>
                                And Groups
                            </h1>
                            <p style={{ margin: '0 0 10px', fontSize: '0.9rem' }}>
                                Our membership management software
                                provides full automation of membership
                                renewals and payments
                            </p>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
  )
}

export default ThirdPage