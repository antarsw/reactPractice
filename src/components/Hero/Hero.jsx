import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, styled } from "@mui/material";
import { BsCalendarEvent } from "react-icons/bs";
import { motion } from "framer-motion";

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  position: "relative",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1
  }
}));

const ContentWrapper = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  color: "#fff",
  textAlign: "center",
  padding: theme.spacing(4),
}));

const AnimatedButton = styled(motion.div)(({ theme }) => ({
  display: "inline-block",
  margin: theme.spacing(1),
}));

const StyledButton = styled(Button)(({ theme, secondary }) => ({
  padding: `${theme.spacing(1.5)} ${theme.spacing(4)}`,
  borderRadius: theme.spacing(3),
  fontSize: "1.1rem",
  fontWeight: 600,
  textTransform: "none",
  boxShadow: secondary ? "none" : theme.shadows[4],
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: secondary ? "none" : theme.shadows[6],
  },
}));

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRegisterClick = () => {
    console.log("Register button clicked");
  };

  const handleAgendaClick = () => {
    console.log("View agenda clicked");
  };

  return (
    <HeroSection
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        backgroundImage: "url('https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      role="banner"
      aria-label="Tech Conference 2024 hero section"
    >
      <ContentWrapper maxWidth="lg">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 800,
              mb: 2,
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Unlock New Opportunities at TechCon 2024
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              fontWeight: 400,
              mb: 4,
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Join industry leaders and innovators for three days of inspiring keynotes,
            hands-on workshops, and unparalleled networking opportunities.
            Featured speakers include tech visionaries from Google, Amazon, and Microsoft.
          </Typography>

          <Box sx={{ mt: 4 }}>
            <AnimatedButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <StyledButton
                variant="contained"
                color="primary"
                onClick={handleRegisterClick}
                aria-label="Register now for the conference"
              >
                Register Now
              </StyledButton>
            </AnimatedButton>

            <AnimatedButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <StyledButton
                variant="outlined"
                color="inherit"
                onClick={handleAgendaClick}
                secondary
                startIcon={<BsCalendarEvent />}
                aria-label="View conference agenda"
              >
                View Agenda
              </StyledButton>
            </AnimatedButton>
          </Box>
        </motion.div>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero;