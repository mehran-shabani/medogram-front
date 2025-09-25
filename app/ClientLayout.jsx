'use client';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/styles/theme';
import Footer from '../src/components/Home/Footer';

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}

