import * as React from 'react';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Box from '@mui/material/Box';

import image18 from '../Activity/Images/image18.png';
import image19 from '../Activity/Images/image19.png';
import image20 from '../Activity/Images/image20.png';
import Frame13 from '../Activity/Images/Frame13.png';

const NewCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 366px;
  width: 368px;

  @media (max-width: 768px) {
    height: 300px;
    width: 300px;
    margin-bottom:100px;
  }

  @media (max-width: 480px) {
    height: 250px;
    width: 100%;
    margin-bottom: 20px;
  }
`;

const NewCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  height: 306px !important;
  width: 350px !important;

  @media (max-width: 768px) {
    height: 250px !important;
    width: 300px !important;
  }

  @media (max-width: 480px) {
    height: auto !important;
    width: 100% !important;
    padding: 0;
  }
`;

const NewCardContent = styled.div`
  text-align: center;
  background-color: #F5F7FA;
  border-radius: 8px;
  padding: 16px;
  height: 176px;
  width: 300px;
  margin-top: -50px;
  box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.1); /* Added shadow */

  @media (max-width: 768px) {
    height: 150px;
    width: 250px;
    padding: 12px;
  }

  @media (max-width: 480px) {
    height: auto;
    width: 90%;
    margin-top: -30px;
    padding: 10px;
  }
`;

const ResponsiveBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    gap: 20px;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    gap: 10px;
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

function NinthPage() {
  return (
    <ResponsiveBox>
      <NewCardContainer>
        <NewCard>
          <img src={image18} style={{ width: '100%', height: 'auto' }} alt="Safeguarding Processes" />
          <NewCardContent>
            <Typography variant='h4' fontSize={'20px'} marginBottom={'20px'} color={'gray'}>
              Creating Streamlined Safeguarding Processes with OneRen
            </Typography>
            <img src={Frame13} alt="OneRen Logo" />
          </NewCardContent>
        </NewCard>
      </NewCardContainer>

      <NewCardContainer>
        <NewCard>
          <img src={image19} style={{ width: '100%', height: 'auto' }} alt="Safeguarding Processes" />
          <NewCardContent>
            <Typography variant='h4' fontSize={'20px'} marginBottom={'20px'} color={'gray'}>
            What are your safeguarding responsibilities and how can you manage them?
            </Typography>
            <img src={Frame13} alt="OneRen Logo" />
          </NewCardContent>
        </NewCard>
      </NewCardContainer>

      <NewCardContainer>
        <NewCard>
          <img src={image20} style={{ width: '100%', height: 'auto' }} alt="Safeguarding Processes" />
          <NewCardContent>
            <Typography variant='h4' fontSize={'20px'} marginBottom={'20px'} color={'gray'}>
            Revamping the Membership Model with Triathlon Australia
            </Typography>
            <img src={Frame13} alt="OneRen Logo" />
          </NewCardContent>
        </NewCard>
      </NewCardContainer>
    </ResponsiveBox>
  );
}

export default NinthPage;
