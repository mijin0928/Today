import { ChangeEvent } from 'react';

export default function KcalInput({ id, title, kcal, updateItem }) {
  const handleKcalValueChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    updateItem(id, { kcal: Number(e.target.value) || 0 });
  };

  return (
    <div>
      <p className='inline-block'>{title}</p>
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
