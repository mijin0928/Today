import { ChangeEvent } from 'react';
import { KcalInputProps } from '@/type/type';

export default function KcalInput({ id, text, kcal, updateItem }: KcalInputProps) {
  const handleKcalValueChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    updateItem(id, { kcal: Number(e.target.value) || 0 });
  };

  return (
    <div className='mt-10 text-center'>
      <p className='inline-block break-all'>{text}</p>
      <input
        className='w-16 ml-5 mr-2 outline-none border-b-2 border-primary text-center'
        type='text'
        value={kcal}
        onChange={(e) => handleKcalValueChange(e, id)}
        name='kcal'
        autoFocus
      />
      <span>kcal</span>
    </div>
  );
}
