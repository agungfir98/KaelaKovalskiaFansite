'use client'
import React, { useContext } from 'react'
import cn from '~/utils/tailwindMerge'
import Image from 'next/image'
import { scrollCtx } from '~/utils/scrollObserver'

const KaelaLogo = () => {
  const { scrollY } = useContext(scrollCtx)
  return (
    <div className="relative">
      <div
        className={cn(
          'fixed z-50 mx-4 flex h-40 w-48 justify-start transition-all duration-700',
          scrollY > 100 && 'h-20 w-20',
        )}
      >
        <Image
          src={'/assets/KaelaChannelLogo.png'}
          alt="kaela channel logo"
          fill
          sizes="100%"
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default KaelaLogo
