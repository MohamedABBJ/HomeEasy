"use client"

export default function InputNavbar() {
  return (
    <div className="w-full flex items-center justify-center border-b pb-4">
      <div className="rounded-full shadow-3xl flex py-3.5">
        <div className="px-8 border-r cursor-pointer">
          <p className="text-xs font-medium text-txtprimary"> Where</p>
          <p className="text-sm text-[hsl(0,0%,69%)]"> Search destinations</p>
        </div>

        <div className="px-6 cursor-pointer border-r">
          <p className="text-xs font-medium text-txtprimary"> Check in</p>
          <p className="text-sm text-txtsecondary"> Add dates</p>
        </div>

        <div className="px-6 cursor-pointer border-r">
          <p className="text-xs font-medium text-txtprimary"> Check out</p>
          <p className="text-sm text-txtsecondary"> Add dates</p>
        </div>

        <div className="px-8 cursor-pointer grow">
          <p className="text-xs font-medium text-txtprimary"> Who</p>
          <p className="text-sm text-txtsecondary"> Add guests</p>
        </div>
      </div>
    </div>
  )
}
