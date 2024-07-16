import Layout from '../components/layout/Layout';
import MainTitle from '../components/mainTitle/MainTitle';
import Intro from '../components/fortune/Intro';

export default function Fortune() {
  return (
    <Layout>
      <MainTitle title='운세' />
      <Intro />
    </Layout>
  );
}
