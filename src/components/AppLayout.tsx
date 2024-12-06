import React, { FC, ReactNode } from 'react'
import { Footer } from './Footer'
import Header from './Header'
import { useDarkMode } from '../context/dark_mode'

const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { mode } = useDarkMode()
  return (
    <>
      <Header />
      <div
        className={`h-screen bg-lite-brand
     dark:bg-dark-brand ${mode === 'dark' ? 'dark' : ''}`}
      >
        <div className={`min-2xl:w-[2500px] min-md:mb-[45px]`}>
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default AppLayout;