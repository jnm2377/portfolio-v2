import '../scss/index.scss';
import '../scss/app.scss';
import { ThemePreference } from '../components/ThemePreference';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXComponents';

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider components={{ ...MDXComponents }}>
      <ThemePreference>
        <Component {...pageProps} />
      </ThemePreference>
    </MDXProvider>
  );
}
