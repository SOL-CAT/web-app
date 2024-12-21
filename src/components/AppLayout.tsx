import { FC, ReactNode } from 'react'
import Header from './Header'

const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <div
        className='h-screen w-screen bg-lite-brand'>
        <div>
          {children}
        </div>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default AppLayout;