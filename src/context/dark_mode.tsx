import React, { FC, ReactNode, createContext, useContext, useCallback, useState } from 'react'

interface ModeConfig {
  mode: string
  toggleMode: () => void
  isDarkMode: boolean
}

const DarkModeContext = createContext<ModeConfig | null>(null)

export const DarkModeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<string>('dark')
  const root = document.getElementsByTagName('body')[0]
  if (mode === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
  const handleToggleMode = useCallback(() => setMode(mode === 'dark' ? 'lite' : 'dark'), [mode, setMode])

  return (
    <DarkModeContext.Provider
      value={{
        mode,
        toggleMode: handleToggleMode,
        isDarkMode: mode === 'dark'
      }}
    >
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = (): ModeConfig => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('Missing dark mode context!')
  }

  return context
}