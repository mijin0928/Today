import Layout from '../components/layout/Layout';
import MainTitle from '../components/mainTitle/MainTitle';
import Hand from '../components/fortune/Hand';
import Ball from '../components/fortune/Ball';

export default function Fortune() {
  return (
    <Layout>
      <MainTitle title='운세' />
      <Hand />
      {/* <Ball /> */}
    </Layout>
  );
}
