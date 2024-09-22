import { ChangeEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import { FileInputProps } from '@/type/type';

export default function FileInput({ id, file, updateItem }: FileInputProps) {
  const [url, setUrl] = useState('/camera.png');
  const [size, setSize] = useState(130);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    if (e.target.files) {
      updateItem(id, { file: e.target.files[0] });
    }
  };

  useEffect(() => {
    if (file) {
      const image = URL.createObjectURL(file);
      setUrl(image);
      setSize(250);

      return () => {
        URL.revokeObjectURL(image);
      };
    }
  }, [file]);

  return (
    <div>
      <label className='cursor-pointer' htmlFor={`file${id}`}>
        <Image className={`m-auto cursor-pointer`} src={url} width={size} height={size} alt='이미지' />
      </label>
      <input className='hidden' id={`file${id}`} type='file' onChange={(e) => handleFileChange(e, id)} />
    </div>
  );
}
