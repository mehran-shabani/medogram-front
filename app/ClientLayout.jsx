'use client';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/styles/theme';
import Footer from '../src/components/Home/Footer';

/**
 * یک لایه‌بندی کلاینت که تم MUI را اعمال کرده و محتوای فرزند و فوتر را نمایش می‌دهد.
 *
 * @param {React.ReactNode} children - محتوایی که درون المان `main` قرار می‌گیرد.
 * @returns {JSX.Element} یک عنصر JSX شامل `ThemeProvider` که یک المان `main` با `children` و یک `Footer` را در بر می‌گیرد.
 */
export default function ClientLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}

