import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BASE_URL, KEY, WEATHER } from '@/constant/constant';
import { useQuery } from '@tanstack/react-query';
import { getWeather } from '@/pages/api/api';
import { PositionError, WeatherItem } from '@/type/type';
import Loading from '../loading/loading';

export default function WeatherInfo() {
  const [description, setDescription] = useState('');
  const [id, setId] = useState(0);
  const [weather, setWeather] = useState('');
  const [weatherDetail, setWeatherDetail] = useState<WeatherItem[]>([]);

  const success = (pos: GeolocationPosition) => {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;

    setWeather(`${BASE_URL}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}&units=metric`);
  };

  const error = (err: PositionError) => {
    console.error(`${err.code}:${err.message}`);
  };

  const { data: weatherData, isLoading: weatherDataLoading } = useQuery({
    queryKey: [weather],
    queryFn: () => getWeather(weather),
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);

    if (weatherData) {
      const weather: WeatherItem[] = [
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

      setWeatherDetail(weather);
      setId(weatherData.weather[0].id);
    }

    const weatherKo = WEATHER.find((weather) => weather.id === id);
    if (weatherKo) {
      setDescription(weatherKo.description);
    }
  }, [id, weatherData]);

  if (weatherDataLoading) return <Loading />;

  return (
    <div>
      <div className='relative sm:flex sm:items-center sm:justify-center md:justify-start gap-10 md:gap-20'>
        <Image
          className='w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] m-auto sm:m-0 rounded-full'
          src={`/icons/${weatherData.weather[0].icon}.gif`}
          width={0}
          height={0}
          alt='오늘의 날씨'
        />
        <div className='text-primary text-center md:text-left'>
          <div className='relative'>
            <p className='absolute left-[calc(50%_-_4.3rem)] md:left-0 min-[1200px]:inline-block text-[3rem] md:text-[4.3rem] text-white [clip-path:polygon(0_70%,_100%_50%,_100%_100%,_0%_100%)] animate-skew'>
              {weatherData.name}
            </p>
            <p className='min-[1200px]:inline-block text-[3rem] md:text-[4.3rem]'>{weatherData.name}</p>
            <p className='absolute overflow-hidden min-[1200px]:inline-block left-[calc(50%_-_5.3rem)] md:left-[auto] h-[2rem] md:h-[3rem] md:text-[4.5rem] min-[1200px]:ml-4 text-[3rem] text-white animate-skew'>
              {weatherData.main.temp}
              <span className='text-[3rem] md:text-[4.3rem]'>&#8451;</span>
            </p>
            <p className='min-[1200px]:inline-block md:text-[4.5rem] min-[1200px]:ml-4 text-[3rem]'>
              {weatherData.main.temp}
              <span className='text-[3rem] md:text-[4.3rem]'>&#8451;</span>
            </p>
          </div>
          <p className='mt-3 md:mt-4 text-[2rem] md:text-[2.8rem] break-word'>{description}</p>
        </div>
      </div>
      <ul className='flex flex-wrap mt-16 gap-5'>
        {weatherDetail.map((weather, i) => (
          <li
            className='px-5 py-5 rounded-3xl h-auto w-[calc(50%_-_0.62rem)] md:w-[calc(33.3%_-_0.82rem)] 2xl:w-[calc(25%_-_5rem)] shadow-[3px_3px_3px_rgba(0,0,0,0.163)] bg-white'
            key={i}
          >
            <Image className='m-[auto]' src={weather.src} width={100} height={100} alt={weather.alt} />
            <p className='mt-5 text-[2rem] md:text-[2.8rem] text-center text-primary leading-none'>
              {weather.data}
              <span className='inline-block text-[1.5rem] md:text-[2rem] break-words'>{weather.text}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
