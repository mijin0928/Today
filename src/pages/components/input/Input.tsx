import { InputProps } from '@/type/type';
import Dropdown from './Dropdown';
import Button from './Button';

export default function Input({ type, value, onClick, onChange, onKeyDown }: InputProps) {
  return (
    <div className='flex justify-center items-center 2xl:justify-start]'>
      <input
        className='w-[37.5rem] h-[3.55rem] pl-6 mr-6 outline-none text-[1.18rem] shadow-[2px_2px_2px_#e9d6d64b] text-primary placeholder:text-[1.18rem] max-sm:text-base'
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        type='text'
      />
      {type === 'button' ? (
        <Button value={value} onClick={onClick} />
      ) : (
        <Dropdown value={value} onClick={onClick} />
      )}
    </div>
  );
}
