import React from "react"

const useDisclosure = (isOpenDefault = false) => {
  const [isOpen, setIsOpen] = React.useState(isOpenDefault)

  const onOpen = React.useCallback(() => setIsOpen(true), [])
  const onClose = React.useCallback(() => setIsOpen(false), [])
  const onToggle = React.useCallback((toSet: any) => {
    if (typeof toSet === "undefined") {
      setIsOpen((state) => !state)
    } else {
      setIsOpen(toSet)
    }
  }, [])

  return { isOpen, onOpen, onClose, onToggle }
}

export { useDisclosure }
