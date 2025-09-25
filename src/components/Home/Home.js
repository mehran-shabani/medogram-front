import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    useTheme,
    useMediaQuery,
    CircularProgress,
    Alert
} from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { styled } from '@mui/system';
import { motion } from "framer-motion";

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
const PageContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    direction: 'rtl',
}));

const PageTitle = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    marginBottom: theme.spacing(6),
    color: theme.palette.primary.main,
    fontWeight: 'bold',
}));

const BlogCard = styled(motion.div)(({ theme }) => ({
    background: 'white',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    marginBottom: theme.spacing(4),
    overflow: 'hidden',
    border: '1px solid #e0e0e0',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    },
}));

const BlogImage = styled.img(({ theme }) => ({
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
        height: '200px',
    },
}));

const BlogContent = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
}));

const BlogTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
    lineHeight: 1.4,
}));

const BlogDescription = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    lineHeight: 1.8,
    textAlign: 'justify',
    marginBottom: theme.spacing(2),
}));

const BlogMeta = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
    borderTop: '1px solid #e0e0e0',
    color: theme.palette.text.secondary,
    fontSize: '0.9rem',
}));

const LoadingContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
}));

const ErrorContainer = styled(Box)(({ theme }) => ({
    margin: theme.spacing(4, 0),
}));

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('https://api.medogram.ir/api/blogs/?page=1');
                let blogData = [];
                
                if (response.data && Array.isArray(response.data)) {
                    blogData = response.data;
                } else if (response.data && response.data.results) {
                    blogData = response.data.results;
                }
                
                // Take only the first 3 blogs
                setBlogs(blogData.slice(0, 3));
                setLoading(false);
            } catch (err) {
                setError('خطا در بارگذاری مقالات');
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('fa-IR');
    };

    if (loading) {
        return (
            <ThemeProvider theme={theme}>
                <PageContainer maxWidth="lg">
                    <LoadingContainer>
                        <CircularProgress size={60} />
                    </LoadingContainer>
                </PageContainer>
            </ThemeProvider>
        );
    }

    if (error) {
        return (
            <ThemeProvider theme={theme}>
                <PageContainer maxWidth="lg">
                    <ErrorContainer>
                        <Alert severity="error">{error}</Alert>
                    </ErrorContainer>
                </PageContainer>
            </ThemeProvider>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <PageContainer maxWidth="lg">
                <PageTitle variant="h3" component="h1">
                    مقالات مدوگرام
                </PageTitle>
                
                {blogs.length > 0 ? (
                    <Box>
                        {blogs.map((blog, index) => (
                            <BlogCard
                                key={blog.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                {blog.image1 && (
                                    <BlogImage
                                        src={blog.image1}
                                        alt={blog.title}
                                        loading="lazy"
                                    />
                                )}
                                
                                <BlogContent>
                                    <BlogTitle variant="h4" component="h2">
                                        {blog.title}
                                    </BlogTitle>
                                    
                                    <BlogDescription variant="body1">
                                        {blog.content}
                                    </BlogDescription>
                                    
                                    <BlogMeta>
                                        <Typography variant="body2">
                                            نویسنده: {blog.author || 'مدوگرام'}
                                        </Typography>
                                        <Typography variant="body2">
                                            تاریخ: {formatDate(blog.created_at)}
                                        </Typography>
                                    </BlogMeta>
                                </BlogContent>
                            </BlogCard>
                        ))}
                    </Box>
                ) : (
                    <Box textAlign="center" py={8}>
                        <Typography variant="h6" color="textSecondary">
                            مقاله‌ای برای نمایش وجود ندارد
                        </Typography>
                    </Box>
                )}
            </PageContainer>
        </ThemeProvider>
    );
};

export default Home;