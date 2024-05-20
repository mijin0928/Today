import Image from 'next/image';
import { useWeather } from '@/pages/hooks/useWeather';

export default function WeatherDetail() {
  const { weatherData, weatherDataLoading } = useWeather();
  if (weatherDataLoading) return <div>로딩중</div>;

  const WEATHER = [
    {
      id: 'lowTemp',
      src: '/icons/low-temperature.png',
      data: weatherData.main.temp_min,
      alt: '최저온도',
      text: '℃',
    },
    {
      id: 'highTemp',
      src: '/icons/high-temperature.png',
      data: weatherData.main.temp_max,
      alt: '최고온도',
      text: '℃',
    },
    {
      id: 'humidity',
      src: '/icons/humidity.png',
      data: weatherData.main.humidity,
      alt: '습도',
      text: '%',
    },
    {
      id: 'clouds',
      src: '/icons/clouds.png',
      data: weatherData.clouds.all,
      alt: '구름',
      text: '%',
    },
    {
      id: 'wind',
      src: '/icons/wind.png',
      data: weatherData.wind.speed,
      alt: '바람',
      text: 'm/s',
    },
  ];

  return (
    <ul className='flex flex-wrap mt-20 gap-5'>
      {WEATHER.map((weather, i) => (
        <li
          className=' px-5 py-5 rounded-3xl w-[calc(50%_-_1.25rem)] md:w-[calc(33.3%_-_1.25rem)] xl:w-[calc(20%_-_1.25rem)] h-[auto] shadow-[3px_3px_3px_rgba(0,0,0,0.163)] bg-white'
          key={i}
        >
          <Image className='m-[auto]' src={weather.src} width={100} height={100} alt={weather.alt} />
          <p className='mt-5 text-[2rem] md:text-[3rem] text-center text-primary leading-none'>
            {weather.data}
            <span className='block md:inline-block text-[1.5rem] md:text-[2rem]'>{weather.text}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}
