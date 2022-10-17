import { FC, useState } from 'react'
import {
  Button,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material'
import { getRandomColors } from '../color'
import { Favorite, FavoriteBorder } from '@mui/icons-material'

export const ColorGenerator: FC = () => {
  const [colors, setColors] = useState<string[]>([])
  const [likedColors, setLikedColors] = useState<string[]>([])

  const isColorLiked = (colorCode: string): boolean => {
    return likedColors.includes(colorCode)
  }

  const toggleLikedColor = (colorCode: string) => {
    if (isColorLiked(colorCode)) {
      setLikedColors(likedColors.filter((color) => color !== colorCode))
    } else {
      setLikedColors([...likedColors, colorCode])
    }
  }

  const onGenerateColorsClick = () => {
    setColors([
      ...likedColors,
      ...getRandomColors(8 - likedColors.length, likedColors),
    ])
  }

  return (
    <Stack paddingY={2} spacing={2}>
      <Table>
        <TableBody>
          {colors.map((colorCode: string, index) => (
            <TableRow key={`color-${index}`}>
              <TableCell
                width="50%"
                style={{ backgroundColor: colorCode }}
              ></TableCell>
              <TableCell>{colorCode}</TableCell>
              <TableCell>
                <IconButton
                  title={isColorLiked(colorCode) ? 'Dislike' : 'Like'}
                  onClick={() => toggleLikedColor(colorCode)}
                >
                  {isColorLiked(colorCode) ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" onClick={onGenerateColorsClick}>
        Generate Color Palette
      </Button>
    </Stack>
  )
}
