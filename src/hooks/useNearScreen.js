import { useState, useEffect, useRef } from 'react'

export default function useNearScreen({ distance = '100px' }) {
  const fromRef = useRef()
  const [isNearScreen, setIsNearScreen] = useState(false)
  useEffect(() => {
    const onChange = (entries, observer) => {
      const elementToObserve = entries[0]
      if (elementToObserve.isIntersecting) {
        setIsNearScreen(true)
        // disconnect after setShow
        observer.disconnect()
      }
    }
    // Create observer using IntersectionObserver to check if the element is in the viewport
    const observer = new IntersectionObserver(onChange, { rootMargin: distance })
    //Observe element to load
    observer.observe(fromRef.current)

    // disconnect on clean up step
    return () => observer.disconnect()
  }, [])

  return { isNearScreen, fromRef }
}
