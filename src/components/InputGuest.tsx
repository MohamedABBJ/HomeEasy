const labelGuest = [
  {
    id: 0,
    title: "Adults",
    descr: "Age 13 or above",
  },
  {
    id: 1,
    title: "Children",
    descr: "Ages 2 - 12",
  },
  {
    id: 2,
    title: "Infants",
    descr: "Under 2",
  },
  {
    id: 3,
    title: "Pets",
    descr: "Bringing a service animal?",
  },
]

export default function InputGuest() {
  return (
    <div className="absolute shadow-md bg-popover rounded-3xl top-16 left-0 border py-4 px-8 min-w-[406px]">
      {/*--------*/}

      {labelGuest.map((el, idx) => (
        <div
          className={`flex justify-between py-6 ${
            idx !== labelGuest.length - 1 ? "border-b" : ""
          }`}
          key={el.id}
        >
          <div className="">
            <h4 className="font-medium text-textNavbar-primary ">
              {" "}
              {el.title}{" "}
            </h4>
            <p
              className={`text-sm text-textNavbar-secondary py-1 ${
                idx === labelGuest.length - 1 ? "underline font-medium" : ""
              }`}
            >
              {" "}
              {el.descr}
            </p>
          </div>
          <input type="number" name="" id="" defaultValue={0} />
        </div>
      ))}
      {/*--------*/}
    </div>
  )
}
