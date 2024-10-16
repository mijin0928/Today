import { useState, ChangeEvent, MouseEvent, useEffect } from 'react';
import { DietItems } from '@/type/type';
import { useDelete } from '@/hooks/useDelete';
import { useId } from '@/hooks/useId';
import Input from '../input/Input';
import Category from './Category';
import DietItem from './DietItem';
import Count from '../toDo/Count';

export default function DietList() {
  const [value, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [diet, setDiet] = useState<DietItems[]>([]);
  const [filterItem, setFilterItem] = useState<DietItems[]>([]);
  const [itemLength, setItemLength] = useState(0);
  const { id, onId } = useId();
  const { handleDeleteClick } = useDelete(diet, setDiet);
  const isVisible = !selectedValue && 'invisible';

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
      onId();
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
      <div className={`2xl:flex 2xl:flex-row-reverse 2xl:justify-end 2xl:gap-20 text-center ${isVisible}`}>
        <Count filterItem={filterItem} />
        <div className='2xl:w-[45rem] w-full mt-5 2xl:mt-0'>
          <Category selectedValue={selectedValue} handleCategoryClick={handleCategoryClick} />
          <DietItem
            itemLength={itemLength}
            filterItem={filterItem}
            handleDeleteClick={handleDeleteClick}
            updateItem={updateItem}
          />
        </div>
      </div>
    </>
  );
}
