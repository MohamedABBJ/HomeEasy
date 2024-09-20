"use client";

export default function LoginRegister() {
    return (
        <div className="w-full border p-6">
            <h2 className="text-[1.375rem] leading-[1.625rem] font-medium mb-2">
                Welcome to HomeEase
            </h2>
            <form action="" method="POST">
                <div className="mt-4 border rounded-xl flex flex-col">
                    <div className="mt-[26px] ml-3 mr-[36px] mb-[10px]">
                        <select className="bg-transparent rounded-xl w-full">
                            <option value="39IT"> Italy (+39)</option>
                        </select>
                    </div>
                    <input
                        type="text"
                        className="pt-[26px] pl-3 pr-[36px] pb-[10px] rounded-b-xl border-t  outline-0 focus:rounded-xl"
                        placeholder="Phone number"
                    />
                </div>
            </form>
        </div>
    );
}
