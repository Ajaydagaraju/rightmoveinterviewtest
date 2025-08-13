export default function FooterButtons({ onCancel, onConfirm }) {
  return (
    <div className="flex gap-3 p-4 ">
      <button
        onClick={onCancel}
        className="flex-1 border border-red-400 text-red-500 py-2 rounded-lg"
      >
        Cancel
      </button>
      <button
        onClick={onConfirm}
        className="flex-1 bg-gradient-to-r from-[#e3a6b7] to-[#d7b0e9] text-white py-2 rounded-lg"
      >
        Confirm
      </button>
    </div>
  );
}
