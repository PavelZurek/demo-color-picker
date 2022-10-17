import create from 'zustand'
import { persist } from 'zustand/middleware'
import { useEffect, useState } from 'react'

interface ColorStoreState {
  colors: string[]
  likedColors: string[]
  primaryColor?: string
  primaryColorHistory: string[]
  setColors: (colors: string[]) => void
  setPrimaryColor: (color: string) => void
}

const emptyState = (set) => ({
  colors: [],
  likedColors: [],
  primaryColor: undefined,
  primaryColorHistory: [],
  setColors: (colors: string[]) => set(() => ({ colors })),
  toggleLikedColor: (color: string) =>
    set((state) => {
      if (state.likedColors.includes(color)) {
        return {
          likedColors: state.likedColors.filter((c) => c !== color),
        }
      } else {
        return {
          likedColors: [...state.likedColors, color],
        }
      }
    }),
  setPrimaryColor: (primaryColor: string) =>
    set((state) => {
      const primaryColorHistory = state.primaryColorHistory

      if (!primaryColorHistory.includes(primaryColor)) {
        primaryColorHistory.push(primaryColor)
      }
      if (primaryColorHistory.length > 5) {
        primaryColorHistory.shift()
      }

      return {
        primaryColorHistory,
        primaryColor,
      }
    }),
})

const usePersistedColorStore = create(
  persist<ColorStoreState>(emptyState, { name: 'color-storage' })
)

export const useColorStore = (selector) => {
  /*
      This a fix to ensure zustand never hydrates the store before React hydrates the page.
      Without this, there is a mismatch between SSR/SSG and client side on first draw which produces
      an error.
  */
  const store = usePersistedColorStore(selector)
  const [isHydrated, setHydrated] = useState(false)
  useEffect(() => setHydrated(true), [])
  return isHydrated ? store : selector(emptyState)
}
