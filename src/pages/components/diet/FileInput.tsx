import { ChangeEvent, useEffect, useState } from 'react';
import Image from 'next/image';

export default function FileInput({ id, file, updateItem }) {
  const [url, setUrl] = useState('');
  const isFileValue = url ? url : '/camera.png';
  const size = url ? '200' : '100';

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    if (e.target.files) {
      updateItem(id, { file: e.target.files[0] });
    }
  };

  useEffect(() => {
    if (!file) return;
  
    const image = URL.createObjectURL(file);
    setUrl(image);
   
    return () => {
      URL.revokeObjectURL(image);
      setUrl('');
    };
  
  },[file]);

  return (
    <div className='w-[13.5rem]'>
      <label className='cursor-pointer' htmlFor={`file${id}`}>
        <Image className='m-auto cursor-pointer' src={isFileValue} width={size} height={size} alt='이미지' />
      </label>
      <input className='hidden' id={`file${id}`} type='file' onChange={(e) => handleFileChange(e, id)} />
    </div>
  );
}
