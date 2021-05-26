import React from 'react'
import { Container, Stack } from '@chakra-ui/react'
import Header from './Header'

const Layout = ({ children }) => (
  <Stack minHeight="100vh" className="App-content">
    <Container maxW="6xl" alignSelf="center">
      <Header />
      {children}
    </Container>
  </Stack>
)

export default Layout
