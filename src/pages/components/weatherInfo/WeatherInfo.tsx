import Image from 'next/image';
import { useEffect, useState } from 'react';
import { WEATHER } from '@/constant/constant';
import { useWeather } from '../../hooks/useWeather';

export default function WeatherInfo() {
  const [description, setDescription] = useState('');
  const [id, setId] = useState(0);
  const { success, error, weatherData, weatherDataLoading } = useWeather();

  useEffect(() => {
    if (weatherData) {
      setId(weatherData.weather[0].id);
    }

    const weatherKo = WEATHER.find((weather) => weather.id === id);
    if (weatherKo) {
      setDescription(weatherKo.description);
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }, [id, weatherData]);

  if (weatherDataLoading) return <div>로딩중</div>;

  return (
    <div className='relative md:flex md:items-center md:gap-20'>
      <Image
        className='w-[14rem] h-[14rem] md:w-[20rem] md:h-[20rem] m-auto md:m-0 rounded-full'
        src={`/icons/${weatherData.weather[0].icon}.gif`}
        width={0}
        height={0}
        alt='오늘의 날씨'
      />
      <div className='text-primary text-center md:text-left'>
        <div className='relative'>
            <p className='absolute left-[calc(50%_-_5.1rem)] md:left-0 min-[1200px]:inline-block text-[3.5rem] md:text-[4.3rem] text-white [clip-path:polygon(0_70%,_100%_50%,_100%_100%,_0%_100%)] animate-skew'>
            {weatherData.name.split('-')[0]}
          </p>
          <p className='min-[1200px]:inline-block text-[3.5rem] md:text-[4.3rem]'>
            {weatherData.name.split('-')[0]}
          </p>
           <p className='absolute overflow-hidden min-[1200px]:inline-block left-[calc(50%_-_6.3rem)] md:left-[auto] h-[3rem] md:text-[4.5rem] min-[1200px]:ml-4 text-[3.5rem] text-white animate-skew'>
            {weatherData.main.temp}
            <span className='text-[4rem] md:text-[4.3rem]'>&#8451;</span>
          </p>
          <p className='min-[1200px]:inline-block md:text-[4.5rem] min-[1200px]:ml-4 text-[3.5rem]'>
            {weatherData.main.temp}
            <span className='text-[4rem] md:text-[4.3rem]'>&#8451;</span>
          </p>
        </div>
        <p className='mt-4 text-[2.5rem] md:text-[2.8rem] break-keep'>{description}</p>
      </div>
    </div>
  );
}
