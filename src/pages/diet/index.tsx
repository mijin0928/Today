import Layout from '../components/layout/Layout';
import MainTitle from '../components/mainTitle/MainTitle';
import DietList from '../components/diet/DietList';

export default function Diet() {
  return (
    <Layout>
      <MainTitle title='식단' />
      <DietList />
    </Layout>
  );
}
