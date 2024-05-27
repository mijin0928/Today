import { useState, useEffect } from 'react';
import { BASE_URL, KEY } from '@/constant/constant';
import { useQuery } from '@tanstack/react-query';
import { getWeather } from '../api/api';

interface PositionError {
  readonly code: number;
  readonly message: string;
}

export function useWeather() {
  const [weather, setWeather] = useState('');

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
  }, []);

  return {
    weatherData,
    weatherDataLoading,
  };
}
