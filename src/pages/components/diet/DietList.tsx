import { useState, ChangeEvent, MouseEvent, useRef, useEffect } from 'react';
import { DietItems } from '@/type/type';
import { useDelete } from '@/pages/hooks/useDelete';
import Input from '../input/Input';
import Category from './Category';
import DietItem from './DietItem';

export default function DietList() {
  const [value, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [diet, setDiet] = useState<DietItems[]>([]);
  const [filterItem, setFilterItem] = useState<DietItems[]>([]);
  const [id, setId] = useState(0);
  const [itemLength, setItemLength] = useState(0);

  const countRef = useRef(1);
  const { handleDeleteClick } = useDelete(diet, setDiet);

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const updateItem = (id: number, update: Partial<DietItems>) => {
    setDiet((prev) => prev.map((item) => (item.id === id ? { ...item, ...update } : item)));
  };

  const handleAddClick = (e?: MouseEvent<HTMLUListElement>) => {
    if (e) {
      const target = e.target as HTMLElement;
      const selected = target.getAttribute('data-value');
      if (!selected) return;
      const dietList: DietItems = {
        id: id,
        text: value,
        category: selected,
        file: null,
        kcal: 0,
        rating: 0,
        review: '',
      };

      setSelectedValue(selected);
      setId(countRef.current++);
      setValue('');
      setDiet((prev) => [...prev, dietList]);
    }
  };

  const handleCategoryClick = (id: string) => {
    setSelectedValue(id);
  };

  useEffect(() => {
    const filterItem = diet.filter((item: DietItems) => item.category === selectedValue);
    setItemLength(filterItem.length);
    setFilterItem(filterItem);
  }, [diet, selectedValue]);

  return (
    <>
      <Input
        type='dropdown'
        value={value}
        selectedValue={selectedValue}
        onChange={handleValueChange}
        onClick={handleAddClick}
      />
      {selectedValue && (
        <div className='xl:w-[60rem] w-full m-auto'>
          <Category selectedValue={selectedValue} handleCategoryClick={handleCategoryClick} />
          <DietItem
            itemLength={itemLength}
            filterItem={filterItem}
            handleDeleteClick={handleDeleteClick}
            updateItem={updateItem}
          />
        </div>
      )}
    </>
  );
}