import { MongoClient } from 'mongodb';
import { useEffect, useState } from 'react';

interface Fortune {
  id: string;
  result: string;
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

export default function FortuneResult({ fortune }: { fortune: Fortune[] }) {
  const [result, setResult] = useState(0);
  const random = Math.floor(Math.random() * fortune.length);

  useEffect(() => {
    setResult(random);
  }, []);

  return (
    <>
      <div className='relative flex justify-center items-center h-screen before:absolute before:top-2/4 before:left-2/4 before:translate-x-[-50%] before:translate-y-[-50%] before:w-screen before:h-[90vh] before:bg-paper before:bg-contain before:bg-no-repeat before:bg-center before:z-[-1]'>
        {fortune.map((item, idx) => {
          if (idx === result) {
            return <p key={item.id} className='p-4 text-primary text-justify text-[1.25rem] bg-white max-sm:text-[1rem] max-md:max-h-[200px] max-sm:max-h-[80px] max-md:overflow-y-auto scrollbar-thumb-primary scrollbar-track-transparent scrollbar-thin max-w-[45%]'>{item.result}</p>;
          }
        })}
      </div>
    </>
  );
}
