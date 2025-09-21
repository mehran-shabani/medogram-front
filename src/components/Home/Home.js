import React from 'react';
import {
    Container,
    Typography,
    Box,
    Grid,
    Card,
    CardContent,
    IconButton,
    Grow,
    Button,
    useTheme,
    useMediaQuery,
    Avatar,
    Chip
} from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import NextLink from 'next/link';
import {
    MedicalServices,
    LocalHospital,
    Medication,
    FaceRetouchingNatural,
    ImageSearch,
    TrendingUp,
    Security,
    Speed,
    SupportAgent,
    ArrowForward,
    PlayArrow
} from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { motion, useScroll, useTransform } from "framer-motion";
import { styled } from '@mui/system';

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
const InsuranceSlider = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
        height: '250px',
    },
    [theme.breakpoints.down('sm')]: {
        height: '200px',
    },
}));

const InsuranceCard = styled(motion.div)(({ theme }) => ({
    position: 'absolute',
    width: '320px',
    height: '220px',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    boxShadow: '0 12px 40px rgba(33, 150, 243, 0.15)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(4),
    cursor: 'pointer',
    textAlign: 'center',
    border: '2px solid rgba(33, 150, 243, 0.1)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    [theme.breakpoints.down('md')]: {
        width: '280px',
        height: '180px',
        padding: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
        width: '240px',
        height: '160px',
        padding: theme.spacing(2),
    },
    '&:hover': {
        transform: 'translateY(-8px) scale(1.02)',
        boxShadow: '0 20px 60px rgba(33, 150, 243, 0.25)',
        border: '2px solid rgba(33, 150, 243, 0.3)',
    },
}));

const InsuranceIcon = styled(Box)(({ theme }) => ({
    width: '70px',
    height: '70px',
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)',
    color: '#fff',
    boxShadow: '0 8px 24px rgba(33, 150, 243, 0.3)',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'scale(1.1) rotate(5deg)',
        boxShadow: '0 12px 32px rgba(33, 150, 243, 0.4)',
    },
}));

// Data
const serviceCards = [
    {
        id: 1,
        title: 'مشاوره آنلاین',
        icon: <MedicalServices sx={{ fontSize: 40 }} />,
        description: 'دریافت مشاوره پزشکی تخصصی با پزشکان مجرب',
        link: '/visits',
        color: '#2196f3',
    },
    {
        id: 2,
        title: 'تشخیص دیابت',
        icon: <LocalHospital sx={{ fontSize: 40 }} />,
        description: 'تشخیص دقیق و سریع دیابت با هوش مصنوعی',
        link: '/diabetes-prediction',
        color: '#00c853',
    },
    {
        id: 3,
        title: 'چت با هوش مصنوعی',
        icon: <Medication sx={{ fontSize: 40 }} />,
        description: 'چت و مشاوره آنلاین با دستیار هوشمند',
        link: '/chat',
        color: '#ff4081',
    },
    {
        id: 4,
        title: 'تمدید نسخه آنلاین',
        icon: <Medication sx={{ fontSize: 40 }} />,
        description: 'تمدید سریع و راحت نسخه آنلاین با کمترین قیمت دارو',
        link: '/visits',
        color: '#ff9800',
    },
    {
        id: 5,
        title: 'مشاوره زیبایی',
        icon: <FaceRetouchingNatural sx={{ fontSize: 40 }} />,
        description: 'مشاوره تخصصی در حوزه زیبایی و تناسب اندام',
        link: '/visits',
        color: '#e91e63',
    },
    {
        id: 6,
        title: 'استعلام قیمت دارو با بیمه',
        icon: <ImageSearch sx={{ fontSize: 40 }} />,
        description: 'استعلام قیمت دارو با بیمه و کاهش هزینه دارو',
        link: '/visits',
        color: '#9c27b0',
    },
    {
        id: 7,
        title: 'تفسیر و بررسی جواب آزمایشات',
        icon: <ImageSearch sx={{ fontSize: 40 }} />,
        description: 'بررسی دقیق نتایج آزمایشات و تصاویر پزشکی شما',
        link: '/visits',
        color: '#607d8b',
    },
];
const insuranceCompanies = [
    {
        name: 'بیمه تامین اجتماعی',
        icon: 'social-security',
        description: 'خدمات درمانی تحت پوشش بیمه تامین اجتماعی'
    },
    {
        name: 'بیمه سلامت روستایی',
        icon: 'rural-health',
        description: 'خدمات درمانی ویژه مناطق روستایی'
    },
    {
        name: 'بیمه سلامت شهری',
        icon: 'urban-health',
        description: 'خدمات درمانی ویژه مناطق شهری'
    },
    {
        name: 'بیمه نیروهای مسلح',
        icon: 'military-health',
        description: 'خدمات درمانی ویژه نیروهای مسلح و خانواده'
    },
    {
        name: 'بیمه شرکت‌های نفت و گاز',
        icon: 'oil-gas',
        description: 'خدمات درمانی کارکنان صنعت نفت و گاز'
    },
    {
        name: 'سایر بیمه‌ها',
        icon: 'other-insurance',
        description: 'هزینه سایر بیمه‌ها با ارائه فاکتور معتبر مدوگرام، قابل استرداد است'
    }
];

const InsuranceCarousel = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextCard = () => {
        setCurrentIndex((prev) => (prev + 1) % insuranceCompanies.length);
    };

    const prevCard = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? insuranceCompanies.length - 1 : prev - 1
        );
    };

    return (
        <InsuranceSlider>
            <IconButton
                onClick={prevCard}
                sx={{
                    position: 'absolute',
                    left: 20,
                    zIndex: 2,
                    width: 56,
                    height: 56,
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    border: '2px solid rgba(33, 150, 243, 0.1)',
                    '&:hover': {
                        background: 'rgba(33, 150, 243, 0.1)',
                        transform: 'scale(1.1)',
                        boxShadow: '0 12px 32px rgba(33, 150, 243, 0.2)',
                        border: '2px solid rgba(33, 150, 243, 0.3)',
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
            >
                <ChevronLeftIcon sx={{ color: '#2196F3', fontSize: 28 }} />
            </IconButton>

            {insuranceCompanies.map((company, index) => {
                const distance = Math.abs(currentIndex - index);
                const isActive = index === currentIndex;

                return (
                    <InsuranceCard
                        key={company.name}
                        animate={{
                            scale: isActive ? 1 : 0.8,
                            x: isActive ? 0 : (index < currentIndex ? -280 : 280),
                            rotateY: isActive ? 0 : (index < currentIndex ? 45 : -45),
                            opacity: distance <= 2 ? 1 - (distance * 0.3) : 0,
                            zIndex: isActive ? 1 : 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20
                        }}
                    >
                        <InsuranceIcon>
                            <LocalHospitalIcon sx={{ fontSize: 30 }} />
                        </InsuranceIcon>
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 1,
                                fontWeight: 'bold',
                                color: '#1976d2'
                            }}
                        >
                            {company.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#666',
                                fontSize: '0.9rem'
                            }}
                        >
                            {company.description}
                        </Typography>
                    </InsuranceCard>
                );
            })}

            <IconButton
                onClick={nextCard}
                sx={{
                    position: 'absolute',
                    right: 20,
                    zIndex: 2,
                    width: 56,
                    height: 56,
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    border: '2px solid rgba(33, 150, 243, 0.1)',
                    '&:hover': {
                        background: 'rgba(33, 150, 243, 0.1)',
                        transform: 'scale(1.1)',
                        boxShadow: '0 12px 32px rgba(33, 150, 243, 0.2)',
                        border: '2px solid rgba(33, 150, 243, 0.3)',
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
            >
                <ChevronRightIcon sx={{ color: '#2196F3', fontSize: 28 }} />
            </IconButton>
        </InsuranceSlider>
    );
};

// Hero Section Component
const HeroSection = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
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
        animation: 'float 20s ease-in-out infinite',
    },
    '@keyframes float': {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-20px)' },
    },
}));

const StatsSection = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    padding: theme.spacing(8, 0),
    borderRadius: '0 0 50px 50px',
}));

const FeatureCard = styled(motion.div)(({ theme }) => ({
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    padding: theme.spacing(4),
    textAlign: 'center',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    },
}));

const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    const stats = [
        { number: '10000+', label: 'بیمار راضی', icon: <TrendingUp /> },
        { number: '24/7', label: 'پشتیبانی', icon: <SupportAgent /> },
        { number: '100%', label: 'امنیت داده', icon: <Security /> },
        { number: '< 5 دقیقه', label: 'پاسخ سریع', icon: <Speed /> },
    ];

    return (
        <ThemeProvider theme={theme}>
            {/* Hero Section */}
            <HeroSection>
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Chip
                                    label="🚀 آینده پزشکی اینجاست"
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
                                    مدوگرام
                                    <Box component="span" sx={{ display: 'block', color: '#FFD700' }}>
                                        پزشکی هوشمند
                                    </Box>
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        mb: 4,
                                        fontWeight: 400,
                                        lineHeight: 1.6,
                                    }}
                                >
                                    تمدید نسخه آنلاین، استعلام قیمت دارو با بیمه و کاهش هزینه دارو. کمترین قیمت داروها را هر روزه پیدا می‌کنیم و نسخه‌ها را بر اساس آن می‌نویسیم
                                </Typography>
                                <Box sx={{ 
                                    display: 'flex', 
                                    gap: { xs: 1.5, md: 2 }, 
                                    flexWrap: 'wrap',
                                    justifyContent: { xs: 'center', md: 'flex-start' }
                                }}>
                                    <Button
                                        component={NextLink}
                                        href="/visits"
                                        variant="contained"
                                        size={isMobile ? "medium" : "large"}
                                        endIcon={<ArrowForward />}
                                        sx={{
                                            bgcolor: '#FFD700',
                                            color: '#333',
                                            fontWeight: 'bold',
                                            px: { xs: 3, md: 4 },
                                            py: { xs: 1.2, md: 1.5 },
                                            borderRadius: '50px',
                                            boxShadow: '0 8px 20px rgba(255, 215, 0, 0.4)',
                                            fontSize: { xs: '0.9rem', md: '1rem' },
                                            '&:hover': {
                                                bgcolor: '#FFC107',
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 12px 24px rgba(255, 215, 0, 0.5)',
                                            },
                                        }}
                                    >
                                        شروع ویزیت
                                    </Button>
                                    <Button
                                        component={NextLink}
                                        href="/chat"
                                        variant="outlined"
                                        size={isMobile ? "medium" : "large"}
                                        startIcon={<PlayArrow />}
                                        sx={{
                                            color: 'white',
                                            borderColor: 'rgba(255, 255, 255, 0.5)',
                                            px: { xs: 3, md: 4 },
                                            py: { xs: 1.2, md: 1.5 },
                                            borderRadius: '50px',
                                            backdropFilter: 'blur(10px)',
                                            fontSize: { xs: '0.9rem', md: '1rem' },
                                            '&:hover': {
                                                borderColor: 'white',
                                                bgcolor: 'rgba(255, 255, 255, 0.1)',
                                            },
                                        }}
                                    >
                                        دستیار هوشمند
                                    </Button>
                                </Box>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <motion.div
                                style={{ y }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            width: { xs: 200, md: 300 },
                                            height: { xs: 200, md: 300 },
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                            border: '4px solid rgba(255, 255, 255, 0.3)',
                                        }}
                                    >
                                        <LocalHospitalIcon sx={{ fontSize: { xs: 80, md: 120 }, color: 'white' }} />
                                    </Avatar>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </HeroSection>

            {/* Stats Section */}
            <StatsSection>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {stats.map((stat, index) => (
                            <Grid item xs={6} md={3} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Box
                                        sx={{
                                            textAlign: 'center',
                                            p: 3,
                                            background: 'rgba(255, 255, 255, 0.9)',
                                            borderRadius: '16px',
                                            backdropFilter: 'blur(10px)',
                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                                        }}
                                    >
                                        <Avatar
                                            sx={{
                                                bgcolor: theme.palette.primary.main,
                                                width: 56,
                                                height: 56,
                                                mx: 'auto',
                                                mb: 2,
                                            }}
                                        >
                                            {stat.icon}
                                        </Avatar>
                                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333', mb: 1 }}>
                                            {stat.number}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            {stat.label}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </StatsSection>

            {/* Services Section */}
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
                            خدمات ما
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                            مجموعه کاملی از خدمات پزشکی مدرن برای رفاه و سلامت شما
                        </Typography>
                    </Box>
                </motion.div>

                <Grid container spacing={4}>
                    {serviceCards.map((card, index) => (
                        <Grid item xs={12} sm={6} md={4} key={card.id}>
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
                                            bgcolor: `${card.color}15`,
                                            mx: 'auto',
                                            mb: 3,
                                            color: card.color,
                                            border: `3px solid ${card.color}30`,
                                        }}
                                    >
                                        {card.icon}
                                    </Avatar>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: card.color,
                                            mb: 2,
                                        }}
                                    >
                                        {card.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{ mb: 3, lineHeight: 1.7 }}
                                    >
                                        {card.description}
                                    </Typography>
                                    <Button
                                        component={NextLink}
                                        href={card.link}
                                        variant="contained"
                                        sx={{
                                            bgcolor: card.color,
                                            borderRadius: '25px',
                                            px: 3,
                                            '&:hover': {
                                                bgcolor: card.color,
                                                filter: 'brightness(0.9)',
                                            },
                                        }}
                                    >
                                        شروع کنید
                                    </Button>
                                </FeatureCard>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Testimonials Section */}
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
                        <Typography
                            variant="h4"
                            align="center"
                            sx={{
                                fontWeight: 'bold',
                                mb: 6,
                                color: 'white'
                            }}
                        >
                            نظرات بیماران ما
                        </Typography>
                        <Grid container spacing={4}>
                            {[
                                {
                                    name: 'آقای احمدی',
                                    text: 'خدمات مدوگرام فوق‌العاده است. دسترسی سریع به پزشک و کیفیت مشاوره بسیار عالی.',
                                    rating: 5,
                                    service: 'مشاوره آنلاین'
                                },
                                {
                                    name: 'خانم محمدی',
                                    text: 'هوش مصنوعی مدوگرام کمک زیادی به من کرد. پاسخ‌های دقیق و سریع دریافت کردم.',
                                    rating: 5,
                                    service: 'دستیار هوشمند'
                                },
                                {
                                    name: 'آقای رضایی',
                                    text: 'تشخیص دیابت با دقت بالا انجام شد. از سرعت و دقت سیستم بسیار راضی هستم.',
                                    rating: 5,
                                    service: 'تشخیص دیابت'
                                }
                            ].map((testimonial, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Box
                                            sx={{
                                                background: 'rgba(255, 255, 255, 0.1)',
                                                backdropFilter: 'blur(20px)',
                                                borderRadius: '20px',
                                                p: 4,
                                                textAlign: 'center',
                                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <Box>
                                                <Box sx={{ mb: 2 }}>
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <span key={i} style={{ color: '#FFD700', fontSize: '1.5rem' }}>★</span>
                                                    ))}
                                                </Box>
                                                <Typography 
                                                    variant="body1" 
                                                    sx={{ 
                                                        mb: 3,
                                                        fontStyle: 'italic',
                                                        lineHeight: 1.7
                                                    }}
                                                >
                                                    &ldquo;{testimonial.text}&rdquo;
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography 
                                                    variant="h6" 
                                                    sx={{ 
                                                        fontWeight: 'bold',
                                                        mb: 1
                                                    }}
                                                >
                                                    {testimonial.name}
                                                </Typography>
                                                <Chip 
                                                    label={testimonial.service}
                                                    sx={{
                                                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                                                        color: 'white',
                                                        fontWeight: 'bold'
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </Container>
            </Box>

            {/* Insurance Section */}
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
                            بیمه‌های طرف قرارداد مدوگرام
                        </Typography>
                        <InsuranceCarousel />
                    </motion.div>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default Home;