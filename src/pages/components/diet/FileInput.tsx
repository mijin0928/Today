import { ChangeEvent, useEffect, useState } from 'react';
import Image from 'next/image';

export default function FileInput({ id }) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState('');
  const isFileValue = preview ? preview : '/camera.png';
  const size = preview ? '200' : '100';

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setFile(file);
    console.log(file);
  };

  useEffect(() => {
    if (file) {
      const image = URL.createObjectURL(file);
      setPreview(image);
    }

    return () => {
      URL.revokeObjectURL(file);
    };
  }, [file]);

  return (
    <div className='shrink-0 w-[13.5rem]'>
      <label className='cursor-pointer' htmlFor={`file${id}`}>
        <Image className='m-auto cursor-pointer' src={isFileValue} width={size} height={size} alt='이미지' />
      </label>
      <input className='hidden' id={`file${id}`} type='file' onChange={handleFileChange} />
    </div>
  );
}
