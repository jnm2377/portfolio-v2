import { Grid, Column } from '@carbon/react';
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
          <ul>
            {posts.map((post) => (
              <li key={post.filePath}>
                <Link
                  as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                  href={`/posts/[slug]`}
                >
                  {post.data.title}
                </Link>
              </li>
            ))}
          </ul>
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
