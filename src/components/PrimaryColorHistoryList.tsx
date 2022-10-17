import { FC } from 'react'
import { Box, IconButton, Stack } from '@mui/material'
import { useColorStore } from '../hooks/useColorStore'
import { SetPrimaryColorButton } from './SetPrimaryColorButton'
import { Clear } from '@mui/icons-material'

const ListItem: FC<{ color: string }> = ({ color }) => {
  const removePrimaryColor = useColorStore((state) => state.removePrimaryColor)

  return (
    <Box>
      <SetPrimaryColorButton color={color} />
      <IconButton
        title="Remove from history"
        onClick={() => {
          removePrimaryColor(color)
        }}
      >
        <Clear />
      </IconButton>
    </Box>
  )
}

export const PrimaryColorHistoryList: FC = () => {
  const primaryColorHistory = useColorStore(
    (state) => state.primaryColorHistory
  )

  return (
    <Stack direction="row" justifyContent="space-between">
      {primaryColorHistory?.map((color) => (
        <ListItem color={color} />
      ))}
    </Stack>
  )
}
