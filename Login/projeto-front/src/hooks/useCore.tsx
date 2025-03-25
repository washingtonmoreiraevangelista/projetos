import { createContext, ReactNode, useContext, useState } from 'react'

interface ICoreContext {
  sideMenuOpened: boolean
  updateSidemenuOpened: (opened: boolean) => void
  sideMenuDisabled: boolean
  updateSidemenuDisabled: (disabled: boolean) => void
}

export const CoreContext = createContext<ICoreContext | undefined>(undefined)

type CoreProviderProps = {
  children: ReactNode
}

export const CoreProvider = ({ children }: CoreProviderProps) => {
  const [sideMenuOpened, setSidemenuOpened] = useState<boolean>(false)
  const [sideMenuDisabled, setSideMenuDisabled] = useState<boolean>(false)

  const updateSidemenuOpened = (opened: boolean) => {
    setSidemenuOpened(opened) 
  }

  const updateSidemenuDisabled = (disabled: boolean) => {
    setSideMenuDisabled(disabled)
  }

  return (
    <CoreContext.Provider
      value={{
        sideMenuOpened,
        updateSidemenuOpened,
        sideMenuDisabled,
        updateSidemenuDisabled
      }}
    >
      {children}
    </CoreContext.Provider>
  )
}

export const useCore = (): ICoreContext => {
  const context = useContext(CoreContext)
  
  if (!context) {
    throw new Error('useCore must be used within a CoreProvider')
  }
  return context
}
