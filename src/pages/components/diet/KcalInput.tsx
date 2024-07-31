export default function KcalInput({ text }) {
  return (
    <div>
      {text}
      <input className='w-16 ml-5 mr-2 outline-none border-b-2 border-primary text-center' type='text' autoFocus />
      <span>kcal</span>
    </div>
  );
}
