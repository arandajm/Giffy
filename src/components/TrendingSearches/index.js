import React, { useState, useEffect } from 'react'
import getTrendingTerms from '../../services/getTrendingTermsService'
import CategoryList from '../CategoryList'
import './TrendingSearches.css'

const TrendingSearches = () => {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingTerms().then(trendings => setTrends(trendings))
  }, [])

  return (
    <div className="TrendingSearches">
      <CategoryList title="Trending Searches" options={trends} />
    </div>
  )
}

export default TrendingSearches
