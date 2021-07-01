import React from 'react'
import './TrendingSearches.css'
import useNearScreen from 'hooks/useNearScreen'
import TrendingSearches from './TrendingSearches'

export default function LazyTrending() {
  // Use custom hook
  const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' })

  return <div ref={fromRef}>{isNearScreen && <TrendingSearches />}</div>
}
