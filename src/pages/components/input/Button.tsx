import { InputProps } from '@/type/type';

export default function Button({ value, onClick }: InputProps) {
  const handleEnterClick = () => {
    if (value === '') return;
    onClick();
  };

  return (
    <button
      className='shrink-0 py-2 px-3 text-[1.18rem] bg-primary text-white'
      type='button'
      onClick={handleEnterClick}
    >
      입력
    </button>
  );
}
