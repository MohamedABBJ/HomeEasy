import { X } from "lucide-react";

export default function ResetInput({ action, target, type }) {
  function handleAction(target) {
    action((target) =>
      typeof target === "string"
        ? (target = "")
        : Array.isArray(target)
          ? (target = target.map((el) => {
              return {
                ...el,
                value: 0,
              };
            }))
          : (target = {}),
    );
  }

  return (
    <div
      className={`w-6 h-6 rounded-full absolute top-1/2 ${type ? "right-32" : "right-4"} -translate-y-1/2 flex justify-center items-center z-50 hover:bg-[#dddddd]`}
      onClick={() => handleAction(target)}
    >
      <X size={14} strokeWidth={2} color="#222222" />
    </div>
  );
}
