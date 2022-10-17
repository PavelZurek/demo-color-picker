import { FC } from 'react'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import { getRandomColors } from '../color'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { useColorStore } from '../hooks/useColorStore'
import { SetPrimaryColorButton } from './partials/SetPrimaryColorButton'
import { ColorTable } from './partials/ColorTable'

export const ColorGenerator: FC = () => {
  const colors = useColorStore((state) => state.colors)
  const setColors = useColorStore((state) => state.setColors)
  const likedColors = useColorStore((state) => state.likedColors)
  const toggleLikedColor = useColorStore((state) => state.toggleLikedColor)

  const isColorLiked = (colorCode: string): boolean => {
    return likedColors.includes(colorCode)
  }

  const onGenerateColorsClick = () => {
    setColors([
      ...likedColors,
      ...getRandomColors(8 - likedColors.length, likedColors),
    ])
  }

  const colorActions = (color: string) => (
    <>
      <IconButton
        title={isColorLiked(color) ? 'Dislike' : 'Like'}
        onClick={() => toggleLikedColor(color)}
      >
        {isColorLiked(color) ? <Favorite /> : <FavoriteBorder />}
      </IconButton>
      <SetPrimaryColorButton color={color} />
    </>
  )

  return (
    <Stack paddingY={2} spacing={2}>
      <Typography variant="h4">Color Generator</Typography>
      <ColorTable colors={colors} actions={colorActions} />
      <Button variant="contained" onClick={onGenerateColorsClick}>
        Generate Color Palette
      </Button>
    </Stack>
  )
}
