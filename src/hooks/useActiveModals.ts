import { useEffect, useRef } from "react"

export function useActiveModals(actionFunction) {
  const containerModalRef = useRef(null)
  useEffect(
    function () {
      function handleActiveModal(e): void {
        let name =
          e.target.dataset.name ?? e.target.parentElement?.dataset.name ?? ""

        if (!name && containerModalRef.current.contains(e.target)) {
          actionFunction((sm) => (sm = sm))
        } else if (name) {
          actionFunction((sm) => (sm = name))
        } else {
          actionFunction("")
        }
      }

      document.addEventListener("click", handleActiveModal)

      return () => document.removeEventListener("click", handleActiveModal)
    },
    [actionFunction]
  )

  return containerModalRef
}
