export const getRandomColor = (): string => {
  const chars = '0123456789abcdef'
  let color = '#'

  for (let i = 0; i < 6; i++) {
    color += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return color
}

export const getRandomColors = (
  count: number,
  excludedColors: string[] = []
) => {
  const colors = []

  do {
    const newColor = getRandomColor()
    if (!colors.includes(newColor) && !excludedColors.includes(newColor)) {
      colors.push(newColor)
    }
  } while (colors.length < count)

  return colors
}

export const isColorLight = (color: string) => {
  const hex = color.replace('#', '')
  const c_r = parseInt(hex.substring(0, 2), 16)
  const c_g = parseInt(hex.substring(2, 4), 16)
  const c_b = parseInt(hex.substring(4, 6), 16)
  const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000
  return brightness > 155
}
