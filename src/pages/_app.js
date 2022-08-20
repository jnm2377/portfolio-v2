import '../scss/index.scss';
import '../styles/app.scss';
import { ThemePreference } from '../components/ThemePreference';

export default function App({ Component, pageProps }) {
  return (
    <ThemePreference>
      <Component {...pageProps} />
    </ThemePreference>
  );
}
