import React, { ReactNode } from 'react'
import KaelaLogo from '~/components/kaelaLogo'
import ScrollObserver from '~/utils/scrollObserver'

const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ScrollObserver>
      <KaelaLogo />
      {children}
    </ScrollObserver>
  )
}

export default RootLayout
