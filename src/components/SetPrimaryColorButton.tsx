import { FC } from 'react'
import { useColorStore } from '../hooks/useColorStore'
import { IconButton } from '@mui/material'
import { FormatColorFill } from '@mui/icons-material'

export const SetPrimaryColorButton: FC<{ color: string }> = ({ color }) => {
  const setPrimaryColor = useColorStore((state) => state.setPrimaryColor)

  return (
    <IconButton
      title="Set As Primary Color"
      onClick={() => setPrimaryColor(color)}
    >
      <FormatColorFill />
    </IconButton>
  )
}
