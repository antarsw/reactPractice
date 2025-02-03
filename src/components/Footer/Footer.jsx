import React, { useState } from "react";
import { Box, Container, Grid, Typography, TextField, Button, Stack, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const StyledFooter = styled(Box)(({ theme }) => ({
  background: "#1E1E1E",
  color: "#ffffff",
  padding: "64px 0 32px 0",
  boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.1)",
}));

const FooterColumn = styled(Box)(({ theme }) => ({
  "& h6": {
    fontWeight: 600,
    marginBottom: "24px",
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "-8px",
      left: 0,
      width: "40px",
      height: "2px",
      backgroundColor: "#64B5F6",
    },
  },
  "& ul": {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  "& li": {
    marginBottom: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      color: "#64b5f6",
      transform: "translateX(5px)",
    },
  },
}));
// backgroundColor: '#1E1E1E', color: '#FFFFFF'

const NewsletterBox = styled(Box)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "12px",
  padding: "24px",
  marginTop: "32px",
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: "#ffffff",
  margin: "0 8px",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#64b5f6",
    transform: "translateY(-3px)",
  },
}));

const GetStartedButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #ff6b6b 30%, #ff8e53 90%)",
  borderRadius: "25px",
  padding: "12px 32px",
  fontSize: "16px",
  fontWeight: 600,
  textTransform: "none",
  boxShadow: "0 3px 15px rgba(255, 107, 107, 0.3)",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 5px 20px rgba(255, 107, 107, 0.4)",
  },
}));

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed with email:", email);
      setEmail("");
    }
  };

  return (
    <StyledFooter component="footer" role="contentinfo">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <FooterColumn>
              <Typography variant="h6">Company Overview</Typography>
              <ul>
                <li>About Us</li>
                <li>Our Mission</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </FooterColumn>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <FooterColumn>
              <Typography variant="h6">Product Features</Typography>
              <ul>
                <li>Solutions</li>
                <li>Technology</li>
                <li>Integrations</li>
                <li>Pricing</li>
                <li>API</li>
              </ul>
            </FooterColumn>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <FooterColumn>
              <Typography variant="h6">Support & FAQ</Typography>
              <ul>
                <li>Help Center</li>
                <li>Documentation</li>
                <li>Community</li>
                <li>Resources</li>
                <li>Updates</li>
              </ul>
            </FooterColumn>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <FooterColumn>
              <Typography variant="h6">Partners</Typography>
              <ul>
                <li>Marketplace</li>
                <li>Developers</li>
                <li>Affiliates</li>
                <li>Partners Portal</li>
                <li>Success Stories</li>
              </ul>
            </FooterColumn>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <FooterColumn>
              <Typography variant="h6">Legal Information</Typography>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>Security</li>
                <li>Compliance</li>
              </ul>
            </FooterColumn>
          </Grid>
        </Grid>

        <NewsletterBox>
          <Typography variant="h6" gutterBottom>
            Subscribe to Our Newsletter
          </Typography>
          <form onSubmit={handleSubscribe}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.5)",
                    },
                  },
                }}
                inputProps={{
                  "aria-label": "Subscribe to newsletter",
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: "#64b5f6",
                  "&:hover": {
                    background: "#1e88e5",
                  },
                }}
              >
                Subscribe
              </Button>
            </Stack>
          </form>
        </NewsletterBox>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <GetStartedButton variant="contained" color="primary">
            Get Started Today
          </GetStartedButton>

          <Box sx={{ mt: 4 }}>
            <SocialButton aria-label="Facebook">
              <FaFacebook size={24} />
            </SocialButton>
            <SocialButton aria-label="Twitter">
              <FaTwitter size={24} />
            </SocialButton>
            <SocialButton aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </SocialButton>
            <SocialButton aria-label="Instagram">
              <FaInstagram size={24} />
            </SocialButton>
            <SocialButton aria-label="YouTube">
              <FaYoutube size={24} />
            </SocialButton>
          </Box>

          <Typography variant="body2" sx={{ mt: 3, opacity: 0.7 }}>
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;