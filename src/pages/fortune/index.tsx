import { MongoClient } from 'mongodb';
import Layout from '../components/layout/Layout';
import MainTitle from '../components/mainTitle/MainTitle';
import FortuneIntro from '../components/fortune/FortuneIntro';
import { Props } from '@/type/type';

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

export default function Fortune({ fortune }: { fortune: Props[] }) {
  return (
    <Layout>
      <MainTitle title='운세' />
      <FortuneIntro fortune={fortune} />
    </Layout>
  );
}
