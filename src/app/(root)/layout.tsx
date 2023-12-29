import React, { ReactNode } from 'react'
import ImageSelector from '~/components/imageSelector'
import KaelaLogo from '~/components/kaelaLogo'
import ScrollObserver from '~/utils/scrollObserver'

const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ScrollObserver>
      <ImageSelector />
      <KaelaLogo />
      {children}
    </ScrollObserver>
  )
}

export default RootLayout
