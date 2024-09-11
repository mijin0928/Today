import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function data(req: NextApiRequest, res: NextApiResponse) {
  const client = await MongoClient.connect(
    `mongodb+srv://mijin:${process.env.REACT_APP_MONGODB_PW}@cluster0.tdkhkxz.mongodb.net/`
  );
  const db = client.db('today');

  if (req.method === 'GET') {
    const result = await db
      .collection('fortune')
      .aggregate([{ $sample: { size: 1 } }])
      .toArray();
    client.close();
    res.status(201).json(result);
  }
}
