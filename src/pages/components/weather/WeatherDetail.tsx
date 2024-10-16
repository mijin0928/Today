import Image from 'next/image';
import { WeatherItem } from '@/type/type';

export default function WeatherDetail({ weatherDetail }: { weatherDetail: WeatherItem[] }) {
  return (
    <ul className='flex flex-wrap mt-16 gap-5'>
      {weatherDetail.map((weather, i) => (
        <li
          className='px-5 py-5 rounded-3xl h-auto w-full md:w-[calc(50%_-_0.625rem)] 2xl:w-[calc(20%_-_1.25rem)] shadow-[3px_3px_3px_rgba(0,0,0,0.163)] bg-white'
          key={i}
        >
          <Image className='m-auto' src={weather.src} width={100} height={100} alt={weather.alt} />
          <p className='mt-5 text-[2rem] md:text-[2.8rem] text-center text-primary break-all leading-none'>
            {weather.data}
            <span className='inline-block text-[1.5rem] md:text-[2rem] break-all'>{weather.text}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}
