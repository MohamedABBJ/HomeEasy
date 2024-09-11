export default function Inputs({ type, children, activeModals, name }) {
  const style = {
    effect:
      "before:opacity-100 before:z-1 before:!bg-white before:shadow-2lg after:opacity-0",
    big: "px-8 py-3.5 cursor-pointer min-w-[261px] relative hover:before:opacity-100 hover:after:opacity-0 before:content-[''] before:absolute before:top-0 before:-z-10 before:left-0 before:w-full before:h-full before:rounded-full before:bg-zinc-100 before:opacity-0 after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[1px] after:h-2/4 after:bg-zinc-200 after:-translate-y-1/2",
    small:
      "px-6 py-3.5 cursor-pointer  min-w-[140.5px] relative hover:before:opacity-100 hover:after:opacity-0 before:content-[''] before:absolute before:top-0 before:-z-10 before:left-0 before:w-full before:h-full before:rounded-full before:bg-zinc-100 before:opacity-0 after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[1px] after:h-2/4 after:bg-zinc-200 after:-translate-y-1/2",
    bigNoBorder:
      "px-8 py-3.5 cursor-pointer relative min-w-[261px] hover:before:opacity-100 hover:after:opacity-0 before:content-[''] before:absolute before:top-0 before:-z-10 before:left-0 before:w-full before:h-full before:rounded-full before:bg-zinc-100 before:opacity-0",
  };

  return (
    <div
      className={`${style[type]} ${activeModals === name ? style.effect : " "}`}
      data-name={name}
    >
      {children}
    </div>
  );
}
