import React from "react"

const country = [
  {
    id: 0,
    img: "/world.jpg",
    label: "I'm flexible",
  },
  {
    id: 1,
    img: "/us.webp",
    label: "United States",
  },

  {
    id: 2,
    img: "/spain.webp",
    label: "Spain",
  },

  {
    id: 3,
    img: "/southAsia.webp",
    label: "Southeast Asia",
  },

  {
    id: 4,
    img: "/greece.webp",
    label: "Greece",
  },

  {
    id: 5,
    img: "/southAmerica.webp",
    label: "South America",
  },
]

export default function InputModals() {
  return (
    <div className="cursor-auto absolute shadow-md bg-popover rounded-3xl top-16 left-0 border py-8 px-6 min-w-[428px]">
      {" "}
      <h4 className="ml-2 mb-4 text-sm font-medium">Search by region</h4>
      <div className="grid grid-cols-3 grid-rows-2">
        {country.map((el) => (
          <div
            key={el.id}
            className="p-2 rounded-2xl hover:bg-inputModals cursor-pointer"
          >
            <div className="rounded-2xl">
              <img src={el.img} alt="Img" className="rounded-2xl" />
            </div>
            <span className="text-sm">{el.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
