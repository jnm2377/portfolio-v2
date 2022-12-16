import '../scss/index.scss';
import '../scss/app.scss';
import { ThemePreference } from '../components/ThemePreference';
import { LanguagePreference } from '../components/LanguagePreference';

import { MDXProvider } from '@mdx-js/react';

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider>
      <LanguagePreference>
        <ThemePreference>
          <Component {...pageProps} />
        </ThemePreference>
      </LanguagePreference>
    </MDXProvider>
  );
}
