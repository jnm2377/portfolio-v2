import Layout from '../components/Layout';
import Typewriter from '../components/Typewriter';

export default function Home() {
  return (
    <>
      <div className="landing-page" id="landing">
        <Typewriter />
      </div>
      <Layout>
        <div className="main-content">
          <section id="about" className="homepage-section">
            about me
          </section>
          <section id="portfolio" className="homepage-section">
            portfolio
          </section>
          <section id="contact" className="homepage-section">
            contact
          </section>
        </div>
      </Layout>
    </>
  );
}
