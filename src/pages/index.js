import Layout from '../components/Layout';
import Typewriter from '../components/Typewriter';
import { useThemePreference } from '../components/ThemePreference';
import cx from 'classnames';
import {
  TextArea,
  FormGroup,
  TextInput,
  Stack,
  Button,
  Layer,
  ClickableTile,
  Link,
  AspectRatio,
  Grid,
  Column,
} from '@carbon/react';
import {
  LogoGithub,
  LogoInstagram,
  LogoMedium,
  LogoTwitter,
  LogoLinkedin,
} from '@carbon/react/icons';

export default function Home() {
  const { theme } = useThemePreference();

  const landingClassNames = cx('landing-page', {
    ['dark-landing']: theme === 'g100',
  });

  return (
    <>
      <div className={landingClassNames} id="hello">
        <Typewriter />
      </div>
      <Layout home>
        <div className="main-content">
          <section id="about" className="homepage-section">
            <div className="section-content">
              <div className="center-content">
                <h3>
                  Hi, hello! I'm Josefina Mancilla, a front end developer from
                  Austin, Texas.
                </h3>

                <p>
                  My interest in web development stemmed from my previous career
                  in multimedia journalism, where I started out creating visual
                  content, writing and designing. Through that, I realized I
                  wanted to do more than just create content for the web, I
                  wanted to be able to build those beautiful websites and
                  experiences. So I learned to do just that, and I've loved it
                  every moment ever since. Well, mostly every moment. I think
                  it's safe to say we all have those moments when we just wanna
                  chuck our computer at the wall or smash our head into our
                  keyboard haha.
                </p>

                <p>
                  In my free time, I enjoy making art. I have been drawing since
                  I was a young girl. It's one of my fondest memories with my
                  grandpa, who taught me how to draw. Being an artist is a big
                  part of why I got into multimedia journalism, and it continues
                  to help my creativy when it comes to front end development.
                </p>

                <p>
                  My other passions in life include: my dogs (Gunny and Papas),
                  DIY projects, home renovations, rock climbing, hiking,
                  weightlifting, triathlons, writing, traveling and binging
                  Netflix shows on a Friday night.
                </p>

                <p>
                  I am a proud Latina and first generation American (my mom is
                  from Mexico City and my dad is from Guatemala City). Spanish
                  is my native language and I love being able to speak it with
                  friends, family and especially at work if the opportunity
                  arises. Growing up the daughter of immigrants in America, I am
                  passionate about supporting underrepresented groups and
                  fostering diversity.
                </p>
              </div>
            </div>
          </section>
          <section id="work" className="homepage-section">
            <div className="section-content">
              <div className="center-content">
                <h3>Latest work</h3>
                <p>
                  For the past few years I've been working in open source on
                  IBM's Carbon Design System. These are some of the projects
                  that I've had the opportunity to help develop.
                </p>
              </div>
              <Layer style={{ paddingTop: '2rem' }}>
                <Grid>
                  <Column lg={8} md={4} sm={4}>
                    <ClickableTile
                      href="https://www.carbondesignsystem.com/"
                      className="portfolio-tile one-tile"
                    >
                      <AspectRatio ratio="16x9">
                        <h4>Carbon Design System</h4>
                      </AspectRatio>
                    </ClickableTile>
                  </Column>
                  <Column lg={8} md={4} sm={4}>
                    <ClickableTile
                      href="https://www.austincold.com"
                      className="portfolio-tile two-tile"
                    >
                      <AspectRatio ratio="16x9">
                        <h4>Austin Cold</h4>
                      </AspectRatio>
                    </ClickableTile>
                  </Column>
                  <Column lg={8} md={4} sm={4}>
                    <ClickableTile
                      href="https://www.ibm.com/design/language/"
                      className="portfolio-tile three-tile"
                    >
                      <AspectRatio ratio="16x9">
                        <h4>IBM Design Language</h4>
                      </AspectRatio>
                    </ClickableTile>
                  </Column>
                  <Column lg={8} md={4} sm={4}>
                    <ClickableTile
                      href="https://www.ibm.com/design"
                      className="portfolio-tile four-tile"
                    >
                      <AspectRatio ratio="16x9">
                        <h4>IBM.com/design</h4>
                      </AspectRatio>
                    </ClickableTile>
                  </Column>
                </Grid>
              </Layer>
            </div>
          </section>
          <section id="contact" className="homepage-section">
            <div className="section-content">
              <div className="center-content">
                <h3>Contact</h3>
                <p>
                  Are you interested in working together? Shoot me an email with
                  the deets. I look forward to hearing from you!
                </p>
                <p className="social-icons">
                  <Link href="#">
                    <LogoGithub size={20} />
                  </Link>
                  <Link href="#">
                    <LogoLinkedin size={20} />
                  </Link>
                  <Link href="#">
                    <LogoTwitter size={20} />
                  </Link>
                  <Link href="#">
                    <LogoInstagram size={20} />
                  </Link>
                  <Link href="https://medium.com/@josefinanoemi4">
                    <LogoMedium size={20} />
                  </Link>
                </p>

                <FormGroup legendText="" className="contact-form">
                  <Stack gap={7}>
                    <TextInput id="one" labelText="First Name" />
                    <TextInput id="two" labelText="Last Name" />
                    <TextInput id="three" labelText="Email" />
                    <TextArea labelText="Tell me more" />
                    <Button disabled>Submit</Button>
                  </Stack>
                </FormGroup>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
