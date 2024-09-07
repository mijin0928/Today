import Layout from '../components/layout/Layout';
import MainTitle from '../components/mainTitle/MainTitle';
import WeatherInfo from '../components/weather/WeatherInfo';

export default function Weather() {
  return (
    <Layout>
      <MainTitle title='날씨' />
      <WeatherInfo />
    </Layout>
  );
}
