import { useEffect, useRef } from "react"

//TO-DO
////Typescript for event (e)

export function useClickOutside(actionFunction) {
  const modalRef = useRef()
  useEffect(
    function () {
      function handleClickOutside(e) {
        if (
          modalRef.current &&
          !modalRef.current.contains(e.target) &&
          !e.target.dataset.modalname
        ) {
          actionFunction("")
        }
      }
      document.addEventListener("click", handleClickOutside)

      return () => document.removeEventListener("click", handleClickOutside)
    },
    [actionFunction]
  )

  return modalRef
}
