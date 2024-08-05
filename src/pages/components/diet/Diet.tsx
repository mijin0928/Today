import { useState, ChangeEvent, MouseEvent, useRef, useEffect } from 'react';
import { DietItems } from '@/type/type';
import { useDelete } from '@/pages/hooks/useDelete';
import Input from '../input/Input';
import Category from './Category';

export default function Diet() {
  const [value, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [diet, setDiet] = useState<DietItems[]>([]);
  const [id, setId] = useState(0);
  const [hasItem, setHasItem] = useState(0);
  const countRef = useRef(1);
  const { handleDeleteClick } = useDelete(id, diet, setDiet);

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleValueClick = (e: MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;
    const selected = target.getAttribute('data-value');
    if (!selected) return;
    const dietList = { id: id, text: value, category: selected };

    setSelectedValue(selected);
    setId(countRef.current++);
    setValue('');
    setDiet((prev) => [...prev, dietList]);
  };

  const handleCategoryClick = (id: string) => {
    setSelectedValue(id);
  };

  useEffect(() => {
    const itemLength = diet.filter((item: DietItems) => item.category === selectedValue).length;
    setHasItem(itemLength);
  }, [diet, selectedValue]);

  return (
    <>
      <Input
        type='dropdown'
        value={value}
        selectedValue={selectedValue}
        onChange={handleValueChange}
        onClick={handleValueClick}
      />
      {selectedValue && (
        <Category
          selectedValue={selectedValue}
          diet={diet}
          hasItem={hasItem}
          handleCategoryClick={handleCategoryClick}
          handleDeleteClick={handleDeleteClick}
        />
      )}
    </>
  );
}
