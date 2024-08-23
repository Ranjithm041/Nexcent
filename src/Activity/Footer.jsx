import React from "react";
import styled from "styled-components";
import { Instagram, Twitter, YouTube, Send } from "@mui/icons-material";
import { TextField, IconButton } from "@mui/material";
import Logonexw from "../Activity/Images/Logonexw.png";

const FooterContainer = styled.footer`
  background-color: #2d3a45;
  color: #fff;
  padding: 40px 20px;
  font-family: 'Inter', sans-serif;
  margin-top: 30px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LogoSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 20px; /* Add margin-bottom for spacing on small screens */

  @media (max-width: 768px) {
    order: 1; /* Ensure this section stays at the top */
  }
`;

const FooterTitle = styled.h6`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 550;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const FooterText = styled.p`
  color: #999;
  font-size: 14px;
`;

const FooterLinks = styled.div`
  flex: 1;
  min-width: 120px;
  font-weight: 300;
  margin-bottom: 20px; /* Add margin-bottom for spacing on small screens */

  @media (max-width: 768px) {
    order: 2;
  }
`;

const FooterLink = styled.a`
  display: block;
  color: #fff;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  margin-top: 20px;
  & > * {
    color: #fff !important;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const EmailSection = styled.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 20px; /* Add margin-bottom for spacing on small screens */

  @media (max-width: 768px) {
    order: 3;
  }
`;

const EmailInputContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CustomTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    background-color: #3b4a56;
    border-radius: 5px;
    & fieldset {
      border-color: #5e6c78;
    }
    input {
      color: #fff;
    }
  }
  flex-grow: 1;
`;

const CustomIconButton = styled(IconButton)`
  margin-left: 10px;
  background-color: #5e6c78;
  &:hover {
    background-color: #4a5561;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoSection>
          <FooterTitle>
            <img src={Logonexw} alt="Logo" style={{ marginRight: "10px" }} />
          </FooterTitle>
          <FooterText>
            Copyright © 2020 Nexcent ltd.
            <br />
            All rights reserved
          </FooterText>
          <SocialIcons>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
            <IconButton>
              <YouTube />
            </IconButton>
          </SocialIcons>
        </LogoSection>

        <FooterLinks>
          <FooterTitle>Company</FooterTitle>
          <FooterLink href="#">About us</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">Contact us</FooterLink>
          <FooterLink href="#">Pricing</FooterLink>
          <FooterLink href="#">Testimonials</FooterLink>
        </FooterLinks>

        <FooterLinks>
          <FooterTitle>Support</FooterTitle>
          <FooterLink href="#">Help center</FooterLink>
          <FooterLink href="#">Terms of service</FooterLink>
          <FooterLink href="#">Legal</FooterLink>
          <FooterLink href="#">Privacy policy</FooterLink>
          <FooterLink href="#">Status</FooterLink>
        </FooterLinks>

        <EmailSection>
          <FooterTitle>Stay up to date</FooterTitle>
          <EmailInputContainer>
            <CustomTextField variant="outlined" placeholder="Your email address" />
            <CustomIconButton>
              <Send style={{ color: "#fff" }} />
            </CustomIconButton>
          </EmailInputContainer>
        </EmailSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
