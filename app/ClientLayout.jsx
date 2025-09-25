'use client';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/styles/theme';
import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Home/Footer';

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <main style={{ marginTop: '64px' }}>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}

