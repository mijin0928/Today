import Head from 'next/head';
import Title from './components/title/Title';
import Fortune from './components/fortune/Fortune';
import Layout from './components/layout/Layout';
import MainTitle from './components/mainTitle/MainTitle';
import { MongoClient } from 'mongodb';

export async function getStaticProps() {
  const client = await MongoClient.connect('mongodb+srv://mijin:qlalf0928@cluster0.tdkhkxz.mongodb.net/');
  const db = client.db('today');
  const fortune = await db.collection('fortune').find().toArray();

  client.close();

  return {
    props: {
			fortune: fortune.map((fortune) => ({
				id: fortune._id.toString(),
				result: fortune.result,
			})),
		},
  };
}

export default function Home({fortune}) {
  return (
    <>
      <Head>
        <title>Today</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Title /> */}
      {/* <Layout>
        <MainTitle title='운세' />
     
      </Layout> */}
      <Fortune fortune={fortune}/>
    </>
  );
}
