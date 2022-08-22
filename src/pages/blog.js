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

export default function BlogIndex({ posts }) {
  return (
    <Layout>
      <div className="section-content">
        <div className="center-content">
          <h1>Welcome.</h1>
          <p>
            This page is still under construction and these posts are just fake
            posts, although the content them in them is very real. Eventually
            I'll get around to blogging more, once I've finished my other
            projects. I intend to write about more than just front end
            development. This blog will be about all things related to my life:
            work, tech, management, relationships, dogs, adventures, and more.
            It's definitely very scary putting that much information about
            myself out there, but I really enjoy writing and I hope people enjoy
            reading what I share.
          </p>
        </div>
      </div>

      <Layer style={{ paddingTop: '3rem' }}>
        <Grid>
          {posts.map((post, i) => (
            <Column lg={8} md={4} sm={4} key={post.filePath}>
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
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
                    <h4>{post.data.title}</h4>
                  </AspectRatio>
                </ClickableTile>
              </Link>
            </Column>
          ))}
        </Grid>
      </Layer>
      <section className="homepage-section">
        <div className="section-content">
          <div className="center-content">
            <h4>Subscribe to my posts</h4>

            <FormGroup legendText="" className="contact-form">
              <Stack gap={7}>
                <TextInput id="one" labelText="Email" />
                <Button disabled>Submit</Button>
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
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
