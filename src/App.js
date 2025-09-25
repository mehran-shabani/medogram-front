// App.js
import React, { useState, useEffect } from 'react';
// React Router and Helmet are not used in Next.js runtime; kept for reference only
import SplashScreen from './components/SplashScreen/SplashScreen';
import Home from './components/Home/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "./components/Home/Footer";
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import logoImage from './images/medogram-logo.png';
import NotFound from './components/NotFound';

/**
 * کامپوننت ریشه برنامه که نمایش صفحهٔ اسپلاش را مدیریت می‌کند.
 *
 * این کامپوننت وضعیت نمایش اسپلاش را نگهداری می‌کند، وضعیت قبلی بازدید را از
 * sessionStorage با کلید 'hasSeenSplash' می‌خواند و در صورت وجود آن از نمایش
 * اسپلاش صرف‌نظر می‌کند. همچنین یک هندلر (handleSplashComplete) را به
 * SplashScreen می‌دهد که هنگام تکمیل اسپلاش مقدار 'hasSeenSplash' را در
 * sessionStorage ذخیره و نمایش اسپلاش را خاموش می‌کند.
 *
 * @returns {JSX.Element} عنصر JSX که یا کامپوننت SplashScreen یا محتوای اصلی برنامه را رندر می‌کند.
 */
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
        <div className="App">
            {showSplash ? (
                <SplashScreen onComplete={handleSplashComplete} />
                    ) : (
                        <>
                            <ThemeProvider theme={theme}>
                                {/* Routing is handled by Next.js; this component is unused at runtime */}
                                <Footer logo={logoImage} />
                            </ThemeProvider>
                        </>
                    )}
        </div>
    );
}

export default App;
