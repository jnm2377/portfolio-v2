import { Content, Theme } from '@carbon/react';
import { Header } from './Header';
import Head from 'next/head';

export const siteTitle = 'Josefina Mancilla';

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="Josefina Mancilla"
          content="Checkout my projects, learn about who I am and what I love to do."
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="og:title" content={siteTitle} />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <Theme theme={home ? 'g90' : 'white'}>
        <Header />
        <Content className={home ? 'home-content' : ''}>{children}</Content>
      </Theme>
    </>
  );
}
