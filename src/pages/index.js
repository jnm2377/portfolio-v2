import Layout from '../components/Layout';
import Typewriter from '../components/Typewriter';
import { useThemePreference } from '../components/ThemePreference';
import { useLanguagePreference } from '../components/LanguagePreference';
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
import Translator from '../components/Translator';

export default function Home() {
  const { theme } = useThemePreference();
  const { spanish } = useLanguagePreference();

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
          <Translator>
            <section id="about" className="homepage-section">
              <div className="section-content">
                <div className="center-content">
                  <h3>
                    Hi, hello! I'm Josefina Mancilla, a front end developer from
                    Austin, Texas.
                  </h3>

                  <p>
                    My interest in web development stemmed from my previous
                    career in multimedia journalism, where I started out
                    creating visual content, writing and designing. Through
                    that, I realized I wanted to do more than just create
                    content for the web, I wanted to be able to build those
                    beautiful websites and experiences. So I learned to do just
                    that, and I've loved it every moment ever since. Well,
                    mostly every moment. I think it's safe to say we all have
                    those moments when we just wanna chuck our computer at the
                    wall or smash our head into our keyboard haha.
                  </p>

                  <p>
                    In my free time, I enjoy making art. I have been drawing
                    since I was a young girl. It's one of my fondest memories
                    with my grandpa, who taught me how to draw. Being an artist
                    is a big part of why I got into multimedia journalism, and
                    it continues to help my creativy when it comes to front end
                    development.
                  </p>

                  <p>
                    My other passions in life include: my dogs (Gunny and
                    Papas), DIY projects, home renovations, rock climbing,
                    hiking, weightlifting, triathlons, writing, traveling and
                    binging Netflix shows on a Friday night.
                  </p>

                  <p>
                    I am a proud Latina and first generation American (my mom is
                    from Mexico City and my dad is from Guatemala City). Spanish
                    is my native language and I love being able to speak it with
                    friends, family and especially at work if the opportunity
                    arises. Growing up the daughter of immigrants in America, I
                    am passionate about supporting underrepresented groups and
                    fostering diversity.
                  </p>
                </div>
              </div>
            </section>
            <section id="about" className="homepage-section">
              <div className="section-content">
                <div className="center-content">
                  <h3>
                    Hola, hola! Soy Josefina Mancilla, una programadora de
                    Austin, Texas.
                  </h3>

                  <p>
                    Mi interés por la programación surgió de mi carrera anterior
                    en periodismo y multimedia donde empecé creando contenidos
                    visuales, escribiendo y diseñando para la red. A través de
                    eso me di cuenta de que quería hacer algo más que crear
                    contenido, quería poder desarrollar esos hermosos sitios web
                    y experiencias. Así que aprendí a hacer precisamente eso, y
                    me ha encantado cada momento desde entonces. Bueno..., casi
                    cada momento. Creo que todos tenemos esos momentos en los
                    que queremos tirar nuestra computadora contra la pared o
                    rompernos la cabeza contra el teclado.
                  </p>

                  <p>
                    En mi tiempo libre, me gusta hacer arte. Llevo dibujando
                    desde que era niña. Es una de mis memorias favoritas con mi
                    abuelo, quien me enseñó a dibujar. Ser artista es una de las
                    razones por las que me dediqué al periodismo multimedia y
                    sigue ayudando a mi creatividad en la programación.
                  </p>

                  <p>
                    Mis otras pasiones en la vida incluyen: mis perros (Gunny y
                    Papas), proyectos DIY, renovaciones de casa, la escalada,
                    hiking, hacer pesas, triatlones, escribir, viajar y ver
                    Netflix por muchas horas a la vez los viernes en la tarde.
                  </p>

                  <p>
                    Soy orgullosa de ser Latina y Americana de primera
                    generación (mi mamá es de CDMX y mi papá es de la Ciudad de
                    Guatemala). Español es mi primer idioma y me encanta
                    hablarlo con mis amigos, familia, y especialmente en el
                    trabajo si tengo la oportunitdad. Como hija de inmigrantes
                    en Estados Unidos, me apasiona apoyar a los grupos menos
                    representados y fomentar la diversidad.
                  </p>
                </div>
              </div>
            </section>
          </Translator>

          <section id="work" className="homepage-section">
            <div className="section-content">
              <Translator>
                <div className="center-content">
                  <h3>Latest work</h3>
                  <p>
                    For the past few years I've been working in open source on
                    IBM's Carbon Design System. These are some of the projects
                    that I've had the opportunity to help develop.
                  </p>
                </div>
                <div className="center-content">
                  <h3>Trabajos recientes</h3>
                  <p>
                    Durante los últimos años he trabajado en código abierto
                    (open source) en el sistema de diseño de IBM: Carbon Design
                    System. Estos son algunos de los proyectos que he tenido la
                    oportunidad de desarrollar.
                  </p>
                </div>
              </Translator>
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
                <Translator>
                  <>
                    <h3>Contact</h3>
                    <p>
                      Are you interested in working together? Shoot me an email
                      with the deets. I look forward to hearing from you!
                    </p>
                  </>
                  <>
                    <h3>Contacto</h3>
                    <p>
                      ¿Estás interesado en trabajar juntos? Envíame un correo
                      electrónico con los detalles. ¡Espero escuchar de ti!
                    </p>
                  </>
                </Translator>
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
                    <TextInput
                      id="one"
                      labelText={!spanish ? 'First name' : 'Nombre'}
                    />
                    <TextInput
                      id="two"
                      labelText={!spanish ? 'Last name' : 'Apellido'}
                    />
                    <TextInput id="three" labelText="Email" />
                    <TextArea
                      labelText={!spanish ? 'Tell me more' : 'Cuentame más'}
                    />
                    <Button disabled>{!spanish ? 'Submit' : 'Enviar'}</Button>
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
