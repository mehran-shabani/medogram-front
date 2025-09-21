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
    Chip,
    Avatar,
    Paper,
    Stack,
    Divider,
} from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import NextLink from 'next/link';
import {
    MedicalServices,
    LocalHospital,
    Medication,
    FaceRetouchingNatural,
    ImageSearch,
    ArrowForward,
    Star,
    AccessTime,
    Security,
    Support,
    Verified,
    TrendingUp,
    People,
    CheckCircle,
} from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { motion } from "framer-motion";
import { styled } from '@mui/system';

// Theme Configuration
let theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
            light: '#42a5f5',
            dark: '#1565c0',
        },
        secondary: {
            main: '#00c853',
            light: '#69f0ae',
            dark: '#00a839',
        },
        background: {
            default: '#f8f9fa',
            paper: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'IRANSans, Arial, sans-serif',
        h1: {
            fontWeight: 800,
            fontSize: '3.5rem',
        },
        h2: {
            fontWeight: 700,
            fontSize: '2.5rem',
        },
        h3: {
            fontWeight: 600,
            fontSize: '2rem',
        },
        h4: {
            fontWeight: 600,
            fontSize: '1.5rem',
        },
        h5: {
            fontWeight: 500,
            fontSize: '1.25rem',
        },
        h6: {
            fontWeight: 500,
            fontSize: '1rem',
        },
    },
    shape: {
        borderRadius: 16,
    },
    shadows: [
        'none',
        '0px 2px 4px rgba(0,0,0,0.1)',
        '0px 4px 8px rgba(0,0,0,0.1)',
        '0px 8px 16px rgba(0,0,0,0.1)',
        '0px 12px 24px rgba(0,0,0,0.15)',
        '0px 16px 32px rgba(0,0,0,0.15)',
    ],
});

theme = responsiveFontSizes(theme);

// Styled Components
const HeroSection = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '80vh',
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
        background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.3,
    },
}));

const HeroContent = styled(Box)(({ theme }) => ({
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: 'white',
    padding: theme.spacing(4),
}));

const FeatureCard = styled(motion.div)(({ theme }) => ({
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(3),
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
}));

const StatsContainer = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    borderRadius: theme.spacing(3),
    padding: theme.spacing(4),
    margin: theme.spacing(4, 0),
}));

const InsuranceSlider = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '350px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(4),
}));

const InsuranceCard = styled(motion.div)(({ theme }) => ({
    position: 'absolute',
    width: '320px',
    height: '220px',
    background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
    borderRadius: theme.spacing(3),
    boxShadow: '0 12px 32px rgba(25, 118, 210, 0.15)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(4),
    cursor: 'pointer',
    textAlign: 'center',
    border: '2px solid rgba(25, 118, 210, 0.1)',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
}));

const InsuranceIcon = styled(Box)(({ theme }) => ({
    width: '70px',
    height: '70px',
    marginBottom: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
    color: '#fff',
    boxShadow: '0 8px 20px rgba(25, 118, 210, 0.3)',
    transition: 'all 0.3s ease',
}));

// Data
const serviceCards = [
    {
        id: 1,
        title: 'مشاوره آنلاین',
        icon: <MedicalServices sx={{ fontSize: 40 }} />,
        description: 'دریافت مشاوره پزشکی تخصصی با پزشکان مجرب و متخصص',
        link: '/visits',
        color: '#1976d2',
        features: ['پزشکان متخصص', '۲۴ ساعته', 'کیفیت بالا'],
    },
    {
        id: 2,
        title: 'تشخیص دیابت',
        icon: <LocalHospital sx={{ fontSize: 40 }} />,
        description: 'تشخیص دقیق و سریع دیابت با استفاده از هوش مصنوعی پیشرفته',
        link: '/diabetes-prediction',
        color: '#00c853',
        features: ['هوش مصنوعی', 'دقت بالا', 'سریع'],
    },
    {
        id: 3,
        title: 'چت با هوش مصنوعی',
        icon: <Medication sx={{ fontSize: 40 }} />,
        description: 'چت و مشاوره آنلاین با دستیار هوشمند پزشکی',
        link: '/chat',
        color: '#ff4081',
        features: ['هوش مصنوعی', 'پاسخ فوری', 'رایگان'],
    },
    {
        id: 4,
        title: 'تمدید نسخ دارویی',
        icon: <Medication sx={{ fontSize: 40 }} />,
        description: 'تمدید سریع و راحت نسخ دارویی شما بدون مراجعه حضوری',
        link: '/visits',
        color: '#ff9800',
        features: ['سریع', 'راحت', 'آنلاین'],
    },
    {
        id: 5,
        title: 'مشاوره زیبایی',
        icon: <FaceRetouchingNatural sx={{ fontSize: 40 }} />,
        description: 'مشاوره تخصصی در حوزه زیبایی و تناسب اندام',
        link: '/visits',
        color: '#e91e63',
        features: ['متخصص زیبایی', 'مشاوره رایگان', 'کیفیت بالا'],
    },
    {
        id: 6,
        title: 'تفسیر آزمایشات',
        icon: <ImageSearch sx={{ fontSize: 40 }} />,
        description: 'بررسی دقیق نتایج آزمایشات و تصاویر پزشکی شما',
        link: '/visits',
        color: '#9c27b0',
        features: ['دقت بالا', 'متخصص', 'سریع'],
    },
];

const features = [
    {
        icon: <AccessTime sx={{ fontSize: 40, color: '#1976d2' }} />,
        title: 'دسترسی ۲۴ ساعته',
        description: 'در تمام ساعات شبانه‌روز به خدمات پزشکی دسترسی داشته باشید',
    },
    {
        icon: <Security sx={{ fontSize: 40, color: '#00c853' }} />,
        title: 'امنیت اطلاعات',
        description: 'اطلاعات پزشکی شما با بالاترین استانداردهای امنیتی محافظت می‌شود',
    },
    {
        icon: <Support sx={{ fontSize: 40, color: '#ff9800' }} />,
        title: 'پشتیبانی حرفه‌ای',
        description: 'تیم پشتیبانی متخصص در تمام مراحل همراه شماست',
    },
    {
        icon: <Verified sx={{ fontSize: 40, color: '#e91e63' }} />,
        title: 'پزشکان تایید شده',
        description: 'تمام پزشکان دارای مجوز و تاییدیه از مراجع معتبر هستند',
    },
];

const stats = [
    { number: '۱۰۰۰۰+', label: 'بیمار راضی', icon: <People /> },
    { number: '۵۰۰+', label: 'پزشک متخصص', icon: <MedicalServices /> },
    { number: '۹۹%', label: 'رضایت بیماران', icon: <Star /> },
    { number: '۲۴/۷', label: 'پشتیبانی', icon: <Support /> },
];

const testimonials = [
    {
        name: 'احمد محمدی',
        role: 'بیمار',
        content: 'خدمات مدوگرام واقعاً عالی است. پزشکان بسیار حرفه‌ای و پاسخگو هستند.',
        rating: 5,
        avatar: 'A',
    },
    {
        name: 'فاطمه احمدی',
        role: 'بیمار',
        content: 'تشخیص دیابت با هوش مصنوعی بسیار دقیق بود. پیشنهاد می‌کنم.',
        rating: 5,
        avatar: 'ف',
    },
    {
        name: 'علی رضایی',
        role: 'بیمار',
        content: 'مشاوره آنلاین بسیار مفید بود. وقت و هزینه زیادی صرفه‌جویی کردم.',
        rating: 5,
        avatar: 'ع',
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

    // Auto-advance carousel
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % insuranceCompanies.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <InsuranceSlider>
            <IconButton
                onClick={prevCard}
                sx={{
                    position: 'absolute',
                    left: 20,
                    zIndex: 2,
                    background: 'rgba(255,255,255,0.95)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                    width: 50,
                    height: 50,
                    '&:hover': {
                        background: 'rgba(255,255,255,1)',
                        transform: 'scale(1.1)',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
                    },
                    transition: 'all 0.3s ease',
                }}
            >
                <ChevronLeftIcon sx={{ fontSize: 28 }} />
            </IconButton>

            {insuranceCompanies.map((company, index) => {
                const distance = Math.abs(currentIndex - index);
                const isActive = index === currentIndex;

                return (
                    <InsuranceCard
                        key={company.name}
                        animate={{
                            scale: isActive ? 1 : 0.85,
                            x: isActive ? 0 : (index < currentIndex ? -300 : 300),
                            rotateY: isActive ? 0 : (index < currentIndex ? 15 : -15),
                            opacity: distance <= 2 ? 1 - (distance * 0.2) : 0,
                            zIndex: isActive ? 1 : 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20
                        }}
                        whileHover={{
                            scale: isActive ? 1.05 : 0.9,
                            y: isActive ? -5 : 0,
                        }}
                    >
                        <InsuranceIcon>
                            <LocalHospitalIcon sx={{ fontSize: 35 }} />
                        </InsuranceIcon>
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 2,
                                fontWeight: 'bold',
                                color: '#1976d2',
                                fontSize: '1.1rem',
                            }}
                        >
                            {company.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#666',
                                fontSize: '0.95rem',
                                lineHeight: 1.5,
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
                    background: 'rgba(255,255,255,0.95)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                    width: 50,
                    height: 50,
                    '&:hover': {
                        background: 'rgba(255,255,255,1)',
                        transform: 'scale(1.1)',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
                    },
                    transition: 'all 0.3s ease',
                }}
            >
                <ChevronRightIcon sx={{ fontSize: 28 }} />
            </IconButton>

            {/* Dots indicator */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: -40,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 1,
                }}
            >
                {insuranceCompanies.map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            background: index === currentIndex ? '#1976d2' : '#e0e0e0',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: index === currentIndex ? '#1565c0' : '#bdbdbd',
                                transform: 'scale(1.2)',
                            },
                        }}
                    />
                ))}
            </Box>
        </InsuranceSlider>
    );
};

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            {/* Hero Section */}
            <HeroSection>
                <Container maxWidth="lg">
                    <HeroContent>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    mb: 3,
                                    fontWeight: 800,
                                    background: 'linear-gradient(45deg, #ffffff, #e3f2fd)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                }}
                            >
                                مدوگرام
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    mb: 4,
                                    fontWeight: 500,
                                    opacity: 0.9,
                                }}
                            >
                                دسترسی آسان به خدمات پزشکی نوین
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 6,
                                    opacity: 0.8,
                                    maxWidth: '600px',
                                    margin: '0 auto 3rem auto',
                                    lineHeight: 1.6,
                                }}
                            >
                                با مدوگرام، خدمات پزشکی حرفه‌ای را در هر زمان و مکان دریافت کنید. 
                                مشاوره آنلاین، تشخیص هوشمند و مراقبت‌های پزشکی پیشرفته در دسترس شماست.
                            </Typography>
                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={3}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Button
                                    component={NextLink}
                                    href="/visits"
                                    variant="contained"
                                    size="large"
                                    endIcon={<ArrowForward />}
                                    sx={{
                                        background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                                        borderRadius: 3,
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        boxShadow: '0 8px 24px rgba(25, 118, 210, 0.3)',
                                        '&:hover': {
                                            background: 'linear-gradient(45deg, #1565c0, #1976d2)',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 12px 32px rgba(25, 118, 210, 0.4)',
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    شروع مشاوره
                                </Button>
                                <Button
                                    component={NextLink}
                                    href="/diabetes-prediction"
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        borderColor: 'rgba(255, 255, 255, 0.5)',
                                        color: 'white',
                                        borderRadius: 3,
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        backdropFilter: 'blur(10px)',
                                        '&:hover': {
                                            borderColor: 'white',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            transform: 'translateY(-2px)',
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    تشخیص دیابت
                                </Button>
                            </Stack>
                        </motion.div>
                    </HeroContent>
                </Container>
            </HeroSection>

            {/* Stats Section */}
            <Container maxWidth="lg" sx={{ mt: -4, mb: 8 }}>
                <StatsContainer>
                    <Grid container spacing={4}>
                        {stats.map((stat, index) => (
                            <Grid item xs={6} md={3} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <Box textAlign="center">
                                        <Avatar
                                            sx={{
                                                width: 60,
                                                height: 60,
                                                background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                                                margin: '0 auto 1rem auto',
                                            }}
                                        >
                                            {stat.icon}
                                        </Avatar>
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                fontWeight: 800,
                                                color: '#1976d2',
                                                mb: 1,
                                            }}
                                        >
                                            {stat.number}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: '#666',
                                                fontWeight: 500,
                                            }}
                                        >
                                            {stat.label}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </StatsContainer>
            </Container>

            {/* Features Section */}
            <Container maxWidth="lg" sx={{ mb: 8 }}>
                <Box textAlign="center" sx={{ mb: 6 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            mb: 2,
                            fontWeight: 700,
                            background: 'linear-gradient(45deg, #1976d2, #00c853)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        چرا مدوگرام؟
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#666',
                            maxWidth: '600px',
                            margin: '0 auto',
                        }}
                    >
                        ویژگی‌های منحصر به فرد که مدوگرام را به انتخاب اول شما تبدیل می‌کند
                    </Typography>
                </Box>
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <FeatureCard
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Box sx={{ mb: 2 }}>
                                        {feature.icon}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            mb: 2,
                                            fontWeight: 600,
                                            color: '#1976d2',
                                        }}
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#666',
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {feature.description}
                                    </Typography>
                                </FeatureCard>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Services Section */}
            <Container maxWidth="lg" sx={{ mb: 8 }}>
                <Box textAlign="center" sx={{ mb: 6 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            mb: 2,
                            fontWeight: 700,
                            background: 'linear-gradient(45deg, #1976d2, #00c853)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        خدمات ما
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#666',
                            maxWidth: '600px',
                            margin: '0 auto',
                        }}
                    >
                        طیف وسیعی از خدمات پزشکی حرفه‌ای در دسترس شما
                    </Typography>
                </Box>
                <Grid container spacing={4}>
                    {serviceCards.map((card) => (
                        <Grid item xs={12} sm={6} md={4} key={card.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Card
                                    component={NextLink}
                                    href={card.link}
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        textDecoration: 'none',
                                        borderRadius: 3,
                                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                                        border: `2px solid ${card.color}20`,
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '4px',
                                            background: `linear-gradient(90deg, ${card.color}, ${card.color}80)`,
                                        },
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: `0 16px 40px ${card.color}20`,
                                            borderColor: card.color,
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 4, flexGrow: 1 }}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: 80,
                                                height: 80,
                                                borderRadius: '50%',
                                                background: `linear-gradient(135deg, ${card.color}15, ${card.color}05)`,
                                                margin: '0 auto 2rem auto',
                                                transition: 'all 0.3s ease',
                                            }}
                                        >
                                            {card.icon}
                                        </Box>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                mb: 2,
                                                fontWeight: 600,
                                                color: card.color,
                                                textAlign: 'center',
                                            }}
                                        >
                                            {card.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                mb: 3,
                                                color: '#666',
                                                lineHeight: 1.6,
                                                textAlign: 'center',
                                            }}
                                        >
                                            {card.description}
                                        </Typography>
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            justifyContent="center"
                                            flexWrap="wrap"
                                            gap={1}
                                        >
                                            {card.features.map((feature, index) => (
                                                <Chip
                                                    key={index}
                                                    label={feature}
                                                    size="small"
                                                    sx={{
                                                        background: `${card.color}15`,
                                                        color: card.color,
                                                        fontWeight: 500,
                                                    }}
                                                />
                                            ))}
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Testimonials Section */}
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    py: 8,
                }}
            >
                <Container maxWidth="lg">
                    <Box textAlign="center" sx={{ mb: 6 }}>
                        <Typography
                            variant="h3"
                            sx={{
                                mb: 2,
                                fontWeight: 700,
                                background: 'linear-gradient(45deg, #1976d2, #00c853)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            نظرات بیماران
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#666',
                                maxWidth: '600px',
                                margin: '0 auto',
                            }}
                        >
                            تجربه بیماران ما از خدمات مدوگرام
                        </Typography>
                    </Box>
                    <Grid container spacing={4}>
                        {testimonials.map((testimonial, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <Paper
                                        sx={{
                                            p: 4,
                                            height: '100%',
                                            borderRadius: 3,
                                            background: 'white',
                                            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                            <Avatar
                                                sx={{
                                                    bgcolor: '#1976d2',
                                                    mr: 2,
                                                    width: 50,
                                                    height: 50,
                                                }}
                                            >
                                                {testimonial.avatar}
                                            </Avatar>
                                            <Box>
                                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                    {testimonial.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {testimonial.role}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: 'flex', mb: 2 }}>
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} sx={{ color: '#ffc107', fontSize: 20 }} />
                                            ))}
                                        </Box>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: '#666',
                                                lineHeight: 1.6,
                                                fontStyle: 'italic',
                                            }}
                                        >
                                            "{testimonial.content}"
                                        </Typography>
                                    </Paper>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Insurance Section */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grow in={true} timeout={1500}>
                    <Box sx={{ mb: 6, mt: 8 }}>
                        <Typography
                            variant="h3"
                            align="center"
                            sx={{
                                mb: 2,
                                fontWeight: 700,
                                background: 'linear-gradient(45deg, #1976d2, #00c853)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            بیمه‌های طرف قرارداد مدوگرام
                        </Typography>
                        <Typography
                            variant="h6"
                            align="center"
                            sx={{
                                mb: 4,
                                color: '#666',
                                maxWidth: '600px',
                                margin: '0 auto 2rem auto',
                            }}
                        >
                            با پوشش بیمه‌ای گسترده، خدمات پزشکی را با هزینه کمتر دریافت کنید
                        </Typography>
                        <InsuranceCarousel />
                    </Box>
                </Grow>
            </Container>
        </ThemeProvider>
    );
};

export default Home;