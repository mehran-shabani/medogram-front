import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Container,
    Typography,
    Box,
    useTheme,
    useMediaQuery,
    CircularProgress,
    Alert,
    Card,
    CardContent,
    CardMedia
} from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

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
                <Container maxWidth="lg" sx={{ 
                    paddingTop: 8, 
                    paddingBottom: 8, 
                    direction: 'rtl',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '400px'
                }}>
                    <CircularProgress size={60} />
                </Container>
            </ThemeProvider>
        );
    }

    if (error) {
        return (
            <ThemeProvider theme={theme}>
                <Container maxWidth="lg" sx={{ 
                    paddingTop: 8, 
                    paddingBottom: 8, 
                    direction: 'rtl' 
                }}>
                    <Alert severity="error">{error}</Alert>
                </Container>
            </ThemeProvider>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" sx={{ 
                paddingTop: 8, 
                paddingBottom: 8, 
                direction: 'rtl' 
            }}>
                <Typography 
                    variant="h3" 
                    component="h1" 
                    sx={{ 
                        textAlign: 'center', 
                        marginBottom: 6, 
                        color: 'primary.main', 
                        fontWeight: 'bold' 
                    }}
                >
                    مقالات مدوگرام
                </Typography>
                
                {blogs.length > 0 ? (
                    <Box>
                        {blogs.map((blog, index) => (
                            <Card
                                key={blog.id}
                                sx={{
                                    background: 'white',
                                    borderRadius: '20px',
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                                    marginBottom: 4,
                                    overflow: 'hidden',
                                    border: '1px solid #e0e0e0',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                                    },
                                }}
                            >
                                {blog.image1 && (
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={blog.image1}
                                        alt={blog.title}
                                        sx={{
                                            objectFit: 'cover',
                                            [theme.breakpoints.down('sm')]: {
                                                height: '200px',
                                            },
                                        }}
                                    />
                                )}
                                
                                <CardContent sx={{ padding: 3 }}>
                                    <Typography 
                                        variant="h4" 
                                        component="h2" 
                                        sx={{ 
                                            fontWeight: 'bold', 
                                            marginBottom: 2, 
                                            color: 'text.primary', 
                                            lineHeight: 1.4 
                                        }}
                                    >
                                        {blog.title}
                                    </Typography>
                                    
                                    <Typography 
                                        variant="body1" 
                                        sx={{ 
                                            color: 'text.secondary', 
                                            lineHeight: 1.8, 
                                            textAlign: 'justify', 
                                            marginBottom: 2 
                                        }}
                                    >
                                        {blog.content}
                                    </Typography>
                                    
                                    <Box sx={{ 
                                        display: 'flex', 
                                        justifyContent: 'space-between', 
                                        alignItems: 'center', 
                                        paddingTop: 2, 
                                        borderTop: '1px solid #e0e0e0', 
                                        color: 'text.secondary', 
                                        fontSize: '0.9rem' 
                                    }}>
                                        <Typography variant="body2">
                                            نویسنده: {blog.author || 'مدوگرام'}
                                        </Typography>
                                        <Typography variant="body2">
                                            تاریخ: {formatDate(blog.created_at)}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                ) : (
                    <Box sx={{ textAlign: 'center', py: 8 }}>
                        <Typography variant="h6" color="textSecondary">
                            مقاله‌ای برای نمایش وجود ندارد
                        </Typography>
                    </Box>
                )}
            </Container>
        </ThemeProvider>
    );
};

export default Home;