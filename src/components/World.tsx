import country from "@/lib/country.json";

export default function World() {
    return (
        <div className="px-6">
            <h2 className="text-textNavbar-primary py-6 text-[1.375rem] font-medium leading-[1.625rem]">
                Choose a language and a region
            </h2>
            <div className="grid grid-cols-world gap-2 overflow-y-scroll max-h-[70vh]">
                {country.map((c, idx) => (
                    <div
                        key={idx}
                        className={`py-[0.563rem] px-3 rounded-lg hover:bg-[#f7f7f7] cursor-pointer ${idx === 0 ? "border border-black" : ""}`}
                    >
                        <p className="text-sm text-textNavbar-primary leading-[1.125rem]">
                            {c.language}
                        </p>
                        <p className="text-sm text-textNavbar-secondary leading-[1.125rem]">
                            {c.country}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
