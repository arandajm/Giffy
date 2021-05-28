import { Input, Stack, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useLocation } from 'wouter'

const Header = () => {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  return (
    <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center" alignItems="center">
      <Image
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/76/Giphy_Logo_9.2016.svg"
        alt="logo"
        width={{ base: '50%', md: '25%' }}
      />
      <form onSubmit={handleSubmit}>
        <Input placeholder="Search all the gifs..." value={keyword} onChange={evt => setKeyword(evt.target.value)} />
      </form>
    </Stack>
  )
}

export default Header
