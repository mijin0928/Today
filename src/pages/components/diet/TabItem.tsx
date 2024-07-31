export default function TabItem({ selectedValue, todo }) {
  return (
    <div className='p-4 text-primary text-[1.2rem] rounded-b-2xl bg-white'>
      {todo.map(
          (item) =>
            item.category === selectedValue && (
              <ul key={item.id}>
                <li>{item.text}</li>
              </ul>
            )
        )}
    </div>
  );
}
