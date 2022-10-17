import { FC } from 'react'
import { IconButton, Stack, Typography } from '@mui/material'
import { useColorStore } from '../hooks/useColorStore'
import { SetPrimaryColorButton } from './partials/SetPrimaryColorButton'
import { Clear } from '@mui/icons-material'
import { ColorTable } from './partials/ColorTable'

export const PrimaryColorHistory: FC = () => {
  const primaryColorHistory = useColorStore(
    (state) => state.primaryColorHistory
  )
  const removePrimaryColor = useColorStore((state) => state.removePrimaryColor)

  const actions = (color: string) => (
    <>
      <SetPrimaryColorButton color={color} />
      <IconButton
        title="Remove from history"
        onClick={() => removePrimaryColor(color)}
      >
        <Clear />
      </IconButton>
    </>
  )

  if (!primaryColorHistory?.length) {
    return null
  }

  return (
    <Stack paddingY={2} spacing={2}>
      <Typography variant="h4">Primary Color History</Typography>
      <ColorTable colors={primaryColorHistory} actions={actions} />
    </Stack>
  )
}
