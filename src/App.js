// App.js
import React, { useState, useEffect } from 'react';
// React Router and Helmet are not used in Next.js runtime; kept for reference only
import SplashScreen from './components/SplashScreen/SplashScreen';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import About from './components/Details/About';
import Contact from './components/Details/Contact';
import VisitPage from './components/Visit/VisitPage';
import UserVisitsPage from './components/Visit/UserVisitsPage';
import ExcludedServices from './components/Details/ExcludedServices';
import Navbar from './components/Navbar/Navbar';
import { AuthProvider } from './components/Auth/AuthContext';
import { ChatProvider } from './components/chat/ChatContext';

import ChatBot from './components/chat/ChatBot'; // اصلاح نام از Chat به ChatBot
import TransactionComponent from './components/Payment/TransactionComponent';
import PaymentRedirect from "./components/Payment/PaymentRedirect";
import ProfilePage from "./components/Auth/ProfilePage";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "./components/Home/Footer";
import BlogPostPage from "./components/Blog/BlogPostPage";
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import logoImage from './images/medogram-logo.png';
import DiabetesPredict from "./components/predictions/DiabetPredict";
import NotFound from './components/NotFound';
import BalePaymentRedirect from "./components/Payment/baletranscription";

function App() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
        if (hasSeenSplash) {
            setShowSplash(false);
        }
    }, []);

    const handleSplashComplete = () => {
        setShowSplash(false);
        sessionStorage.setItem('hasSeenSplash', 'true');
    };

    return (
        <AuthProvider>
            <ChatProvider>
                <div className="App">
                    {showSplash ? (
                        <SplashScreen onComplete={handleSplashComplete} />
                    ) : (
                        <>
                            <ThemeProvider theme={theme}>
                                <Navbar logo={logoImage} />
                                {/* Routing is handled by Next.js; this component is unused at runtime */}
                                <Footer logo={logoImage} />
                            </ThemeProvider>
                        </>
                    )}
                </div>
            </ChatProvider>
        </AuthProvider>
    );
}

export default App;
