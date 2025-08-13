export default function HeaderBar({ title }) {
  return (
    <div className="flex items-center p-4 bg-transparent">
      <button className="text-lg">←</button>
      <h1 className="flex-1 text-center text-sm font-semibold">{title}</h1>
      <div className="w-6"></div>
    </div>
  );
}
