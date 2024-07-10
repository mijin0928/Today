import { MongoClient } from 'mongodb';
import Result from '../components/fortune/Result';
import { Props } from '@/type/type';

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: 'result' } }],
    fallback: false,
  };
}

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

export default function FortuneResult({ fortune }: { fortune: Props[] }) {
  return <Result fortune={fortune} />;
}
