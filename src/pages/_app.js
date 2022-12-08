import '../scss/index.scss';
import '../scss/app.scss';
import { ThemePreference } from '../components/ThemePreference';
import { MDXProvider } from '@mdx-js/react';

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider>
      <ThemePreference>
        <Component {...pageProps} />
      </ThemePreference>
    </MDXProvider>
  );
}
