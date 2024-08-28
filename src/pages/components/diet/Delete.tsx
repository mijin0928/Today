import { DeleteProps } from '@/type/type';

export default function Delete({ id, handleDeleteClick }: DeleteProps) {
  return (
    <button
      className='overflow-hidden absolute top-[-3rem] right-[-0.5rem] sm:static w-11 h-11 indent-[100%] whitespace-nowrap bg-delete bg-no-repeat bg-contain hover:bg-deleteOn'
      type='button'
      onClick={() => handleDeleteClick(id)}
    >
      삭제하기
    </button>
  );
}
