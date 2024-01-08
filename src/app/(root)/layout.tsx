import { Metadata } from 'next'
import React, { ReactNode } from 'react'
import KaelaLogo from '~/components/kaelaLogo'
import ScrollObserver from '~/utils/scrollObserver'

export const metadata: Metadata = {
  title: 'Kaela kovalskia Fansite',
  description:
    'Kaela Kovalskia Fansite made by pemaloe contains basic (way too basic) information about Kaela Kovalskia as a Vtuber from Hololive Indonesia',
  keywords: [
    'Kaela Kovalskia',
    'Pemaloe',
    'Gachan',
    'Hololive',
    'Hololive Indonesia',
    'Holoid',
    'Fansite',
    'unofficial site',
    'Kaeluarga',
  ],
}

const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ScrollObserver>
      <KaelaLogo />
      {children}
    </ScrollObserver>
  )
}

export default RootLayout
