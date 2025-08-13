
export default function PractitionerCard({ name, phone }) {
  return (
    <div className="flex items-center justify-between bg-white rounded-lg p-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-300" />
        <div>
          <p className="font-medium text-sm">{name}</p>
          <p className="text-xs text-gray-500">{phone}</p>
        </div>
      </div>
    </div>
  );
}
