import { FC } from 'react'
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
import { useColorStore } from '../hooks/useColorStore'

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

  return (
    <Stack paddingY={2} spacing={2}>
      <Table>
        <TableBody>
          {colors?.map((colorCode) => (
            <TableRow key={colorCode}>
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
