import { NextPage } from 'next'
import { Container } from '@mui/material'
import { ColorGenerator } from '../src/components/ColorGenerator'
import { PrimaryColorHistoryList } from '../src/components/PrimaryColorHistoryList'

const IndexPage: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <ColorGenerator />
      <PrimaryColorHistoryList />
    </Container>
  )
}

export default IndexPage
