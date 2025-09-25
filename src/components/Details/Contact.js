import React from 'react';
import { Typography, Button, Paper, Divider, Chip } from '@mui/material';
import { Box } from '@mui/system';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const Contact = () => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: { xs: '1rem', sm: '2rem', md: '3rem' },
            backgroundColor: '#f5f5f5'
        }}>
            <Paper elevation={3} sx={{
                p: { xs: '1.5rem', sm: '2.5rem', md: '3.5rem' },
                borderRadius: '20px',
                backgroundColor: '#ffffff',
                width: { xs: '95%', sm: '80%', md: '70%', lg: '60%' },
                maxWidth: '700px',
                border: '3px solid',
                borderImageSlice: 1,
                borderImageSource: 'linear-gradient(to right, #2196F3, #21CBF3)',
            }}>
                <Typography variant="h3" sx={{ color: '#0056b3', fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
                    تماس با ما
                </Typography>

                <Divider sx={{ mb: 3 }}>
                    <Chip label="مدوگرام" color="primary" />
                </Divider>

                <Typography variant="h6" sx={{ fontSize: '1.2rem', color: '#333', textAlign: 'center', mb: 4 }}>
                    برای دریافت اطلاعات بیشتر در مورد خدمات پزشکی مدوگرام، با ما در ارتباط باشید
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', mb: 4 }}>
                    <Button
                        variant="contained"
                        startIcon={<PhoneIcon />}
                        href="tel:09961733668"
                        sx={{
                            justifyContent: 'flex-start',
                            backgroundColor: '#4CAF50',
                            '&:hover': { backgroundColor: '#45a049' },
                            height: '50px',
                            fontSize: '1.1rem'
                        }}
                    >
                        0996-173-3668
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<EmailIcon />}
                        href="mailto:info@medogram.ir"
                        sx={{
                            justifyContent: 'flex-start',
                            backgroundColor: '#FF9800',
                            '&:hover': { backgroundColor: '#F57C00' },
                            height: '50px',
                            fontSize: '1.1rem'
                        }}
                    >
                        info@medogram.ir
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<TelegramIcon />}
                        href="https://t.me/medogram3018"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            justifyContent: 'flex-start',
                            backgroundColor: '#2196F3',
                            '&:hover': { backgroundColor: '#1976D2' },
                            height: '50px',
                            fontSize: '1.1rem'
                        }}
                    >
                        @medogram
                    </Button>
                </Box>

                <Divider sx={{ mb: 3 }} />

                <Typography variant="body1" sx={{ fontSize: '1rem', color: '#666', textAlign: 'center' }}>
                    برای ارتباط سریع، می‌توانید از طریق تلگرام با ما در تماس باشید. پشتیبانی ما 24/7 آماده پاسخگویی به شما است.
                </Typography>
            </Paper>
        </Box>
    );
};

export default Contact;