import Layout from '../components/layout/Layout';
import MainTitle from '../components/mainTitle/MainTitle';
import WeatherInfo from '../components/weatherInfo/WeatherInfo';
import WeatherDetail from '../components/weatherDetail/WeatherDetail';

export default function Weather() {
  return (
    <Layout>
      <MainTitle title='날씨' />
      <WeatherInfo />
      <WeatherDetail />
    </Layout>
  );
}
