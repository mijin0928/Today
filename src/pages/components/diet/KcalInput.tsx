export default function KcalInput({ kcal }: { kcal: string }) {
  return (
    <div>
      {kcal}
      <input className='w-16 ml-5 mr-2 outline-none border-b-2 border-primary text-center' type='text' autoFocus />
      <span>kcal</span>
    </div>
  );
}
