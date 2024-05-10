import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BASE_URL, KEY, WEATHER } from '@/constant/constant';
import { useQuery } from '@tanstack/react-query';
import { getWeather } from '../../api/api';

interface PositionError {
  readonly code: number;
  readonly message: string;
}

export default function WeatherInfo() {
  const [icon, setIcon] = useState('');
  const [name, setName] = useState('');
  const [temp, setTemp] = useState(0);
  const [description, setDescription] = useState('');
  const [id, setId] = useState(0);
  const [weather, setWeather] = useState('');

  const success = (pos: GeolocationPosition) => {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;

    setWeather(`${BASE_URL}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}&units=metric`);
  };

  const error = (err: PositionError) => {
    console.error(`${err.code}:${err.message}`);
  };

  const { data: WeatherData, isLoading: WeatherDataLoading } = useQuery({
    queryKey: [weather],
    queryFn: () => getWeather(weather),
  });

  useEffect(() => {
    const weatherKo = WEATHER.find((weather) => weather.id === id);
    if (weatherKo) {
      setDescription(weatherKo.description);
    }

    if (WeatherData) {
      setName(WeatherData.name.split('-')[0]);
      setIcon(WeatherData.weather[0].icon);
      setTemp(WeatherData.main.temp);
      setId(WeatherData.weather[0].id);
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }, [id, WeatherData]);

  if (WeatherDataLoading) return <div>로딩중</div>;

  return (
    <div className='relative flex items-center gap-20'>
      <Image
        className='rounded-full w-[20rem] h-[20rem]'
        src={`/icons/${icon}.gif`}
        width={100}
        height={100}
        alt='오늘의 날씨'
      />
      <div className='text-primary'>
        <div className='relative'>
          <p className='absolute left-0 top-0 text-[4.3rem] text-white [clip-path:polygon(0_70%,_100%_50%,_100%_100%,_0%_100%)] animate-skew'>
            {name}
          </p>
          <p className='inline-block text-[4.3rem]'>{name}</p>
          <p className='absolute overflow-hidden right-[3.5rem] top-0 h-[50px] text-[4.3rem] text-white animate-skew'>
            {temp}
          </p>
          <p className='inline-block ml-2 text-[4.5rem]'>
            {temp}
            <span className='text-[4.3rem]'>&#8451;</span>
          </p>
        </div>
        <p className='mt-4 text-[2.8rem]'>{description}</p>
      </div>
    </div>
  );
}
