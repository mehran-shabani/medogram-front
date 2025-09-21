'use client';

import React from 'react';
import {
    Container,
    Typography,
    Box,
    Grid,
    Card,
    CardContent,
    Button,
    useTheme,
    useMediaQuery,
    Avatar,
    Chip,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import NextLink from 'next/link';
import {
    Medication,
    LocalHospital,
    TrendingDown,
    Security,
    Speed,
    SupportAgent,
    CheckCircle,
    AttachMoney,
    HealthAndSafety,
    Search,
    Phone,
    Email
} from '@mui/icons-material';
import { motion } from "framer-motion";
import { styled } from '@mui/system';
import Head from 'next/head';

// Theme Configuration
let theme = createTheme({
    palette: {
        primary: {
            main: '#2196f3',
            light: '#4dabf5',
            dark: '#1769aa',
        },
        secondary: {
            main: '#00c853',
            light: '#69f0ae',
            dark: '#00a839',
        },
    },
    typography: {
        fontFamily: 'IRANSans, Arial',
        h2: {
            fontWeight: 700,
        },
        h5: {
            fontWeight: 500,
        },
    },
});

theme = responsiveFontSizes(theme);

// Styled Components
const HeroSection = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: theme.spacing(8, 0),
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    },
}));

const FeatureCard = styled(motion.div)(({ theme }) => ({
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    padding: theme.spacing(4),
    textAlign: 'center',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    height: '100%',
    '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    },
}));

const PricingCard = styled(Card)(({ theme }) => ({
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    borderRadius: '20px',
    padding: theme.spacing(3),
    textAlign: 'center',
    border: '2px solid rgba(33, 150, 243, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 15px 35px rgba(33, 150, 243, 0.2)',
        border: '2px solid rgba(33, 150, 243, 0.3)',
    },
}));

export default function DrugPricingPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const features = [
        {
            icon: <TrendingDown sx={{ fontSize: 40 }} />,
            title: 'کمترین قیمت دارو',
            description: 'هر روزه کمترین قیمت داروها را پیدا می‌کنیم و نسخه‌ها را بر اساس آن می‌نویسیم'
        },
        {
            icon: <Search sx={{ fontSize: 40 }} />,
            title: 'استعلام قیمت دارو با بیمه',
            description: 'قیمت داروها را با بیمه‌های مختلف استعلام کنید و بهترین قیمت را انتخاب کنید'
        },
        {
            icon: <AttachMoney sx={{ fontSize: 40 }} />,
            title: 'کاهش هزینه دارو',
            description: 'با استفاده از بیمه و مقایسه قیمت‌ها، هزینه داروهای خود را کاهش دهید'
        },
        {
            icon: <Security sx={{ fontSize: 40 }} />,
            title: 'امنیت اطلاعات',
            description: 'اطلاعات بیمه و نسخه شما با بالاترین سطح امنیت محافظت می‌شود'
        }
    ];

    const insuranceTypes = [
        'بیمه تامین اجتماعی',
        'بیمه سلامت روستایی',
        'بیمه سلامت شهری',
        'بیمه نیروهای مسلح',
        'بیمه شرکت‌های نفت و گاز',
        'سایر بیمه‌ها'
    ];

    const benefits = [
        'مقایسه قیمت داروها در داروخانه‌های مختلف',
        'استعلام قیمت با بیمه‌های مختلف',
        'تمدید نسخه آنلاین با کمترین قیمت',
        'پشتیبانی ۲۴ ساعته',
        'ارسال رایگان دارو',
        'ضمانت کیفیت داروها'
    ];

    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>استعلام قیمت دارو با بیمه | کاهش هزینه دارو | مدوگرام</title>
                <meta name="description" content="استعلام قیمت دارو با بیمه، کاهش هزینه دارو، کمترین قیمت داروها را هر روزه پیدا می‌کنیم و نسخه‌ها را بر اساس آن می‌نویسیم" />
                <meta name="keywords" content="استعلام قیمت دارو با بیمه، کاهش هزینه دارو، کمترین قیمت دارو، قیمت دارو، بیمه درمانی، داروخانه آنلاین" />
            </Head>

            {/* Hero Section */}
            <HeroSection>
                <Container maxWidth="lg">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Box textAlign="center" sx={{ mb: 6 }}>
                            <Chip
                                label="💰 صرفه‌جویی در هزینه دارو"
                                sx={{
                                    mb: 3,
                                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: '0.9rem',
                                    backdropFilter: 'blur(10px)',
                                }}
                            />
                            <Typography
                                variant={isMobile ? 'h3' : 'h1'}
                                sx={{
                                    fontWeight: 800,
                                    color: 'white',
                                    mb: 3,
                                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                                    lineHeight: 1.2,
                                }}
                            >
                                استعلام قیمت دارو با بیمه
                                <Box component="span" sx={{ display: 'block', color: '#FFD700' }}>
                                    کاهش هزینه دارو
                                </Box>
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    mb: 4,
                                    fontWeight: 400,
                                    lineHeight: 1.6,
                                    maxWidth: 800,
                                    mx: 'auto'
                                }}
                            >
                                کمترین قیمت داروها را هر روزه پیدا می‌کنیم و نسخه‌ها را بر اساس آن می‌نویسیم. 
                                استعلام قیمت دارو با بیمه و کاهش هزینه دارو با مدوگرام
                            </Typography>
                            <Button
                                component={NextLink}
                                href="/visits"
                                variant="contained"
                                size="large"
                                sx={{
                                    bgcolor: '#FFD700',
                                    color: '#333',
                                    fontWeight: 'bold',
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: '50px',
                                    boxShadow: '0 8px 20px rgba(255, 215, 0, 0.4)',
                                    fontSize: '1.1rem',
                                    '&:hover': {
                                        bgcolor: '#FFC107',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 12px 24px rgba(255, 215, 0, 0.5)',
                                    },
                                }}
                            >
                                شروع استعلام قیمت
                            </Button>
                        </Box>
                    </motion.div>
                </Container>
            </HeroSection>

            {/* Features Section */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Box textAlign="center" sx={{ mb: 8 }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 800,
                                background: 'linear-gradient(45deg, #2196f3, #00c853)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                mb: 2,
                            }}
                        >
                            چرا مدوگرام؟
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                            بهترین راه برای کاهش هزینه دارو و استعلام قیمت با بیمه
                        </Typography>
                    </Box>
                </motion.div>

                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                <FeatureCard>
                                    <Avatar
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            bgcolor: '#2196f315',
                                            mx: 'auto',
                                            mb: 3,
                                            color: '#2196f3',
                                            border: '3px solid #2196f330',
                                        }}
                                    >
                                        {feature.icon}
                                    </Avatar>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#1976d2',
                                            mb: 2,
                                        }}
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{ lineHeight: 1.7 }}
                                    >
                                        {feature.description}
                                    </Typography>
                                </FeatureCard>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Insurance Types Section */}
            <Box sx={{ bgcolor: '#f8f9fa', py: 8 }}>
                <Container maxWidth="lg">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Typography
                            variant="h4"
                            align="center"
                            sx={{
                                fontWeight: 'bold',
                                color: '#1976d2',
                                mb: 6,
                            }}
                        >
                            بیمه‌های طرف قرارداد
                        </Typography>
                        <Grid container spacing={3}>
                            {insuranceTypes.map((insurance, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <PricingCard>
                                            <Avatar
                                                sx={{
                                                    bgcolor: '#2196f3',
                                                    width: 60,
                                                    height: 60,
                                                    mx: 'auto',
                                                    mb: 2,
                                                }}
                                            >
                                                <HealthAndSafety sx={{ fontSize: 30 }} />
                                            </Avatar>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    color: '#1976d2',
                                                    mb: 1,
                                                }}
                                            >
                                                {insurance}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                استعلام قیمت دارو با این بیمه
                                            </Typography>
                                        </PricingCard>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </Container>
            </Box>

            {/* Benefits Section */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#1976d2',
                                    mb: 4,
                                }}
                            >
                                مزایای استفاده از مدوگرام
                            </Typography>
                            <List>
                                {benefits.map((benefit, index) => (
                                    <ListItem key={index} sx={{ px: 0 }}>
                                        <ListItemIcon>
                                            <CheckCircle sx={{ color: '#00c853' }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={benefit}
                                            primaryTypographyProps={{
                                                variant: 'body1',
                                                fontWeight: 500
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Box
                                sx={{
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    borderRadius: '20px',
                                    p: 4,
                                    color: 'white',
                                    textAlign: 'center',
                                }}
                            >
                                <Avatar
                                    sx={{
                                        width: 100,
                                        height: 100,
                                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                                        mx: 'auto',
                                        mb: 3,
                                    }}
                                >
                                    <Medication sx={{ fontSize: 50 }} />
                                </Avatar>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    شروع کنید
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                                    همین حالا قیمت داروهای خود را استعلام کنید
                                </Typography>
                                <Button
                                    component={NextLink}
                                    href="/visits"
                                    variant="contained"
                                    sx={{
                                        bgcolor: '#FFD700',
                                        color: '#333',
                                        fontWeight: 'bold',
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: '25px',
                                        '&:hover': {
                                            bgcolor: '#FFC107',
                                        },
                                    }}
                                >
                                    استعلام قیمت دارو
                                </Button>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>

            {/* CTA Section */}
            <Box sx={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                py: 8,
                color: 'white'
            }}>
                <Container maxWidth="lg">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Box textAlign="center">
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 'bold',
                                    mb: 3,
                                    color: 'white'
                                }}
                            >
                                آماده کاهش هزینه دارو هستید؟
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 4,
                                    opacity: 0.9,
                                    maxWidth: 600,
                                    mx: 'auto'
                                }}
                            >
                                با مدوگرام، کمترین قیمت داروها را پیدا کنید و نسخه‌های خود را با بهترین قیمت تمدید کنید
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Button
                                    component={NextLink}
                                    href="/visits"
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        bgcolor: '#FFD700',
                                        color: '#333',
                                        fontWeight: 'bold',
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: '50px',
                                        '&:hover': {
                                            bgcolor: '#FFC107',
                                        },
                                    }}
                                >
                                    شروع ویزیت
                                </Button>
                                <Button
                                    component={NextLink}
                                    href="/contact"
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        color: 'white',
                                        borderColor: 'rgba(255, 255, 255, 0.5)',
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: '50px',
                                        '&:hover': {
                                            borderColor: 'white',
                                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                                        },
                                    }}
                                >
                                    تماس با ما
                                </Button>
                            </Box>
                        </Box>
                    </motion.div>
                </Container>
            </Box>
        </ThemeProvider>
    );
}