import { useState, ChangeEvent, MouseEvent } from 'react';
import Input from '../input/Input';
import Tab from './Tab';

export default function Diet() {
  const [value, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleValueClick = (e: MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;
    const value = target.getAttribute('data-value');
    if (value === null) return;

    setSelectedValue(value);
    setValue('');
  };

  return (
    <>
      <Input
        type='dropdown'
        value={value}
        selectedValue={selectedValue}
        onChange={handleValueChange}
        onClick={handleValueClick}
      />
      <Tab selectedValue={selectedValue} />
    </>
  );
}
