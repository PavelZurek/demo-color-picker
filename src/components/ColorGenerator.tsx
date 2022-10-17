import { FC, useState } from 'react'
import {
  Button,
  IconButton,
  Stack,
  Table,
  TableCell,
  TableRow,
} from '@mui/material'
import { getRandomColors } from '../color'
import { FavoriteBorder } from '@mui/icons-material'

export const ColorGenerator: FC = () => {
  const [colors, setColors] = useState<string[]>([])

  const onGenerateColorsClick = () => {
    setColors(getRandomColors(8))
  }

  return (
    <Stack paddingY={2} spacing={2}>
      <Table>
        {colors.map((colorCode: string, index) => (
          <TableRow key={`color-${index}`}>
            <TableCell
              width="50%"
              style={{ backgroundColor: colorCode }}
            ></TableCell>
            <TableCell>{colorCode}</TableCell>
            <TableCell>
              <IconButton>
                <FavoriteBorder />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </Table>
      <Button variant="contained" onClick={onGenerateColorsClick}>
        Generate Color Palette
      </Button>
    </Stack>
  )
}
