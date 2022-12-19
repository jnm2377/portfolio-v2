import Layout from '../../components/Layout';
import Head from 'next/head';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';
import PostBackClick from '../../components/PostBackClick';
import Image from '../../components/markdown/Image';
import rehypeImgSize from 'rehype-img-size';
import Translator from '../../components/Translator';
import English from '../../components/markdown/English';
import Spanish from '../../components/markdown/Spanish';
import {
  Grid,
  Column,
  Link,
  OrderedList,
  UnorderedList,
  ListItem,
} from '@carbon/react';

const components = {
  img: Image,
  Translator,
  English,
  Spanish,
  ul: UnorderedList,
  ol: OrderedList,
  a: Link,
  Grid,
  Column,
  li: ListItem,
  h3: ({ children }) => {
    return (
      <h3
        style={{
          fontWeight: '600',
          marginTop: '2rem',
          marginBottom: '-1.5rem',
          fontSize: '1.25rem',
        }}
      >
        {children}
      </h3>
    );
  },
};

export default function PostPage({ source, frontMatter }) {
  return (
    <Layout>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <div className="section-content">
        <div className="center-content" style={{ paddingBottom: '10rem' }}>
          <PostBackClick />
          <Translator>
            <>
              <h1 style={{ fontSize: '4rem', fontWeight: '800' }}>
                {frontMatter.title}
              </h1>
              <p>{frontMatter.date}</p>
            </>
            <>
              <h1 style={{ fontSize: '4rem', fontWeight: '800' }}>
                {frontMatter.spanishTitle}
              </h1>
              <p>{frontMatter.spanishDate}</p>
            </>
          </Translator>
          <MDXRemote {...source} components={components} />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, params.slug, `${params.slug}.mdx`);
  console.log('test', postFilePath);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [[rehypeImgSize, { dir: 'public' }]],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
