import React, { Suspense } from 'react'
import './TrendingSearches.css'
import useNearScreen from 'hooks/useNearScreen'

const TrendingSearches = React.lazy(() => import('./TrendingSearches'))

export default function LazyTrending() {
  // Use custom hook
  const { isNearScreen, fromRef } = useNearScreen({ distance: '1000px' })

  return (
    <div ref={fromRef}>
      {isNearScreen && (
        <Suspense fallback={null}>
          <TrendingSearches />
        </Suspense>
      )}
    </div>
  )
}
