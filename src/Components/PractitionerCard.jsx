import Image from "next/image";

export default function PractitionerCard({ name, phone }) {
  return (
    <>
      <p className="my-2 text-lg text-gray-500">Assign Paractitioner</p>
      <div className="flex items-center justify-between bg-white rounded-lg p-2">
        <div className="flex items-center gap-3">
          <Image src={'/dummygirlprofileimage.jpg'} alt="" width={40} height={40} className="rounded-full" />
          <div>
            <p className="font-medium text-lg text-gray-700">{name}</p>
            <p className="text-xs text-gray-500">{phone}</p>
          </div>
        </div>
      </div>
    </>
  );
}
