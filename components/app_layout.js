// import Header from "./header"
// import Footer from "./footer"
import Head from 'next/head';
import styles from '@/styles/components/AppLayout.module.css';

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>In Search of Mood: A Spotify® App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{props.children}</main>
    </>
  );
}
