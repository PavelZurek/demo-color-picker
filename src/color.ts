export const getRandomColor = (): string => {
  const chars = '0123456789abcdef'
  let color = '#'

  for (let i = 0; i < 6; i++) {
    color += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return color
}

export const getRandomColors = (count: number) => {
  const colors = []

  do {
    const newColor = getRandomColor()
    if (!colors.includes(newColor)) {
      colors.push(newColor)
    }
  } while (colors.length < count)

  return colors
}
