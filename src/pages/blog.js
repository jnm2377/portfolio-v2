import {
  Grid,
  Column,
  ClickableTile,
  Stack,
  Layer,
  AspectRatio,
  FormGroup,
  TextInput,
  Button,
} from '@carbon/react';
import Layout from '../components/Layout';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import cx from 'classnames';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';
import Translator from '../components/Translator';

export default function BlogIndex({ posts }) {
  return (
    <Layout>
      <div className="section-content">
        <Translator>
          <div className="center-content">
            <h1>Welcome.</h1>
            <p>
              This page is still under construction and these posts are just
              fake posts, although the content them in them is very real.
              Eventually I'll get around to blogging more, once I've finished my
              other projects. I intend to write about more than just front end
              development. This blog will be about all things related to my
              life: work, tech, management, relationships, dogs, adventures, and
              more. It's definitely very scary putting that much information
              about myself out there, but I really enjoy writing and I hope
              people enjoy reading what I share.
            </p>
          </div>
          <div className="center-content">
            <h1>Bienvenido.</h1>
            <p>
              Esta pagina todavia está bajo construcción y estos posts son
              falsos pero el contenido dentro de ellos es muy real.
              Eventualmente voy a escribir más en mi blog, después de haber
              terminado todos mis otros proyectos. Tengo la intención de
              escribir sobre más que solo el desarrollo front-end. Este blog
              será sobre todas las cosas relacionadas con mi vida: trabajo,
              tecnología, relaciones, perros, aventuras y mucho más. Sin duda,
              me intimida publicar tanta información sobre mí misma, pero
              disfruto mucho al escribir y espero que la gente disfrute leyendo
              lo que comparto.
            </p>
          </div>
        </Translator>
      </div>

      <Layer style={{ paddingTop: '3rem' }}>
        <Grid>
          {posts.map(
            (post, i) =>
              post.data.hidden !== true && (
                <Column lg={8} md={4} sm={4} key={post.filePath}>
                  <Link
                    as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                    href={`/blog/[slug]`}
                    className="blog-post-link"
                    passHref
                  >
                    <ClickableTile
                      className={cx('portfolio-tile', {
                        ['one-tile']: i === 0,
                        ['two-tile']: i === 1,
                        ['three-tile']: i === 2,
                      })}
                    >
                      <AspectRatio ratio="16x9">
                        <h4>
                          <Translator>
                            {post.data.title}
                            {post.data.spanishTitle}
                          </Translator>
                        </h4>
                      </AspectRatio>
                    </ClickableTile>
                  </Link>
                </Column>
              )
          )}
        </Grid>
      </Layer>
      <section className="homepage-section">
        <div className="section-content">
          <div className="center-content">
            <Translator>
              <h4>Subscribe to my posts</h4>
              <h4>Suscribete a mi blog</h4>
            </Translator>

            <FormGroup legendText="" className="contact-form">
              <Stack gap={7}>
                <TextInput id="one" labelText="Email" />
                <Button disabled>
                  <Translator englishLabel="Submit" spanishLabel="Enviar" />
                </Button>
              </Stack>
            </FormGroup>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const fileFolder = filePath.replace(/\.mdx?$/, '');
    const source = fs.readFileSync(
      path.join(POSTS_PATH, fileFolder, `${filePath}.mdx`)
    );
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
