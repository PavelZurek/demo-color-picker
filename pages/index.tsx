import { NextPage } from 'next'
import { Container, Stack } from '@mui/material'
import { ColorGenerator } from '../src/components/ColorGenerator'
import { PrimaryColorHistory } from '../src/components/PrimaryColorHistory'

const IndexPage: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Stack paddingY={4} spacing={4}>
        <ColorGenerator />
        <PrimaryColorHistory />
      </Stack>
    </Container>
  )
}

export default IndexPage
