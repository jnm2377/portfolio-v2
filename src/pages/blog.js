import { Grid, Column, Tile, Stack, Layer } from '@carbon/react';
import Layout from '../components/Layout';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';

export default function BlogIndex({ posts }) {
  return (
    <Layout>
      <Grid>
        <Column lg={4} md={3} sm={4}>
          This is the blog index page
          <Layer style={{ paddingTop: '3rem' }}>
            <Stack gap={1}>
              {posts.map((post) => (
                <Link
                  as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                  href={`/posts/[slug]`}
                  key={post.filePath}
                  className="blog-post-link"
                >
                  <Tile className="blog-post-tile">{post.data.title}</Tile>
                </Link>
              ))}
            </Stack>
          </Layer>
        </Column>
      </Grid>
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
