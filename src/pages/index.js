import Layout from '../components/Layout';
import Typewriter from '../components/Typewriter';
import { useThemePreference } from '../components/ThemePreference';
import cx from 'classnames';

export default function Home() {
  const { theme } = useThemePreference();

  const landingClassNames = cx('landing-page', {
    ['dark-landing']: theme === 'g100',
  });

  return (
    <>
      <div className={landingClassNames} id="landing">
        <Typewriter />
      </div>
      <Layout>
        <div className="main-content">
          <section id="about" className="homepage-section">
            <h2>About</h2>
            <p>
              Hello. My name is Josefina Mancilla. I am a front end developer
              from Austin, Texas.{' '}
            </p>
          </section>
          <section id="portfolio" className="homepage-section">
            <h2>Portfolio</h2>
            <p>
              Here's some of the stuff I've worked on in the last few years.
            </p>
          </section>
          <section id="contact" className="homepage-section">
            <h2>Contact</h2>
            <p>Find me on LinkedIn, Twitter, Instagram and GitHub.</p>
          </section>
        </div>
      </Layout>
    </>
  );
}
