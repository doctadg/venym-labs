"use client";

import React, { useState, useRef } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper, useTheme } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

// Contact info item component
interface ContactInfoItemProps {
  icon: string;
  title: string;
  content: React.ReactNode;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, content }) => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        display: 'flex',
        mb: 4,
      }}
    >
      <Box
        sx={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: `${theme.palette.primary.main}22`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mr: 2,
          flexShrink: 0,
        }}
      >
        <Box
          component="svg"
          viewBox="0 0 24 24"
          sx={{
            width: '24px',
            height: '24px',
            fill: theme.palette.primary.main,
          }}
        >
          <path d={icon} />
        </Box>
      </Box>
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 0.5,
            color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.primary.dark,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : 'rgba(0, 0, 0, 0.7)',
          }}
        >
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

const Contact = () => {
  const theme = useTheme();
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 });
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
  };
  
  // Contact info icons (simple SVG paths)
  const icons = {
    location: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
    phone: "M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z",
    email: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
  };
  
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.mode === 'dark'
          ? theme.palette.background.default
          : `linear-gradient(to bottom right, ${theme.palette.primary.light}11, ${theme.palette.secondary.main}22)`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          ref={titleRef}
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          sx={{ mb: 8, textAlign: 'center' }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}
          >
            <FormattedMessage id="contact.title" />
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: '700px',
              mx: 'auto',
              color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : 'rgba(0, 0, 0, 0.7)',
            }}
          >
            <FormattedMessage id="contact.subtitle" />
          </Typography>
        </Box>
        
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: '16px',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                  backgroundColor: theme.palette.mode === 'dark' 
                    ? theme.palette.background.paper 
                    : `rgba(40, 183, 21, 0.05)`,
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 4,
                    color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.primary.dark,
                  }}
                >
                  Get in Touch
                </Typography>
                
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label={<FormattedMessage id="contact.name" />}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                            backgroundColor: theme.palette.mode === 'dark' 
                              ? 'rgba(255, 255, 255, 0.05)' 
                              : 'rgba(40, 183, 21, 0.03)',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label={<FormattedMessage id="contact.email" />}
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                            backgroundColor: theme.palette.mode === 'dark' 
                              ? 'rgba(255, 255, 255, 0.05)' 
                              : 'rgba(40, 183, 21, 0.03)',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label={<FormattedMessage id="contact.message" />}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                            backgroundColor: theme.palette.mode === 'dark' 
                              ? 'rgba(255, 255, 255, 0.05)' 
                              : 'rgba(40, 183, 21, 0.03)',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        component={motion.button}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        sx={{
                          borderRadius: '50px',
                          py: 1.5,
                          px: 4,
                          fontWeight: 600,
                          boxShadow: '0 8px 16px rgba(40, 183, 21, 0.2)',
                        }}
                      >
                        <FormattedMessage id="contact.submit" />
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
          
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  pl: { md: 4 },
                }}
              >
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 4,
                    color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.primary.dark,
                  }}
                >
                  Contact Information
                </Typography>
                
                <ContactInfoItem
                  icon={icons.location}
                  title="Address"
                  content={<FormattedMessage id="contact.address" />}
                />
                
                <ContactInfoItem
                  icon={icons.phone}
                  title="Phone"
                  content={<FormattedMessage id="contact.phone" />}
                />
                
                <ContactInfoItem
                  icon={icons.email}
                  title="Email"
                  content={<FormattedMessage id="contact.email" />}
                />
                
                <Box
                  sx={{
                    mt: 4,
                    p: 3,
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}22, ${theme.palette.primary.light}33)`,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.primary.dark,
                    }}
                  >
                    Want to see a demo?
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 3,
                      color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : 'rgba(0, 0, 0, 0.7)',
                    }}
                  >
                    Schedule a personalized demo with our product specialists to see how our AI agents can transform your business.
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    component={motion.button}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    sx={{
                      borderRadius: '50px',
                      py: 1,
                      px: 3,
                      fontWeight: 600,
                    }}
                  >
                    <FormattedMessage id="contact.requestDemo" />
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
