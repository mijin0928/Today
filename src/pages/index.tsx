import Head from 'next/head';
import Title from './components/title/Title';
import Fortune from './components/fortune/Fortune';
import Layout from './components/layout/Layout';
import MainTitle from './components/mainTitle/MainTitle';
export default function Home() {
  return (
    <>
      <Head>
        <title>Today</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Title /> */}
      <Layout>
        <MainTitle title='운세'/>
      <Fortune />
      </Layout>
    
    </>
  );
}
