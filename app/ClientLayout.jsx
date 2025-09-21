'use client';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/styles/theme';
import { AuthProvider } from '../src/components/Auth/AuthContext';
import { ChatProvider } from '../src/components/chat/ChatContext';
import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Home/Footer';

export default function ClientLayout({ children }) {
  return (
    <AuthProvider>
      <ChatProvider>
        <ThemeProvider theme={theme}>
          <Navbar />
          <main style={{ marginTop: '64px' }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </ChatProvider>
    </AuthProvider>
  );
}

