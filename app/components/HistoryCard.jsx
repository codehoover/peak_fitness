export default function HistoryCard({ date, weight }) {
  return (
    <div className="flex flex-row justify-between items-center p-6 w-3/6 border-b rounded-sm hover:bg-neutral-500 duration-300">
      <section>{date}</section>
      <section>{weight}</section>
    </div>
  );
}
