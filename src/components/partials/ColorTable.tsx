import { FC } from 'react'
import { Table, TableBody, TableCell, TableRow } from '@mui/material'

export const ColorTable: FC<{
  colors: string[]
  actions?: (color: string) => JSX.Element
}> = ({ colors, actions }) => {
  return (
    <Table>
      <TableBody>
        {colors?.map((color) => (
          <TableRow key={color}>
            <TableCell
              width="50%"
              style={{ backgroundColor: color }}
            ></TableCell>
            <TableCell>{color}</TableCell>
            {actions && <TableCell>{actions(color)}</TableCell>}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
