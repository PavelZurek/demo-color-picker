import { NextPage } from 'next'
import { Container } from '@mui/material'
import { ColorGenerator } from '../src/components/ColorGenerator'

const IndexPage: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <ColorGenerator />
    </Container>
  )
}

export default IndexPage
